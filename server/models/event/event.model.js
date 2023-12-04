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

// const getFilteredEvents = async (filters, req) => {
//   return Event.find(filters)
//   // .cache({ key: req.user.id });
// };


// const getFilteredEvents = async (filters, page, pageSize) => {
//   const skip = (page - 1) * pageSize;

//   let sortField;

//   if (filters.sortOption) {
//     switch (filters.sortOption) {
//       case 'Ending Soonest':
//         sortField = 'eventEndDate';
//         break;
//       case 'Budget Lowest':
//         sortField = 'EventBudget';
//         break;
//       default:
//         sortField = 'createdAt';
//         break;
//     }
//   }

//   let query = Event.find(filters)
//     .skip(skip)
//     .limit(parseInt(pageSize))
//     .sort({ [sortField]: 1 });

//   const events = await query.exec();

//   return events;
// };

const getFilteredEvents = async (filters, page, pageSize) => {
  try {
    const skip = (page - 1) * pageSize;

    let sortField;

    if (filters.sortOption) {
      switch (filters.sortOption) {
        case 'Ending Soonest':
          sortField = 'eventEndDate';
          break;
        case 'Budget Lowest':
          sortField = 'EventBudget';
          break;
        default:
          sortField = 'createdAt';
          break;
      }
    }

    // Use lean() to get plain JavaScript objects instead of mongoose documents
    const query = Event.find(filters).lean();

    // Use countDocuments() separately to avoid the "Query was already executed" error
    const totalCount = await Event.countDocuments(filters);

    const events = await query
      .skip(skip)
      .limit(parseInt(pageSize))
      .sort({ [sortField]: 1 })
      .exec();

    return { events, totalCount };
  } catch (error) {
    console.error('Error in getFilteredEvents:', error.message);
    throw error;
  }
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
