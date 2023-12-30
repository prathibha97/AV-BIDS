const mongoose = require('mongoose');

// const conversationSchema = new mongoose.Schema(
//   {
//     members: {
//       type: Array,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Conversation', conversationSchema);


const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],
    // Add a new field to track read/unread status
    readBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
