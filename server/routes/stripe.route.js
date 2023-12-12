const express = require('express');
const {
  getConfig,
  createCustomer,
  createSubscription,
  retrieveSubscription,
  retrieveCustomer,
  updateStripeCustomer,
  createCard,
  deleteCard,
  createCustomerPortal
} = require('../controllers/stripe.controller');
const { protect } = require('../middlewares/auth');

const stripeRouter = express.Router();

stripeRouter.get('/config', getConfig);
stripeRouter.get('/retrieve-subscription', protect, retrieveSubscription);
stripeRouter.post('/create-customer', protect, createCustomer);
stripeRouter.post('/create-subscription', protect, createSubscription);
stripeRouter.post('/portal', protect, createCustomerPortal);
stripeRouter.post('/create-card/:id', protect, createCard);
stripeRouter.put('/update-customer/:id', protect, updateStripeCustomer);
stripeRouter.get('/retrieve-customer/:id', protect, retrieveCustomer);
stripeRouter.get('/delete-card/:id', protect, deleteCard);

module.exports = stripeRouter;
