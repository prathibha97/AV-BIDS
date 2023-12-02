const {
  createEvent,
  getFilteredEvents,
  getEventsByUser,
  getEventsById,
  updateEvent,
  removeEvent,
  getLatestEvents,
} = require('../models/event/event.model');
const { getUserById } = require('../models/user/user.model');

/* 
?@desc   Create a new event
*@route  POST /api/events
*@access Private
*/
const createNewEvent = async (req, res) => {
  try {
    const { body } = req;
    const event = await createEvent({ ...body }, body.createdBy);
    res.status(200).json({ event, message: 'Event created successfully' });
  } catch (error) {
    console.error('Failed to create event:', error);

    // Choose an appropriate status code based on the type of error
    const statusCode = error instanceof CustomError ? 400 : 500;

    res
      .status(statusCode)
      .json({ error: error.message || 'Internal Server Error' });
  }
};

/* 
?@desc   Get all events
*@route  GET /api/events
*@access Private
*/


const getAllEvents = async (req, res) => {
  try {
    const {
      eventType,
      eventCategory,
      eventSubCategory,
      priceRange,
      audienceSize,
      sortOption,
      page, // default to page 1 if not provided
      pageSize , // default page size
    } = req.query;

    // Construct a filter object based on provided parameters
    const filters = {};
    if (eventType) filters.eventType = eventType;
    if (eventCategory) filters.eventCategory = eventCategory;
    if (priceRange) filters.eventBudget = priceRange;
    if (eventSubCategory) filters.eventSubCategory = eventSubCategory;
    if (audienceSize) filters.audienceSize = audienceSize;

    // Add sortOption to the filters
    if (sortOption) filters.sortOption = sortOption;

    // Fetch events based on the constructed filters and pagination parameters
    const events = await getFilteredEvents(filters, page, pageSize);

    res.status(200).json(events);
  } catch (error) {
    console.error('Failed to fetch events - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};


/* 
?@desc   Get event by user ID
*@route  GET /api/events/user/:userId
*@access Private
*/

const getUserEvents = async (req, res) => {
  try {
    const { userId } = req.params;
    const events = await getEventsByUser(userId, req);
    res.status(200).json(events);
  } catch (error) {
    console.error('Failed to user events - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get event by ID
*@route  GET /api/events/:id
*@access Private
*/

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await getEventsById(id, req);
    res.status(200).json(event);
  } catch (error) {
    console.error('Failed to event - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Update event
*@route  PUT /api/events/:id
*@access Private
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const eventDetails = { ...req.body };

    const event = await updateEvent(id, eventDetails);

    if (!event) {
      // Assuming updateEvent returns null if the event is not found
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ event, message: 'Event successfully updated' });
  } catch (error) {
    console.error('Failed to update event:', error);

    // Choose an appropriate status code based on the type of error
    const statusCode = error instanceof CustomError ? 400 : 500;

    res
      .status(statusCode)
      .json({ error: error.message || 'Internal Server Error' });
  }
};

/* 
?@desc   Remove event
*@route  DELETE /api/events/:id
*@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await removeEvent(id);
    res.status(200).json(deletedEvent);
  } catch (error) {
    console.error('Failed to remove event - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Save event
*@route  POST /api/events/save/:eventId
*@access Private
*/
const saveEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    console.log(eventId);
    const { _id } = req.user;

    // Check if the user exists
    const user = await getUserById(_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the event exists
    const event = await getEventsById(eventId, req);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Check if the event is already saved by the user
    const isEventAlreadySaved = user.savedEvents.some((savedEventId) =>
      savedEventId.equals(event._id)
    );

    if (isEventAlreadySaved) {
      return res.status(400).json({ error: 'Event already saved' });
    }

    // Save the event to the user's savedEvents array
    user.savedEvents.push(eventId);
    await user.save();

    res.status(200).json({ message: 'Event saved successfully', user, event });
  } catch (error) {
    console.error('Failed to save event - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get latest events
*@route  GET /api/events/recent
*@access Public
*/

const getRecentEvent = async (req, res) => {
  try {
    const event = await getLatestEvents();
    res.status(200).json(event);
  } catch (error) {
    console.error('Failed to event - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewEvent,
  getAllEvents,
  getUserEvents,
  getEvent,
  update,
  remove,
  saveEvent,
  getRecentEvent,
};
