const express = require('express');
const stripeRouter = require('./stripe.routes');
const emailRouter = require('./email.routes');
const proposalRouter = require('./proposal.routes');
const messageRouter = require('./message.routes');
const conversationRouter = require('./conversation.routes');
const reviewRouter = require('./review.routes');
const eventRouter = require('./event.routes');
const memberRouter = require('./member.routes');
const userRouter = require('./user.routes');
const uploadRouter = require('./upload.routes');
const authRouter = require('./auth.routes');
const notificationRouter = require('./notification.routes');


const api = express.Router();

api.use('/auth', authRouter);
api.use('/upload', uploadRouter);
api.use('/users', userRouter);
api.use('/members', memberRouter);
api.use('/events', eventRouter);
api.use('/reviews', reviewRouter);
api.use('/conversations', conversationRouter);
api.use('/messages', messageRouter);
api.use('/proposals', proposalRouter);
api.use('/email', emailRouter);
api.use('/stripe', stripeRouter);
api.use('/notifications', notificationRouter);

module.exports = api;
