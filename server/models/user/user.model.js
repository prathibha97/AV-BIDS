const User = require('./user.mongo');

const createUser = (values) =>
  new User(values).save().then((user) => user.toObject());

const getUsers = async (req) =>
  await User.find()
    .cache({ key: req.user.id })
    .select('-refreshToken')
    .select('-password');

const getUserById = (id) =>
  User.findById({ _id: id }).select('-refreshToken').select('-password');

const getUserByEmail = (email) => User.findOne({ email });

const getUserByRefreshToken = (refreshToken) =>
  User.findOne({ refreshToken: { $in: [refreshToken] } });

const updateUser = (id, updates) => {
  return User.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  })
    .select('-refreshToken')
    .select('-password');
};

const removeUser = (id) => {
  return User.findByIdAndRemove({ _id: id });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByRefreshToken,
  updateUser,
  removeUser,
};
