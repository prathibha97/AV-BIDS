const {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  removeMember,
} = require('../models/member/member.model');

/* 
?@desc   Create a new member
*@route  POST /api/members
*@access Private
*/
const createNewMember = async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const member = await createMember({ name, role, email }, req.user._id);
    res.status(200).json(member);
  } catch (error) {
    console.error('Failed to create member - ', error.message);
    return res.status(500).json('Internal Server Error');
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
    const member = await updateMember(id, {
      name,
      email,
      role,
    });
    res.status(200).json(member);
  } catch (error) {
    console.error('Failed to update member - ', error.message);
    return res.status(500).json('Internal Server Error');
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
    const deletedMember = await removeMember(id);
    res.status(200).json(deletedMember);
  } catch (error) {
    console.error('Failed to remove member - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

module.exports = {
  createNewMember,
  getAllMembers,
  getMember,
  update,
  remove,
};
