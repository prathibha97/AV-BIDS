const Event = require('./event.mongo');

const createEvent = (values) =>
  new Event(values).save().then((event) => event.toObject());

const getEvents = async (req) => await Event.find().cache({ key: req.user.id });

const getEventsByUser = (id, req) =>
  Event.find({ createdBy: id }).cache({ key: req.user.id });

const getEventsById = (id, req) =>
    Event.findById({ _id: id }).cache({ key: req.user.id });

const updateEvent = (id, updates) => {
  return Event.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  });
};

const removeEvent = (id) => {
  return Event.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
};

module.exports = {
  createEvent,
  getEvents,
  getEventsByUser,
  getEventsById,
  updateEvent,
  removeEvent,
};
