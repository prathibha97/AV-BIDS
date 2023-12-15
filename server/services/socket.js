const io = require('socket.io-client');

const socket = io.connect(
  process.env.NODE_ENV === 'development'
    ? 'ws://localhost:5005'
    : 'ws://www.avbids.com:5005'
);

module.exports = socket;
