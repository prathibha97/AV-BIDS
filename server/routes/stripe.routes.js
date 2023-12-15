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

/**
 * @swagger
 * tags:
 *   name: Stripe
 *   description: Stripe integration
 */

/**
 * @swagger
 * /api/stripe/config:
 *   get:
 *     summary: Get Stripe configuration
 *     tags: [Stripe]
 *     description: Retrieve the configuration for Stripe
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Stripe configuration
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/retrieve-subscription:
 *   get:
 *     summary: Retrieve a subscription
 *     tags: [Stripe]
 *     description: Retrieve a subscription by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: subscriptionId
 *         required: true
 *         description: ID of the subscription
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subscription details
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/create-customer:
 *   post:
 *     summary: Create a Stripe customer
 *     tags: [Stripe]
 *     description: Create a new Stripe customer
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCustomer'
 *     responses:
 *       200:
 *         description: Stripe customer created successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/create-subscription:
 *   post:
 *     summary: Create a Stripe subscription
 *     tags: [Stripe]
 *     description: Create a new Stripe subscription
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSubscription'
 *     responses:
 *       200:
 *         description: Stripe subscription created successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/portal:
 *   post:
 *     summary: Create a Customer Portal
 *     tags: [Stripe]
 *     description: Create a new Customer Portal session
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCustomerPortal'
 *     responses:
 *       200:
 *         description: Customer Portal session created successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/create-card/{id}:
 *   post:
 *     summary: Create a new card
 *     tags: [Stripe]
 *     description: Create a new card for a customer
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCard'
 *     responses:
 *       200:
 *         description: Card created successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/update-customer/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Stripe]
 *     description: Update a customer by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCustomer'
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/retrieve-customer/{id}:
 *   get:
 *     summary: Retrieve a customer
 *     tags: [Stripe]
 *     description: Retrieve a customer by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer details
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/stripe/delete-card/{id}:
 *   get:
 *     summary: Delete a card
 *     tags: [Stripe]
 *     description: Delete a card by customer ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the customer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Card deleted successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateCustomer:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *       required:
 *         - email
 *
 *     CreateSubscription:
 *       type: object
 *       properties:
 *         priceId:
 *           type: string
 *         email:
 *           type: string
 *       required:
 *         - priceId
 *         - email
 *
 *     CreateCustomerPortal:
 *       type: object
 *       properties:
 *         customerId:
 *           type: string
 *       required:
 *         - customerId
 *
 *     CreateCard:
 *       type: object
 *       properties:
 *         source:
 *           type: string
 *       required:
 *         - source
 *
 *     UpdateCustomer:
 *       type: object
 *       properties:
 *         address:
 *           type: object
 *         name:
 *           type: string
 *
 */

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
