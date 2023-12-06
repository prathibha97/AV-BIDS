const express = require('express');
const { Resend } = require('resend');

const emailRouter = express.Router();

emailRouter.post('/', async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
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

module.exports = emailRouter;
