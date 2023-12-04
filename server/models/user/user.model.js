const User = require('./user.mongo');

const createUser = (values) =>
  new User(values).save().then((user) => user.toObject());

const getUsers = async (req) =>
  await User.find().select('-refreshToken').select('-password');
// .cache({ key: req.user.id })

const getUserById = (id) =>
  User.findById(id)
    .select('-refreshToken -password')
    .populate('events')
    .populate('members')
    .populate('reviews')
    .populate('savedEvents');

const getUserByEmail = (email) =>
  User.findOne({ email }).populate('members').populate('savedEvents');

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
  return User.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
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
