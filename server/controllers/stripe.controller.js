const {
  createUserSubscription,
} = require('../models/subscription/subscription.model');
const { getUserByEmail } = require('../models/user/user.model');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'stripe-samples/subscription-use-cases/fixed-price',
    version: '0.0.1',
    url: 'https://github.com/stripe-samples/subscription-use-cases/fixed-price',
  },
});

/* 
?@desc   Get config
*@route  Get /api/stripe/config
*@access Private
*/

const getConfig = async (req, res) => {
  const prices = await stripe.prices.list({
    lookup_keys: ['annual', 'monthly'],
    expand: ['data.product'],
  });

  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    prices: prices.data,
  });
};

/* 
?@desc   Create stripe customer
*@route  Post /api/stripe/create-customer
*@access Private
*/

const createCustomer = async (req, res) => {
  // Create a new customer object
  const customer = await stripe.customers.create({
    email: req.body.email,
  });

  // Find the user in the database by email
  const user = await getUserByEmail(email);

  // Update the user's subscription field with the customer id
  if (user) {
    user.subscription.customerId = customer.id;
    await user.save();
  }

  res.send({ customer: customer });
};

/* 
?@desc   Create stripe subscription
*@route  Post /api/stripe/create-subscription
*@access Private
*/

const createSubscription = async (req, res) => {
  const { priceId, email } = req.body;

  try {
    // Create a new customer object
    const customer = await stripe.customers.create({
      email: req.body.email,
    });

    // Find the user in the database by email
    const user = await getUserByEmail(email);

    // Update the user's subscription field with the customer id
    if (user) {
      user.subscription.customerId = customer.id;
      await user.save();
    }

    // Create the subscription
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });

    if (user) {
      user.subscription.subscriptionId = subscription.id;
      await user.save();
    }

    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
};

/* 
?@desc   Create stripe subscription
*@route  Get /api/stripe/retrieve-subscription
*@access Private
*/

const retrieveSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.query;
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    res.status(200).json(subscription);
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
};

module.exports = {
  getConfig,
  createCustomer,
  createSubscription,
  retrieveSubscription,
};
