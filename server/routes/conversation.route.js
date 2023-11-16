const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');

const {
createNewConversation,
getConversationbyId
} = require('../controllers/conversation.controller');

const conversationRouter = express.Router();

conversationRouter.post('/', protect, createNewConversation);
conversationRouter.get('/:userId', protect, getConversationbyId);


module.exports = conversationRouter;
