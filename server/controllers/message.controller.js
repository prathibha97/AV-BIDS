const {
  createMessage,
  getMessages,
} = require('../models/message/message.model');

const Conversation = require('../models/conversation/conversation.mongo');
const Message = require('../models/message/message.mongo');

/* 
?@desc   Create a new message
*@route  POST /api/messages
*@access Private
*/
// const createNewMessage = async (req, res) => {
//   try {
//     const savedMessage = await createMessage(req.body);
//     res.status(200).json(savedMessage);
//   } catch (error) {
//     console.error('Failed to create message - ', error.message);
//     return res.status(500).json('Internal Server Error');
//   }
// };

const createNewMessage = async (req, res) => {
  try {
    const savedMessage = await createMessage(req.body);

    // Add the new message to the conversation's messages array
    const { conversationId } = req.body;
    await Conversation.findOneAndUpdate(
      { _id: conversationId },
      { $addToSet: { messages: savedMessage._id } },
      { new: true }
    );

    // Update the conversation's readBy field
    const { sender } = req.body;
    await Conversation.findOneAndUpdate(
      { _id: conversationId },
      { $addToSet: { readBy: sender } },
      { new: true }
    );

    res.status(200).json(savedMessage);
  } catch (error) {
    console.error('Failed to create message - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   get messages by conversation
*@route  Get /api/messages/:conversationId
*@access Private
*/
// const getMessageByConversationId = async (req, res) => {
//   try {
//     const { conversationId } = req.params;

//     const messages = await getMessages(conversationId);
//     res.status(200).json(messages);
//   } catch (error) {
//     console.error('Failed to get messages - ', error.message);
//     return res.status(500).json('Internal Server Error');
//   }
// };

const getMessageByConversationId = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await getMessages(conversationId);

    // Mark messages as read by the current user
    const { userId } = req.user; // Make sure to get the current user ID
    await Conversation.findOneAndUpdate(
      { _id: conversationId },
      { $addToSet: { readBy: userId } },
      { new: true }
    );

    res.status(200).json(messages);
  } catch (error) {
    console.error('Failed to get messages - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get unread messages in a conversation
*@route  Get /api/messages/unread/:conversationId
*@access Private
*/
const getUnreadMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    // Get the conversation and the current user ID
    const { _id:userId } = req.user; // Make sure to get the current user ID

    const conversation = await Conversation.findById({ _id: conversationId });

    // Check if the conversation exists and the current user is a member
    if (!conversation || !conversation.members.includes(userId)) {
      return res.status(404).json('Conversation not found');
    }

    // Get unread messages based on readBy field
    const unreadMessages = await Message.find({
      conversation: conversationId,
      sender: { $ne: userId }, // Exclude messages sent by the current user
      createdAt: { $gte: conversation.createdAt }, // Filter messages created after the conversation started
      readBy: { $ne: userId }, // Check if the current user has not read the message
    });

    res.status(200).json(unreadMessages);
  } catch (error) {
    console.error('Failed to get unread messages - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewMessage,
  getMessageByConversationId,
  getUnreadMessages,
};
