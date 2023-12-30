const User = require('./user.mongo');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'stripe-samples/subscription-use-cases/fixed-price',
    version: '0.0.1',
    url: 'https://github.com/stripe-samples/subscription-use-cases/fixed-price',
  },
});

const createUser = (values) =>
  new User(values).save().then((user) => user.toObject());

const getUsers = async (req) =>
  await User.find().select('-refreshToken').select('-password');
// .cache({ key: req.user.id })

const getUserById = (id) =>
  User.findById(id)
    .select('-refreshToken -password')
    .populate('events')
    .populate('members')
    .populate('reviews')
    .populate('savedEvents');

const getUserByEmail = (email) =>
  User.findOne({ email }).populate('members').populate('savedEvents');

const getUserByRefreshToken = (refreshToken) =>
  User.findOne({ refreshToken: { $in: [refreshToken] } });

const updateUser = (id, updates) => {
  return User.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  })
    .select('-refreshToken')
    .select('-password');
};

const removeUser = (id) => {
  return User.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
};

const updateUserPlan = async (userId, newPlan) => {
  try {
    // Fetch the user and their subscription details
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    // Check if the user has an active subscription
    if (
      user.userType === 'PROVIDER' &&
      user.subscription &&
      user.subscription.subscriptionId
    ) {
      const subscriptionId = user.subscription.subscriptionId;

      // Retrieve the subscription details from Stripe
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      // Compare the subscription's current_period_end with the current date
      if (subscription.current_period_end > Math.floor(Date.now() / 1000)) {
        console.log(
          `User ${user.email} has an active subscription. No update needed.`
        );
        return user;
      }
    }

    // Update the user's subscription plan to the new plan
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 'subscription.plan': newPlan },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error('Error updating user subscription plan');
    }

    console.log(`Updated subscription for user: ${user.email}`);

    return updatedUser;
  } catch (error) {
    console.error(`Error updating user subscription plan: ${error.message}`);
    throw error;
  }
};

const searchUsers = async (query) => {
  try {
    const users = await User.find({
      $or: [
        { email: { $regex: query, $options: 'i' } },
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
      ],
    }).select('-refreshToken -password');

    return users;
  } catch (error) {
    console.error('Error searching users:', error.message);
    throw error;
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByRefreshToken,
  updateUser,
  removeUser,
  updateUserPlan,
  searchUsers,
};
