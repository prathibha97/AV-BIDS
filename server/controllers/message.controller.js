const {
  createMessage,
  getMessages,
} = require('../models/message/message.model');

/* 
?@desc   Create a new message
*@route  POST /api/messages
*@access Private
*/
const createNewMessage = async (req, res) => {
  try {
    const savedMessage = await createMessage(req.body);
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
const getMessageByConversationId = async (req, res) => {
  try {
    const { conversationId } = req.params;

    const messages = await getMessages(conversationId);
    res.status(200).json(messages);
  } catch (error) {
    console.error('Failed to get messages - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewMessage,
  getMessageByConversationId,
};
