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

reviewRouter.post('/', protect, cleanCache, createNewReview);
reviewRouter.get('/', protect, getAllReviews);
reviewRouter.get('/planner/:id', protect, getReviewsByEventPlanner);
reviewRouter.get('/:id', protect, getReview);
reviewRouter.put('/:id', protect, cleanCache, update);
reviewRouter.delete('/:id', protect, cleanCache, remove);

module.exports = reviewRouter;
