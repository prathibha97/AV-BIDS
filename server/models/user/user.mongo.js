const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  address: String,
  country: String,
  city: String,
  zip: String,
  state: String,
});

const subscriptionSchema = new mongoose.Schema({
  plan: {
    type: String,
    enum: ['BASIC', 'PREMIUM'],
    default: 'BASIC',
  },
  startDate: {
    type: Date,
  },
  endDate: Date,
  customerId: {
    type: String,
  },
});

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
    companyAddress: addressSchema,
    subscription: subscriptionSchema,
    refreshToken: [String],
    insurance: String,
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
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
