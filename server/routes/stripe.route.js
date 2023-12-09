const express = require('express');
const { getConfig,createCustomer,createSubscription, retrieveSubscription } = require('../controllers/stripe.controller');
const { protect } = require('../middlewares/auth');

const stripeRouter = express.Router();

stripeRouter.get('/config', protect, getConfig);
stripeRouter.post('/create-customer', protect, createCustomer);
stripeRouter.post('/create-subscription', protect, createSubscription);
stripeRouter.get('/retrieve-subscription', protect, retrieveSubscription);

module.exports = stripeRouter;
