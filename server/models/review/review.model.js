const Review = require('./review.mongo');
const User = require('../user/user.mongo');


// const createReview = (values) =>
//   new Review(values).save().then((review) => review.toObject());

const createReview = async (values, userId) => {
  try {
    // Create a new review with the provided values
    const newReview = await new Review(values).save();

    // Find the user by ID
    const user = await User.findById(userId);

    // If the user is found, update the reviews array with the new review's ID
    if (user) {
      user.reviews.push(newReview._id);
      await user.save();
    }

    // Return the new review
    return newReview.toObject();
  } catch (error) {
    // Handle any errors that might occur during the process
    console.error('Failed to create review - ', error.message);
    throw new Error('Internal Server Error');
  }
};


const getReviews = async (req) =>
  await Review.find().cache({ key: req.user.id });

const getReviewById = (id) => Review.findById({ _id: id });

const getEventPlannerReviews = async (id) => {
  try {
    const reviews = await Review.find({ eventPlanner: id });
    return reviews;
  } catch (error) {
    console.error('Error fetching reviews by event planner:', error.message);
    throw error; // Rethrow the error to be caught by the controller
  }
};


const updateReview = (id, updates) => {
  return Review.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  });
};

const removeReview = (id) => {
  return Review.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
};

module.exports = {
  createReview,
  getReviews,
  getReviewById,
  getEventPlannerReviews,
  updateReview,
  removeReview,
};
