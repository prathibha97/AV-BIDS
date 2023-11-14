const {
  createEvent,
  getEvents,
  getEventsByUser,
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

    const event = await createEvent(eventDetails);
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
const getAllMembers = async (req, res) => {
  try {
    const events = await getEvents(req);
    res.status(200).json(events);
  } catch (error) {
    console.error('Failed to fetch events - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get event by user ID
*@route  GET /api/events/:userId
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
  getAllMembers,
  getUserEvents,
  update,
  remove,
};
