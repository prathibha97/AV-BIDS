const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  userType: {
    type: String,
    enum: ['PLANNER', 'PROVIDER'],
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Standard'],
    default: 'Standard',
  },
  refreshToken: [String],
});

module.exports = mongoose.model('User', userSchema);
