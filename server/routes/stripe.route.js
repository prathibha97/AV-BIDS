const express = require('express');
const { getConfig,createCustomer,createSubscription } = require('../controllers/stripe.controller');
const { protect } = require('../middlewares/auth');

const stripeRouter = express.Router();

stripeRouter.get('/config', protect, getConfig);
stripeRouter.post('/create-customer', protect, createCustomer);
stripeRouter.post('/create-subscription', protect, createSubscription);

module.exports = stripeRouter;
