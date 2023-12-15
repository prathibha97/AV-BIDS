const {
  getNotifications,
  getNotificationsByUser,
  clearUserNotifications,
  markAsRead,
} = require('../models/notification/notification.model');
/* 
?@desc   Get all notifications
*@route  POST /api/notifications
*@access Private/Admin
*/

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await getNotifications();
    return res.status(200).json(notifications);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: 'Error occured while fetching the notifications' });
  }
};

/* 
?@desc   Get user notifications
*@route  Get /api/notifications/user/:userId
*@access Private
*/

const getNotificationsById = async (req, res) => {
  const { id } = req.params;
  try {
    const notifications = await getNotificationsByUser(id);
    return res.status(200).json(notifications);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: 'Error occured while fetching the notifications' });
  }
};

/* 
?@desc   Clear user notifications
*@route  Delete /api/notifications/user/:userId
*@access Private
*/

const clearNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    await clearUserNotifications(userId);
    res.status(200).json({ message: 'Notifications cleared successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Error clearing notifications', err });
  }
};

/* 
?@desc   Mark notification as read
*@route  Put /api/notifications/:id
*@access Private
*/

const markNotificationAsRead = async (req, res) => {
  const { id } = req.params;
  try {
    const notification = markAsRead(id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    return res.status(200).json(notification);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Something went wrong!' });
  }
};
module.exports = {
  getAllNotifications,
  getNotificationsById,
  clearNotifications,
  markNotificationAsRead,
};
