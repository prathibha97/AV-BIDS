const User = require('./user.mongo');

const createUser = (values) =>
  new User(values).save().then((user) => user.toObject());

const getUsers = () => User.findOne();

const getUserByEmail = (email) => User.findOne({ email });

const getUserByRefreshToken = (refreshToken) =>
  User.findOne({ refreshToken: { $in: [refreshToken] } });

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  getUserByRefreshToken,
};
