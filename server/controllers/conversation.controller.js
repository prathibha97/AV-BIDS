const {
  createConversation,
  getConversation,
} = require('../models/conversation/conversation.model');

/* 
?@desc   Create a new conversation
*@route  POST /api/conversations
*@access Private
*/
const createNewConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const savedConversation = await createConversation({
      members: [senderId, receiverId],
    });
    res.status(200).json(savedConversation);
  } catch (error) {
    console.error('Failed to create conversation - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get conversation
*@route  Get /api/conversations
*@access Private
*/
const getConversationbyId = async (req, res) => {
  const { userId } = req.params;
  try {
    const conversation = await getConversation(userId);
    res.status(200).json(conversation);
  } catch (error) {
    console.error('Failed to get conversation - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewConversation,
  getConversationbyId,
};
