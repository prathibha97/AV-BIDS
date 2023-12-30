const Conversation = require('./conversation.mongo');
const Message = require('../message/message.mongo');

const createConversation = (values) =>
  new Conversation(values)
    .save()
    .then((conversation) => conversation.toObject());

// const getConversation = (userId) =>
//   Conversation.find({
//     members: { $in: userId},
//   });

const getConversations = async (userId) => {
  try {
    const conversations = await Conversation.find({ members: userId });

    const conversationsWithLatestMessages = await Promise.all(
      conversations.map(async (conversation) => {
        const latestMessage = await Message.findOne({
          conversationId: conversation._id,
        })
          .sort({ createdAt: -1 })
          .limit(1);

        return {
          ...conversation.toObject(),
          latestMessage: latestMessage || null,
        };
      })
    );

    const sortedConversations = conversationsWithLatestMessages.sort(
      (a, b) =>
        (b.latestMessage?.createdAt || 0) - (a.latestMessage?.createdAt || 0)
    );

    return sortedConversations;
  } catch (error) {
    console.error('Failed to get conversations - ', error.message);
    throw error;
  }
};




module.exports = {
  createConversation,
  getConversations,
};
