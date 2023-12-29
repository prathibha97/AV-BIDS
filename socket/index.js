const io = require('socket.io')(5005, {
  cors: {
    origin: 'http://localhost:3000',
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

io.on('connection', (socket) => {
  //when ceonnect
  console.log('a user connected. Total users:', users.length);

  //take userId and socketId from user
  socket.on('addUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('getUsers', users);
  });

  //send and get message
  // socket.on('sendMessage', ({ senderId, receiverId, text }) => {
  //   const user = getUser(receiverId);
  //   io.to(user.socketId).emit('getMessage', {
  //     senderId,
  //     text,
  //   });
  // });

  socket.on('sendMessage', ({ senderId, receiverId, text }) => {
    if (isUserOnline(receiverId)) {
      const user = getUser(receiverId);
      io.to(user.socketId).emit('getMessage', {
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
      io.to(userSocket.socketId).emit('proposalSubmited', {
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
      io.to(userSocket.socketId).emit('eventUpdated', { eventId, message });
    }
  });

  //when disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
    removeUser(socket.id);
    io.emit('getUsers', users);
  });
});
