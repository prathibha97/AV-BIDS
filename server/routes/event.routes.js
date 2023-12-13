const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const cleanCache = require('../middlewares/cleanCache');

const {
  createNewEvent,
  getAllEvents,
  getUserEvents,
  getEvent,
  update,
  remove,
  saveEvent,
  getRecentEvent,
  getRecentEvents,
  getSavedEventsByUser
} = require('../controllers/event.controller');

const eventRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event management
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     description: Create a new event
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: A new event object
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     description: Retrieve a list of all events
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of events
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Events]
 *     description: Retrieve an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The event object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/user/{userId}:
 *   get:
 *     summary: Get events for a user by ID
 *     tags: [Events]
 *     description: Retrieve events for a user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of events for the user
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Update an event by ID
 *     tags: [Events]
 *     description: Update an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: Updated event object
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete an event by ID
 *     tags: [Events]
 *     description: Delete an event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the event
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: No Content
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/save/{eventId}:
 *   post:
 *     summary: Save an event
 *     tags: [Events]
 *     description: Save an event for the authenticated user
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: ID of the event to be saved
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user saving the event
 *             required:
 *               - userId
 *     responses:
 *       200:
 *         description: Event saved successfully
 *       400:
 *         description: Event already saved
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/recent:
 *   get:
 *     summary: Get recent events
 *     tags: [Events]
 *     description: Retrieve a list of recent events
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of recent events
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/events/saved/{userId}:
 *   get:
 *     summary: Get saved events for a user by ID
 *     tags: [Events]
 *     description: Retrieve saved events for a user by ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of saved events for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

eventRouter.post('/', protect, cleanCache, createNewEvent);
eventRouter.get('/', getAllEvents);
eventRouter.get('/recent', getRecentEvents);
eventRouter.get('/user/:userId', getUserEvents);
eventRouter.post('/save/:eventId', protect, saveEvent);
eventRouter.get('/saved/:userId', protect, getSavedEventsByUser);
eventRouter.get('/:id', getEvent);
eventRouter.put('/:id', protect, cleanCache, update);
eventRouter.delete('/:id', protect, cleanCache, remove);

module.exports = eventRouter;
