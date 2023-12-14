const Poposal = require('./proposal.mongo');
const Event = require('../event/event.mongo');

const createProposal = async (values, userId) => {
  try {
    const newProposal = await new Poposal(values).save();

    // Find the event by ID
    const event = await Event.findById(values.event);

    // If the event is found, update the proposals array with the new proposal's ID
    if (event) {
      event.proposals.push(newProposal._id);
      await event.save();
    }
    // Return the new proposal
    return newProposal.toObject();
  } catch (error) {
    console.log(error);
  }
};

const getProposals = async (req) =>
  await Poposal.find().cache({ key: req.user.id });

const getProposalById = (id) => Poposal.findById(id);

const updateProposal = (id, updates) => {
  return Poposal.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  });
};

const removeProposal = (id) => {
  return Poposal.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
};

const getProposalsForUserEvents = async (userId) => {
  try {
    // Fetch events created by the logged-in user
    const userEvents = await Event.find({ createdBy: userId })
      .populate({
        path: 'proposals',
        populate: {
          path: 'provider',
          model: 'User',
          select:
            '-refreshToken -password -members -role -userType -savedEvents -reviews -events',
        },
      })
      .sort({ createdAt: 'desc' });

    // Extract proposal information from each event
    const userProposals = userEvents.map((event) => ({
      eventId: event._id,
      proposals: event.proposals,
    }));

    return userProposals;
  } catch (error) {
    console.error(
      'Failed to fetch proposals for user events - ',
      error.message
    );
  }
};

module.exports = {
  createProposal,
  getProposals,
  getProposalById,
  updateProposal,
  removeProposal,
  getProposalsForUserEvents,
};
