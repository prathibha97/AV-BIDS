const { updateUserPlan } = require('../models/user/user.model');
const User = require('../models/user/user.mongo')

const updateUserSubscriptionPlan = async () => {
  console.log('Running daily task to update user subscriptions...');

  // Fetch all users from the database and iterate over them
    const providerUsers = await User.find({userType: 'PROVIDER'});

  for (const user of providerUsers) {
    try {
      await updateUserPlan(user._id, 'BASIC');

      console.log(`Updated subscription for user: ${user.email}`);
    } catch (error) {
      console.error(
        `Error updating subscription for user ${user.email}: ${error.message}`
      );
    }
  }

  console.log('Daily task completed.');
};

module.exports = updateUserSubscriptionPlan;
