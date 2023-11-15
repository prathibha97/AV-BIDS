const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');

const {
  createNewReview,
  getAllReviews,
  getReview,
  getReviewsByEventPlanner,
  update,
  remove,
} = require('../controllers/review.controller');

const reviewRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     description: Create a new review
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: A new review object
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Get all reviews
 *     tags: [Reviews]
 *     description: Retrieve a list of all reviews
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of reviews
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/reviews/planner/{id}:
 *   get:
 *     summary: Get reviews for an event planner by ID
 *     tags: [Reviews]
 *     description: Retrieve reviews for an event planner by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event planner
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of reviews for the event planner
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Event planner not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     tags: [Reviews]
 *     description: Retrieve a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The review object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Review not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Reviews]
 *     description: Update a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: Updated review object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Review not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a review by ID
 *     tags: [Reviews]
 *     description: Delete a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review
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
 *         description: Review not found
 *       500:
 *         description: Internal Server Error
 */

reviewRouter.post('/', protect, cleanCache, createNewReview);
reviewRouter.get('/', protect, getAllReviews);
reviewRouter.get('/planner/:id', protect, getReviewsByEventPlanner);
reviewRouter.get('/:id', protect, getReview);
reviewRouter.put('/:id', protect, cleanCache, update);
reviewRouter.delete('/:id', protect, cleanCache, remove);

module.exports = reviewRouter;
