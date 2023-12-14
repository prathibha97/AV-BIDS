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

const getEventsByUser = async (userId, req, sortOption) => {
  try {
    let query = Event.find({ createdBy: userId });

    const sortFields = {
      date_posted: 'createdAt',
      expiring_soonest: 'eventEndDate',
      active: 'eventStartDate',
    };

    const sortField = sortFields[sortOption];
    if (sortField) {
      query = query.sort({
        [sortField]: sortOption === 'date_posted' ? 'desc' : 'asc',
      });
    }

    const events = await query.exec();
    return events;
  } catch (error) {
    console.error('Error fetching events:', error.message);
    throw error;
  }
};

const getEventsById = (id, req) => Event.findById({ _id: id });
// .cache({ key: req.user.id });

// const updateEvent = (id, updates) => {
//   return Event.findOneAndUpdate({ _id: id }, updates, {
//     new: true,
//     upsert: true,
//   });
// };

const updateEvent = (id, updates) => {
  console.log(updates);

  const getUpdatedValue = (field, category) =>
    updates[field] !== undefined ? updates[field] : updates[category]?.[field];

  const updateMicrophones = {
    wiredHandheld: getUpdatedValue('wiredHandheld', 'microphones'),
    wirelessHandheld: getUpdatedValue('wirelessHandheld', 'microphones'),
    wirelessLavalier: getUpdatedValue('wirelessLavalier', 'microphones'),
    headsetMicrophone: getUpdatedValue('headsetMicrophone', 'microphones'),
    earsetMicrophone: getUpdatedValue('earsetMicrophone', 'microphones'),
    gooseneckMicrophone: getUpdatedValue('gooseneckMicrophone', 'microphones'),
    boundaryMicrophone: getUpdatedValue('boundaryMicrophone', 'microphones'),
    audienceMicrophone: getUpdatedValue('audienceMicrophone', 'microphones'),
  };

  const updateSpeakers = {
    speakers_8_15: getUpdatedValue('speakers_8_15', 'speakers'),
    line_array_speaker_system: getUpdatedValue(
      'line_array_speaker_system',
      'speakers'
    ),
    subwoofer_12_18: getUpdatedValue('subwoofer_12_18', 'speakers'),
    reference_speaker_monitors: getUpdatedValue(
      'reference_speaker_monitors',
      'speakers'
    ),
    bluetooth_speaker_small: getUpdatedValue(
      'bluetooth_speaker_small',
      'speakers'
    ),
    bluetooth_speaker_large: getUpdatedValue(
      'bluetooth_speaker_large',
      'speakers'
    ),
    computer_audio_speaker_system: getUpdatedValue(
      'computer_audio_speaker_system',
      'speakers'
    ),
    audio_rigging_and_truss: getUpdatedValue(
      'audio_rigging_and_truss',
      'speakers'
    ),
  };

  const updateMixers = {
    analog_mixer: getUpdatedValue('analog_mixer', 'mixers'),
    digital_mixer: getUpdatedValue('digital_mixer', 'mixers'),
    computer_audio_interface: getUpdatedValue(
      'computer_audio_interface',
      'mixers'
    ),
    multi_media_DI_box: getUpdatedValue('multi_media_DI_box', 'mixers'),
    broadcast_phone_line_interface: getUpdatedValue(
      'broadcast_phone_line_interface',
      'mixers'
    ),
    digital_audio_recording: getUpdatedValue(
      'digital_audio_recording',
      'mixers'
    ),
    audio_playback_instant_replay: getUpdatedValue(
      'audio_playback_instant_replay',
      'mixers'
    ),
    cd_player: getUpdatedValue('cd_player', 'mixers'),
    audio_processing: getUpdatedValue('audio_processing', 'mixers'),
  };

  const updateCommunication = {
    wireless_belt_pack_and_headset: getUpdatedValue(
      'wireless_belt_pack_and_headset',
      'communication'
    ),
    wired_belt_pack_and_headset: getUpdatedValue(
      'wired_belt_pack_and_headset',
      'communication'
    ),
  };

  const updateScreens = {
    Twenty_One_Nine_Large_Format_Screen: getUpdatedValue(
      'Twenty_One_Nine_Large_Format_Screen',
      'screens'
    ),
    Fast_Fold_Screen_16_9_Format_Large_Venue: getUpdatedValue(
      'Fast_Fold_Screen_16_9_Format_Large_Venue',
      'screens'
    ),
    Fast_Fold_Screen_16_9_Format_Medium_Venue: getUpdatedValue(
      'Fast_Fold_Screen_16_9_Format_Medium_Venue',
      'screens'
    ),
    Fast_Fold_Screen_16_9_Format_Meeting_Room: getUpdatedValue(
      'Fast_Fold_Screen_16_9_Format_Meeting_Room',
      'screens'
    ),
    Fast_Fold_Screen_4_3_Format_Large_Venue: getUpdatedValue(
      'Fast_Fold_Screen_4_3_Format_Large_Venue',
      'screens'
    ),
    Fast_Fold_Screen_4_3_Format_Medium_Venue: getUpdatedValue(
      'Fast_Fold_Screen_4_3_Format_Medium_Venue',
      'screens'
    ),
    Fast_Fold_Screen_4_3_Format_Meeting_Room: getUpdatedValue(
      'Fast_Fold_Screen_4_3_Format_Meeting_Room',
      'screens'
    ),
    Fast_Fold_Drape_Kit: getUpdatedValue('Fast_Fold_Drape_Kit', 'screens'),
    Tripod_Screens_60_96: getUpdatedValue('Tripod_Screens_60_96', 'screens'),
    LCD_Monitor: getUpdatedValue('LCD_Monitor', 'screens'),
    Video_LED_Wall: getUpdatedValue('Video_LED_Wall', 'screens'),
    Screen_Rigging_and_Truss: getUpdatedValue(
      'Screen_Rigging_and_Truss',
      'screens'
    ),
  };

  const updateProjection = {
    Twenty_One_Nine_Format_Projection: getUpdatedValue(
      'Twenty_One_Nine_Format_Projection',
      'projection'
    ),
    Large_Venue_Projector_Standard_Throw_Lens: getUpdatedValue(
      'Large_Venue_Projector_Standard_Throw_Lens',
      'projection'
    ),
    Large_Venue_Projector_Long_Throw_Lens: getUpdatedValue(
      'Large_Venue_Projector_Long_Throw_Lens',
      'projection'
    ),
    Large_Venue_Projector_Short_Throw_Lens: getUpdatedValue(
      'Large_Venue_Projector_Short_Throw_Lens',
      'projection'
    ),
    Medium_Venue_Projector_Standard_Throw_Lens: getUpdatedValue(
      'Medium_Venue_Projector_Standard_Throw_Lens',
      'projection'
    ),
    Medium_Venue_Projector_Long_Throw_Lens: getUpdatedValue(
      'Medium_Venue_Projector_Long_Throw_Lens',
      'projection'
    ),
    Medium_Venue_Projector_Short_Throw_Lens: getUpdatedValue(
      'Medium_Venue_Projector_Short_Throw_Lens',
      'projection'
    ),
    Meeting_Room_Projector: getUpdatedValue(
      'Meeting_Room_Projector',
      'projection'
    ),
    Projector_Rigging_and_Truss: getUpdatedValue(
      'Projector_Rigging_and_Truss',
      'projection'
    ),
  };

  return Event.findOneAndUpdate(
    { _id: id },
    {
      ...updates,
      microphones: { ...updateMicrophones },
      speakers: { ...updateSpeakers },
      mixers: { ...updateMixers },
      communication: { ...updateCommunication },
      screens: { ...updateScreens },
      projection: { ...updateProjection },
    },
    {
      new: true,
      upsert: true,
    }
  );
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
