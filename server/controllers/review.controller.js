const {
  createReview,
  getReviews,
  getReviewById,
  getEventPlannerReviews,
  updateReview,
  removeReview,
} = require('../models/review/review.model');

/* 
?@desc   Create a new review
*@route  POST /api/reviews
*@access Private
*/
const createNewReview = async (req, res) => {
  try {
    const reviewBody = req.body;

    const review = await createReview(reviewBody, reviewBody.eventPlanner);
    res.status(200).json(review);
  } catch (error) {
    console.error('Failed to create review - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get all reviews
*@route  GET /api/reviews
*@access Private
*/
const getAllReviews = async (req, res) => {
  try {
    const reviews = await getReviews(req);
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Failed to fetch reviews - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get review by ID
*@route  GET /api/reviews/:id
*@access Private
*/

const getReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);
    res.status(200).json(review);
  } catch (error) {
    console.error('Failed to fetch review - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get review by event planner
*@route  GET /api/reviews/planner/:id
*@access Private
*/

const getReviewsByEventPlanner = async (req, res) => {
  try {
    const { id } = req.params;
    const reviews = await getEventPlannerReviews(id);
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Failed to fetch reviews - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Update review
*@route  PUT /api/reviews/:id
*@access Private
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment, eventPlanner, createdBy } = req.body;
    const review = await updateReview(id, {
      rating,
      comment,
      eventPlanner,
      createdBy,
    });
    res.status(200).json(review);
  } catch (error) {
    console.error('Failed to update review - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Remove review
*@route  DELETE /api/reviews/:id
*@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedReview = await removeReview(id);
    res.status(200).json(deletedReview);
  } catch (error) {
    console.error('Failed to remove review - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewReview,
  getAllReviews,
  getReview,
  getReviewsByEventPlanner,
  update,
  remove,
};
