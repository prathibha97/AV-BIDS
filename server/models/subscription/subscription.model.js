const Subscription = require('./subscription.mongo');

const createUserSubscription = (values) =>
  new Subscription(values).save().then((message) => message.toObject());


module.exports = {
  createUserSubscription,
};
