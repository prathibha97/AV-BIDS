const express = require('express');
const {
  sendContactFormEmail,
  sendEventQuestionEmail,
  sendOtpEmail,
  verifyOTP,
} = require('../controllers/email.controller');
const emailRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Email
 *   description: Email operations
 */

/**
 * @swagger
 * /email/contact-form:
 *   post:
 *     summary: Send contact form email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 */

emailRouter.post('/contact-form', sendContactFormEmail);

/**
 * @swagger
 * /email/send-otp:
 *   post:
 *     summary: Send OTP email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */

emailRouter.post('/send-otp', sendOtpEmail);

/**
 * @swagger
 * /email/verify-otp:
 *   post:
 *     summary: Verify OTP
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP verified successfully
 */

emailRouter.post('/verify-otp', verifyOTP);

/**
 * @swagger
 * /email/event-question:
 *   post:
 *     summary: Send event question email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *               eventId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Question submitted successfully
 */

emailRouter.post('/event-question', sendEventQuestionEmail);

module.exports = emailRouter;
