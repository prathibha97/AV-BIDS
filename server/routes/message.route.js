const express = require('express');
const { protect } = require('../middlewares/auth');
const {
  createNewMessage,
  getMessageByConversationId,
} = require('../controllers/message.controller');

const messageRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Message management
 */

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Create a new message
 *     tags: [Messages]
 *     description: Create a new message
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: A new message object
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/messages/{conversationId}:
 *   get:
 *     summary: Get messages by conversation ID
 *     tags: [Messages]
 *     description: Retrieve messages by conversation ID
 *     parameters:
 *       - in: path
 *         name: conversationId
 *         required: true
 *         description: ID of the conversation
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of messages for the conversation
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Conversation not found
 *       500:
 *         description: Internal Server Error
 */

messageRouter.post('/', protect, createNewMessage);
messageRouter.get('/:conversationId', protect, getMessageByConversationId);

module.exports = messageRouter;
