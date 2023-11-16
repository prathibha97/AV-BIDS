const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');

const {
  createNewMessage,
  getMessageByConversationId,
} = require('../controllers/message.controller');

const messageRouter = express.Router();

messageRouter.post('/', protect, createNewMessage);
messageRouter.get('/:conversationId', protect, getMessageByConversationId);

module.exports = messageRouter;
