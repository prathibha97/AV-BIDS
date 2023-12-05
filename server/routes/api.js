const express = require('express');
const authRouter = require('./auth.route');
const uploadRouter = require('./upload.route');
const userRouter = require('./user.route');
const memberRouter = require('./member.route');
const eventRouter = require('./event.route');
const reviewRouter = require('./review.route');
const conversationRouter = require('./conversation.route');
const messageRouter = require('./message.route');
const proposalRouter = require('./proposal.route');

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

module.exports = api;
