const { Resend } = require('resend');
const { isValidEmail, generateFiveDigitOTP } = require('../utils');
const {
  getOTPByEmail,
  deleteOTPByEmail,
  saveOTP,
} = require('../models/otp/otp.model');
const { getEventsById } = require('../models/event/event.model');

const resend = new Resend(process.env.RESEND_API_KEY);

/* 
?@desc   Send contact form email
*@route  POST /api/email/contact-form
*@access Public
*/

const sendContactFormEmail = async (req, res) => {
  try {
    const { name, email, phone, message, subject } = req.body;

    const emailContent = `
      <div style="background-color: #8645FF; color: #ffffff; padding: 20px; text-align: center;">
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Hello AV Bids Team,</h2>
        <p style="font-size: 16px; line-height: 1.5;">You have received a new contact form submission with the following details:</p>
      </div>
      <ul style="list-style: none; padding: 20px; background-color: #ffffff; color: #333333; text-align: left;">
        <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
        <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
        <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
        <li style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</li>
        <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
      </ul>
      <div style="background-color: #8645FF; color: #ffffff; padding: 20px; text-align: center;">
        <p style="font-size: 16px; line-height: 1.5;">Please respond to the user's inquiry promptly.</p>
        <p style="font-size: 16px; line-height: 1.5;">Best regards,<br/>AV Bids Team</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'New AV Bids Contact Form Submission',
      html: emailContent,
    });

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email ? email : 'delivered@resend.dev',
      subject: 'Thank You for Contacting AV Bids',
      html: `
        <div style="background-color: #8645FF; color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">Dear ${name},</h2>
          <p style="font-size: 16px; line-height: 1.5;">Thank you for reaching out to AV Bids. We appreciate your interest and will get back to you as soon as possible.</p>
          <p style="font-size: 16px; line-height: 1.5;">If you have any urgent matters, please feel free to contact us at info@avbids.com or (623) 420-6666.</p>
          <p style="font-size: 16px; line-height: 1.5;">Best regards,<br/>AV Bids Team</p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


/* 
?@desc   Send OTP to user's email
*@route  POST /api/email/send-otp
*@access Public
*/

const sendOtpEmail = async (req, res) => {
  const OTP_EXPIRATION_TIME = 600;
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

    const emailContent = `
      <div style="background-color: #f3f1fb; padding: 20px;">
        <h2 style="color: #8645FF; text-align: center;">Your OTP for Verification</h2>
        <p style="text-align: center;">Hello,</p>
        <p style="text-align: center;">Your OTP is: <strong>${otp}</strong>. It will expire in ${OTP_EXPIRATION_TIME} seconds.</p>
        <p style="text-align: center; color: #555;">Please use this OTP to complete the verification process.</p>
        <p style="text-align: center; color: #555;">If you didn't request this OTP, please ignore this email.</p>
        <p style="text-align: center; color: #555;">Best regards,<br/>AV Bids Team</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Your OTP for Verification',
      html: emailContent,
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Failed to send OTP - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};


/* 
?@desc   Verify OTP
*@route  POST /api/email/verify-otp
*@access Public
*/
const verifyOTP = async (req, res) => {
  try {
    const { email, userEnteredOTP } = req.body;

    const otpData = await getOTPByEmail(email);

    if (!otpData || otpData.expirationTime < Date.now()) {
      return res.status(400).json({ message: 'OTP has expired or is invalid' });
    }

    if (userEnteredOTP === otpData.otp) {
      await deleteOTPByEmail(email); // Remove the used OTP
      res
        .status(200)
        .json({ message: 'OTP verified successfully', verified: true });
    } else {
      return res
        .status(400)
        .json({ message: 'Incorrect OTP', verified: false });
    }
  } catch (error) {
    console.error('Failed to verify OTP - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Send question about event form email
*@route  POST /api/email/event-question
*@access Public
*/

const sendEventQuestionEmail = async (req, res) => {
  try {
    const { email, phone, subject, message, eventId } = req.body;

    const event = await getEventsById(eventId).populate('createdBy');

    // Notify Event planner Team
    const avBidsTeamEmailContent = `
      <div style="background-color: #3490dc; color: #ffffff; padding: 20px;">
        <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Hello ${event.createdBy.firstName},</h2>
        <p>You have received a new question about ${event.title} event with the following details:</p>
        <ul style="list-style: none; padding: 20px; background-color: #ffffff; color: #333333; text-align: left;">
          <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
          <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
          <li style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</li>
          <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Please respond to the ${email}'s inquiry promptly.</p>
        <p>Best regards,<br/>AV Bids Team</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'New AV Bids Event Question Form Submission',
      html: avBidsTeamEmailContent,
    });

    // Notify User
    const userEmailContent = `
      <div style="background-color: #38a169; color: #ffffff; padding: 20px;">
        <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 10px;">Dear ${email},</h2>
        <p>Thank you for reaching out to AV Bids. We appreciate your interest and will get back to you as soon as possible.</p>
        <p>If you have any urgent matters, please feel free to contact us at info@avbids.com or (623) 420-6666.</p>
        <p>Best regards,<br/>AV Bids Team</p>
      </div>
    `;

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'Thank You for Contacting AV Bids',
      html: userEmailContent,
    });

    res.status(200).json({ message: 'Question submitted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  sendContactFormEmail,
  sendOtpEmail,
  verifyOTP,
  sendEventQuestionEmail,
};
