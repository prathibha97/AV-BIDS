const express = require('express');
const {
  getAllNotifications,
  getNotificationsById,
} = require('../controllers/notification.controller');
const { protect, admin } = require('../middlewares/auth');

const notificationRouter = express.Router();

notificationRouter.get('/', protect, admin, getAllNotifications);
notificationRouter.get('/:id', protect, getNotificationsById);

module.exports = notificationRouter;
