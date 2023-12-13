const {
  getNotifications,
  getNotificationsByUser,
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

module.exports = {
  getAllNotifications,
  getNotificationsById,
};