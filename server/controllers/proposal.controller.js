const { getEventsById } = require('../models/event/event.model');
const { createNotification } = require('../models/notification/notification.model');
const {
  createProposal,
  getProposalById,
  getProposals,
  removeProposal,
  updateProposal,
  getProposalsForUserEvents
} = require('../models/proposal/proposal.model');
const socket = require('../services/socket');


/* 
?@desc   Create a new proposal
*@route  POST /api/proposals
*@access Private
*/
const createNewProposal = async (req, res) => {
  try {
    const { provider, event, documents } = req.body;

    // Validate that required fields are provided
    if (!provider || !event || !documents) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const proposal = await createProposal({ provider, event, documents });

    const eventInfo = await getEventsById(event)

    // Emit socket event
    if (socket) {
      socket.emit('proposalSubmited', {
        userId: eventInfo.createdBy,
        eventId: event,
        message: 'A Proposal has been submitted for one of your events',
      });
    } else {
      console.log('socket error');
    }

    // Persist the notification
      const notification = {
        message: 'A Proposal has been submitted for one of your events',
        type: 'proposal-submission',
        userId: eventInfo.createdBy,
      };
      await createNotification(notification);

    res
      .status(200)
      .json({ proposal, message: 'Proposal submitted successfully' });
  } catch (error) {
    console.error('Failed to submit proposal - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* 
?@desc   Get all proposals
*@route  GET /api/proposals
*@access Private/Admin
*/
const getAllProposals = async (req, res) => {
  try {
    const proposals = await getProposals(req);
    res.status(200).json(proposals);
  } catch (error) {
    console.error('Failed to fetch proposals - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get proposal by ID
*@route  GET /api/proposals/:id
*@access Private
*/

const getProposal = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getProposalById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Failed to fetch proposal - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Update proposal
*@route  PUT /api/proposal/:id
*@access Private
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { provider, event, documents, status } = req.body;

    const proposal = await updateProposal(id, {
      provider,
      event,
      documents,
      status,
    });

    res
      .status(200)
      .json({ proposal, message: 'Proposal updated successfully' });
  } catch (error) {
    console.error('Failed to update proposal - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* 
?@desc   Remove proposal
*@route  DELETE /api/proposal/:id
*@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Proposal ID is required' });
    }

    // Check if the proposal exists before attempting to remove
    const existingProposal = await getProposalById(id);
    if (!existingProposal) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    const deletedProposal = await removeProposal(id);
    res.status(200).json({
      proposal: deletedProposal,
      message: 'Proposal removed successfully',
    });
  } catch (error) {
    console.error('Failed to remove proposal - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* 
?@desc   Get proposals submitted to the logged-in user's events
*@route  GET /api/proposals/user
*@access Private
*/
const getProposalsForUser = async (req, res) => {
  try {
    const userId = req.user._id; 
    const proposals = await getProposalsForUserEvents(userId);
    res.status(200).json(proposals);
  } catch (error) {
    console.error('Failed to fetch user proposals - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

const downloadProposal = async (req, res) => {
  try {
    const { id } = req.params;

    // Retrieve the proposal information including the document URL
    const proposal = await getProposalById(id);

    if (!proposal) {
      return res.status(404).json({ error: 'Proposal not found' });
    }

    // Assuming the document URL is stored in the first document of the proposal
    const documentUrl = `${process.env.REACT_APP_AWS_S3_BUCKET}/${proposal.documents[0].url}`;

    // Implement logic to download the document
    // You can use libraries like axios to fetch the document and then send it as a response

    // For example, using axios:
    const axios = require('axios');
    const { data } = await axios.get(documentUrl, {
      responseType: 'arraybuffer',
    });

    // Set the appropriate response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${proposal.documents[0].fileName}`
    );

    // Send the document as a response
    res.send(data);
  } catch (error) {
    console.error('Failed to download proposal - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createNewProposal,
  getAllProposals,
  getProposal,
  update,
  remove,
  getProposalsForUser,
  downloadProposal,
};
