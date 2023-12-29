const Event = require('../models/event/event.mongo')

const updateEventsStatus = async () => {
  try {
    const currentDate = new Date();

    // Find events with eventEndDate in the past
    const expiredEvents = await Event.find({
      eventEndDate: { $lt: currentDate.toISOString().split('T')[0] },
    });

    // Update status to 'Expired' for each expired event
    for (const event of expiredEvents) {
      event.status = 'Expired';
      await event.save();
    }

    console.log(`${expiredEvents.length} events updated successfully.`);
  } catch (error) {
    console.error('Error updating events:', error);
  }
};

module.exports = updateEventsStatus;