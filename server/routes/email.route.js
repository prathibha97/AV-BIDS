const express = require('express');

const {
  sendContactFormEmail,
  sendOtpEmail,
  verifyOTP,
} = require('../controllers/email.controller');

const emailRouter = express.Router();

emailRouter.post('/contact-form', sendContactFormEmail);

emailRouter.post('/send-otp', sendOtpEmail);

emailRouter.post('/verify-otp', verifyOTP);

module.exports = emailRouter;
