const express = require('express');
const {
  getConfig,
  createCustomer,
  createSubscription,
  retrieveSubscription,
  retrieveCustomer,
  updateStripeCustomer,
} = require('../controllers/stripe.controller');
const { protect } = require('../middlewares/auth');

const stripeRouter = express.Router();

stripeRouter.get('/config', protect, getConfig);
stripeRouter.post('/create-customer', protect, createCustomer);
stripeRouter.post('/create-subscription', protect, createSubscription);
stripeRouter.get('/retrieve-subscription', protect, retrieveSubscription);
stripeRouter.put('/update-customer/:id', protect, updateStripeCustomer);
stripeRouter.get('/retrieve-customer/:id', protect, retrieveCustomer);

module.exports = stripeRouter;
