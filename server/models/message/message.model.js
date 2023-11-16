const Message = require('./message.mongo');

const createMessage = (values) =>
  new Message(values).save().then((message) => message.toObject());

const getMessages = (conversationId) => Message.find({ conversationId });

module.exports = {
  createMessage,
  getMessages,
};
