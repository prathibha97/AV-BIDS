const {
  createEvent,
  getFilteredEvents,
  getEventsByUser,
  getEventsById,
  updateEvent,
  removeEvent,
} = require('../models/event/event.model');

/* 
?@desc   Create a new event
*@route  POST /api/events
*@access Private
*/
const createNewEvent = async (req, res) => {
  try {
    const eventDetails = { ...req.body };
    const event = await createEvent(eventDetails, req.body.createdBy);
    res.status(200).json(event);
  } catch (error) {
    console.error('Failed to create event - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get all events
*@route  GET /api/events
*@access Private
*/

const getAllEvents = async (req, res) => {
  try {
    const { eventType, eventCategory, eventSubCategory, priceRange, audienceSize } = req.query;

    // Construct a filter object based on provided parameters
    const filters = {};
    if (eventType) filters.eventType = eventType;
    if (eventCategory) filters.eventCategory = eventCategory;
    if (priceRange) filters.eventBudget = priceRange;
    if (eventSubCategory) filters.eventSubCategory = eventSubCategory;
    // Add more filters as needed...

    // Fetch events based on the constructed filters
    const events = await getFilteredEvents(filters, req);

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
    res.status(200).json(event);
  } catch (error) {
    console.error('Failed to update event - ', error.message);
    return res.status(500).json('Internal Server Error');
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

module.exports = {
  createNewEvent,
  getAllEvents,
  getUserEvents,
  getEvent,
  update,
  remove,
};
