const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
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
    insurance: String,
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member', // Reference to the Member model
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review', // Reference to the Review model
      },
    ],
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    savedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
