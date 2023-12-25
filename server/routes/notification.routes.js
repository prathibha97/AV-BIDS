const express = require('express');
const {
  getAllNotifications,
  getNotificationsById,
  markNotificationAsRead,
  clearNotifications,
} = require('../controllers/notification.controller');
const { protect, admin } = require('../middlewares/auth');

const notificationRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */

/**
 * @swagger
 * /api/notifications:
 *   get:
 *     summary: Get all notifications (Admin only)
 *     tags: [Notifications]
 *     description: Retrieve a list of all notifications (Admin only)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of notifications
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden, only admin can access
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/notifications/user/{id}:
 *   get:
 *     summary: Get notifications by user ID
 *     tags: [Notifications]
 *     description: Retrieve notifications for a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of notifications for the user
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/notifications/{id}:
 *   put:
 *     summary: Mark a notification as read
 *     tags: [Notifications]
 *     description: Mark a notification as read by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the notification
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Notification marked as read
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/notifications/user/{userId}:
 *   delete:
 *     summary: Clear all notifications for a user
 *     tags: [Notifications]
 *     description: Clear all notifications for a user by ID
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
 *       204:
 *         description: No Content
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

notificationRouter.get('/', protect, admin, getAllNotifications);
notificationRouter.put('/:id', protect, markNotificationAsRead);
notificationRouter.get('/user/:id', getNotificationsById);
notificationRouter.delete('/user/:userId', protect, clearNotifications);

module.exports = notificationRouter;
