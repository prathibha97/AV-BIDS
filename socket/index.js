const fs = require('fs');
const https = require('https');
const io = require('socket.io');

// Load your SSL certificate and private key
const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.crt'),
};

// Create an HTTPS server
const server = https.createServer(options);

// Pass the server to Socket.io
const socketServer = io(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

const isUserOnline = (userId) => {
  return users.some((user) => user.userId === userId);
};

socketServer.on('connection', (socket) => {
  //when ceonnect
  console.log('a user connected. Total users:', users.length);

  //take userId and socketId from user
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    socketServer.emit('getUsers', users);
  });

  socket.on('newConversation', (conversation) => {
    console.log('conversation created');
    socketServer.emit('updateConversations', conversation);
  });

  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    if (isUserOnline(receiverId)) {
      const user = getUser(receiverId);
      socketServer.to(user.socketId).emit('getMessage', {
        senderId,
        text,
      });
    } else {
      console.log('Target user is not online');
      // Handle the case when the target user is not online (e.g., store the message for later delivery)
    }
  });

  socket.on('proposalSubmited', ({ userId, eventId, message }) => {
    const userSocket = getUser(userId);
    if (userSocket) {
      socketServer.to(userSocket.socketId).emit('proposalSubmited', {
        eventId,
        message,
      });
    }
  });

  // Listen for events from the Express server
  socket.on('eventUpdated', ({ userId, eventId, message }) => {
    const userSocket = getUser(userId);
    if (userSocket) {
      console.log(message);
      socketServer
        .to(userSocket.socketId)
        .emit('eventUpdated', { eventId, message });
    }
  });

  socket.on('proposalSubmited', ({ userId, eventId, message }) => {
    const userSocket = getUser(userId);
    if (userSocket) {
      socketServer.to(userSocket.socketId).emit('proposalSubmited', {
        eventId,
        message,
      });
    }
  });

  //when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    socketServer.emit('getUsers', users);
  });
});

// Listen on the server instead of directly on the port
server.listen(5005, () => {
  console.log('Server running on https://www.avbids.com:5005');
});
