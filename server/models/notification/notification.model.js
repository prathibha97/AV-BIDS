const Notification = require('./notification.mongo');

const createNotification = async (values) =>
  await new Notification(values)
    .save()
    .then((notification) => notification.toObject());

const getNotifications = async () => await Notification.find();
// .cache({ key: req.user.id })

const getNotificationsByUser = async (userId) =>
  await Notification.find({ userId }).sort({ createdAt: -1 });

module.exports = {
  createNotification,
  getNotifications,
  getNotificationsByUser,
};
