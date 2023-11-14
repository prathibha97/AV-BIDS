const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');


const {
  createNewMember,
  getAllMembers,
  getMember,
  update,
  remove,
} = require('../controllers/member.controller');

const memberRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Members
 *   description: Member management
 */

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     description: Retrieve a list of all members
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of members
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/members/{id}:
 *   get:
 *     summary: Get a member by ID
 *     tags: [Members]
 *     description: Retrieve a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the member
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A member object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal Server Error
 *   
 *   put:
 *     summary: Update a member by ID
 *     tags: [Members]
 *     description: Update a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the member
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
 *               roel:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Updated member object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Member not found
 *       500:
 *         description: Internal Server Error
 *   
 *   delete:
 *     summary: Delete a member by ID
 *     tags: [Members]
 *     description: Delete a member by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the member
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

memberRouter.post('/', protect, cleanCache, createNewMember);
memberRouter.get('/', protect, getAllMembers);
memberRouter.get('/:id', protect, getMember);
memberRouter.put('/:id', protect, cleanCache, update);
memberRouter.delete('/:id', protect, cleanCache, remove);

module.exports = memberRouter;
