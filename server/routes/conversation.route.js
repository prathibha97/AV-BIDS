const express = require('express');
const { protect } = require('../middlewares/auth');
const {
  createNewConversation,
  getConversationbyId,
} = require('../controllers/conversation.controller');

const conversationRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Conversations
 *   description: Conversation management
 */

/**
 * @swagger
 * /api/conversations:
 *   post:
 *     summary: Create a new conversation
 *     tags: [Conversations]
 *     description: Create a new conversation
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conversation'
 *     responses:
 *       200:
 *         description: A new conversation object
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/conversations/{userId}:
 *   get:
 *     summary: Get a conversation by user ID
 *     tags: [Conversations]
 *     description: Retrieve a conversation by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The conversation object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Conversation not found
 *       500:
 *         description: Internal Server Error
 */

conversationRouter.post('/', protect, createNewConversation);
conversationRouter.get('/:userId', protect, getConversationbyId);

module.exports = conversationRouter;
