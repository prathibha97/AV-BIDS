const Conversation = require('./conversation.mongo');

const createConversation = (values) =>
  new Conversation(values)
    .save()
    .then((conversation) => conversation.toObject());

const getConversation = (userId) =>
  Conversation.find({
    members: { $in: userId},
  });

module.exports = {
  createConversation,
  getConversation,
};
