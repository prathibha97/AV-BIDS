const {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  removeMember,
} = require('../models/member/member.model');
const { getUserById } = require('../models/user/user.model');
const { isValidEmail } = require('../utils');

/* 
?@desc   Create a new member
*@route  POST /api/members
*@access Private
*/
const createNewMember = async (req, res) => {
  try {
    const { name, role, email } = req.body;

    if (!name || !role || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const user = await getUserById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let maxMembers;
    if (user.userType === 'PLANNER') {
      maxMembers = 3;
    } else if (user.userType === 'PROVIDER') {
      maxMembers = 2;
    }

    if (user.members.length >= maxMembers) {
      return res.status(400).json({
        error: `You can only create a maximum of ${maxMembers} members`,
      });
    }

    const member = await createMember({ name, role, email }, req.user._id);
    res.status(200).json({ member, message: 'Member created successfully' });
  } catch (error) {
    console.error('Failed to create member - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* 
?@desc   Get all members
*@route  GET /api/members
*@access Private
*/
const getAllMembers = async (req, res) => {
  try {
    const users = await getMembers(req);
    res.status(200).json(users);
  } catch (error) {
    console.error('Failed to fetch members - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get user by ID
*@route  GET /api/members/:id
*@access Private
*/

const getMember = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getMemberById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Failed to fetch member - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Update member
*@route  PUT /api/members/:id
*@access Private
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    if (!id || !name || !email || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const member = await updateMember(id, { name, email, role });

    res.status(200).json({ member, message: 'Member updated successfully' });
  } catch (error) {
    console.error('Failed to update member - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

/* 
?@desc   Remove member
*@route  DELETE /api/members/:id
*@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Member ID is required' });
    }

    // Check if the member exists before attempting to remove
    const existingMember = await getMemberById(id);
    if (!existingMember) {
      return res.status(404).json({ error: 'Member not found' });
    }

    const deletedMember = await removeMember(id);
    res
      .status(200)
      .json({ member: deletedMember, message: 'Member removed successfully' });
  } catch (error) {
    console.error('Failed to remove member - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createNewMember,
  getAllMembers,
  getMember,
  update,
  remove,
};
