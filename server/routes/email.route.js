const express = require('express');
const { Resend } = require('resend');
const { isValidEmail, generateFiveDigitOTP } = require('../utils');
const {
  getOTPByEmail,
  deleteOTPByEmail,
  saveOTP,
} = require('../models/otp/otp.model');

const emailRouter = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

emailRouter.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'New AV Bids Contact Form Submission',
      html: `
        <div class="bg-blue-500 text-white p-4">
          <p class="text-lg font-semibold">Hello AV Bids Team,</p>
          <p>You have received a new contact form submission with the following details:</p>
        </div>
        <ul class="p-4">
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Subject:</strong> ${subject}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <div class="bg-blue-500 text-white p-4">
          <p>Please respond to the user's inquiry promptly.</p>
          <p>Best regards,<br/>AV Bids Team</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email ? email : 'delivered@resend.dev',
      to: email ? email : 'delivered@resend.dev',
      subject: 'Thank You for Contacting AV Bids',
      html: `
        <div class="bg-green-500 text-white p-4">
          <p class="text-lg font-semibold">Dear ${name},</p>
          <p>Thank you for reaching out to AV Bids. We appreciate your interest and will get back to you as soon as possible.</p>
          <p>If you have any urgent matters, please feel free to contact us at info@avbids.com or (623) 420-6666.</p>
          <p>Best regards,<br/>AV Bids Team</p>
        </div>
      `,
    });
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error });
  }
});

/* 
?@desc   Send OTP to user's email
*@route  POST /api/email/send-otp
*@access Public
*/
emailRouter.post('/send-otp', async (req, res) => {
  const OTP_EXPIRATION_TIME = 60;
  try {
    const { email } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const existingOTP = await getOTPByEmail(email);

    if (existingOTP) {
      // Check if the previous OTP has expired
      if (existingOTP.expirationTime > Date.now()) {
        return res.status(400).json({ message: 'Previous OTP is still valid' });
      }
      // Remove the previous OTP if it has expired
      await deleteOTPByEmail(email);
    }

    const otp = generateFiveDigitOTP();
    const expirationTime = Date.now() + OTP_EXPIRATION_TIME * 1000;

    // Save new OTP data in MongoDB
    await saveOTP(email, otp, expirationTime);

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Your OTP for Verification',
      html: `
        Your OTP is: ${otp}. It will expire in ${OTP_EXPIRATION_TIME} seconds.
      `,
    });

    res.status(200).json({ message: 'OTP sent successfully', otp });
  } catch (error) {
    console.error('Failed to send OTP - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
});

/* 
?@desc   Verify OTP
*@route  POST /api/email/verify-otp
*@access Public
*/
emailRouter.post('/verify-otp', async (req, res) => {
  try {
    const { email, userEnteredOTP } = req.body;

    const otpData = await getOTPByEmail(email);

    if (!otpData || otpData.expirationTime < Date.now()) {
      return res.status(400).json({ message: 'OTP has expired or is invalid' });
    }

    if (userEnteredOTP === otpData.otp) {
      await deleteOTPByEmail(email); // Remove the used OTP
      res.status(200).json({ message: 'OTP verified successfully', verified: true});
    } else {
      return res.status(400).json({ message: 'Incorrect OTP', verified: false });
    }
  } catch (error) {
    console.error('Failed to verify OTP - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
});

module.exports = emailRouter;
