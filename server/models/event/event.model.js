const Event = require('./event.mongo');
const User = require('../user/user.mongo');

const createEvent = async (values, userId) => {
  try {
    // Create a new event with the provided values
    const newEvent = await new Event(values).save();

    // Find the user by ID
    const user = await User.findById(userId);

    // If the user is found, update the events array with the new event's ID
    if (user) {
      user.events.push(newEvent._id);
      await user.save();
    }

    // Return the new event
    return newEvent.toObject();
  } catch (error) {
    // Handle any errors that might occur during the process
    console.error('Failed to create event - ', error.message);
    throw new Error('Internal Server Error');
  }
};

// const getEvents = async (req) => await Event.find().cache({ key: req.user.id });

const getFilteredEvents = async (filters, req) => {
  return Event.find(filters).cache({ key: req.user.id });
};

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

const getLatestEvents = async () => {
  return Event.find().sort({ createdAt: -1 }).limit(6);
};

module.exports = {
  createEvent,
  getFilteredEvents,
  getEventsByUser,
  getEventsById,
  updateEvent,
  removeEvent,
  getLatestEvents,
};
