const io = require('socket.io-client');

const socket = io.connect(
  process.env.NODE_ENV === 'development'
    ? 'ws://localhost:5005'
    : 'wss://34.222.132.223:5005'
);

module.exports = socket;
