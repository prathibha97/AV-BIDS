const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');

const {
  createNewProposal,
  getAllProposals,
  getProposal,
  getProposalsForUser,
  remove,
  update,
  downloadProposal
} = require('../controllers/proposal.controller');

const proposalRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Proposals
 *   description: API for managing proposals
 */

/**
 * @swagger
 * /api/proposals:
 *   post:
 *     summary: Create a new proposal
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProposal'
 *     responses:
 *       '200':
 *         description: Proposal submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProposalResponse'
 *       '400':
 *         description: Missing required fields
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.post('/', protect, cleanCache, createNewProposal);

/**
 * @swagger
 * /api/proposals:
 *   get:
 *     summary: Get all proposals
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProposalResponse'
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.get('/', protect, admin, getAllProposals);

/**
 * @swagger
 * /api/proposals/user:
 *   get:
 *     summary: Get proposals for user's events
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProposalResponse'
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.get('/user', protect, getProposalsForUser);

/**
 * @swagger
 * /api/proposals/{id}:
 *   get:
 *     summary: Get a proposal by ID
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the proposal to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProposalResponse'
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.get('/:id', protect, getProposal);

/**
 * @swagger
 * /api/proposals/{id}:
 *   put:
 *     summary: Update a proposal by ID
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the proposal to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProposal'
 *     responses:
 *       '200':
 *         description: Proposal updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProposalResponse'
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.put('/:id', protect, cleanCache, update);

proposalRouter.get('/:id/download', protect, downloadProposal);

/**
 * @swagger
 * /api/proposals/{id}:
 *   delete:
 *     summary: Remove a proposal by ID
 *     tags: [Proposals]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the proposal to remove
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Proposal removed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProposalResponse'
 *       '500':
 *         description: Internal Server Error
 */

proposalRouter.delete('/:id', protect, cleanCache, remove);

module.exports = proposalRouter;
