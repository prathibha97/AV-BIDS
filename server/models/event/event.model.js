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


const getFilteredEvents = async (filters, page, pageSize, sortOption) => {
  try {
    const skip = (page - 1) * pageSize;
    let sorting = {};

    if (sortOption) {
      switch (sortOption) {
        case 'ending_soonest':
          sorting = { proposalDueDate: 1 };
          break;
        case 'budget_lowest':
          sorting = { eventBudget: -1 };
          break;
        case 'budget_highest':
          sorting = { eventBudget: 1 };
          break;
        case 'audience_size_lowest':
          sorting = { audienceSize: 1 };
          break;
        case 'audience_size_highest':
          sorting = { audienceSize: -1 };
          break;
      }
    }

    const totalCount = await Event.countDocuments(filters);

    const events = await Event.find(filters)
      .sort(sorting)
      .skip(skip)
      .limit(parseInt(pageSize))
      .lean()
      .exec();

    return { events, totalCount };
  } catch (error) {
    console.error('Error in getFilteredEvents:', error.message);
    throw error;
  }
};


const getEventsByUser = (id, req) =>
  Event.find({ createdBy: id })
  // .cache({ key: req.user.id });

const getEventsById = (id, req) =>
  Event.findById({ _id: id })
  // .cache({ key: req.user.id });

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
