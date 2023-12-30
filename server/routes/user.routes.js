const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const {
  getAllUsers,
  getUser,
  update,
  remove,
  validateEmail,
  searchUsersForChat,
} = require('../controllers/users.controller');

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     description: Retrieve a list of all users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/users/validate-email:
 *   get:
 *     summary: Validate an email
 *     tags: [Users]
 *     description: Validate the format of an email
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         description: Email to be validated
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Email is valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isValid:
 *                   type: boolean
 *       400:
 *         description: Invalid email format
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     description: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A user object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     description: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Updated user object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     description: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: No Content
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/users/search/{query}:
 *   get:
 *     summary: Search users by email or name
 *     tags: [Users]
 *     description: Retrieve users matching the provided email or name
 *     parameters:
 *       - in: path
 *         name: query
 *         required: true
 *         description: Email or name to search for
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of matching users
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

userRouter.get('/', protect, admin, getAllUsers);
userRouter.get('/validate-email', validateEmail);
userRouter.get('/search/:query', protect, searchUsersForChat);
userRouter.get('/:id', getUser);
userRouter.put('/:id', protect, update);
userRouter.delete('/:id', protect, remove);

module.exports = userRouter;
