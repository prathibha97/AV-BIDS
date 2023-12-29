const { getOTPByEmail, saveOTP, deleteOTPByEmail } = require('../models/otp/otp.model');

const {
  getUsers,
  getUserById,
  updateUser,
  removeUser,
  getUserByEmail,
} = require('../models/user/user.model');
const { isValidEmail, isValidPhone } = require('../utils');
const { Resend } = require('resend');

/* 
?@desc   Get all users
*@route  GET /api/users
*@access Private/Admin
*/
const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers(req);
    res.status(200).json(users);
  } catch (error) {
    console.error('Failed to fetch users - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Get user by ID
*@route  GET /api/users/:id
*@access Private
*/

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Failed to fetch user - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Update user
*@route  PUT /api/users/:id
*@access Private
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      website,
      imageUrl,
      insurance,
      companyAddress,
      address,
      subscription,
    } = req.body;

    // if (!id || !firstName || !lastName || !email) {
    //   return res.status(400).json({ message: 'Missing required fields' });
    // }

    if (email && !isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }

    const user = await updateUser(id, {
      firstName,
      lastName,
      email,
      company,
      phone,
      website,
      imageUrl,
      insurance,
      companyAddress,
      address,
      subscription,
    });

    res.status(200).json({ user, message: 'User updated successfully' });
  } catch (error) {
    console.error('Failed to update user - ', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

/* 
?@desc   Remove user
*@route  DELETE /api/users/:id
*@access Private
*/
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await removeUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    console.error('Failed to remove user - ', error.message);
    return res.status(500).json('Internal Server Error');
  }
};

/* 
?@desc   Validate email
*@route  GET /api/users/validate-email
*@access Public
*/

const validateEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await getUserByEmail(email);
    if (user) {
      return res.status(200).json({ message: 'We found your account', isValid: true });
    } else {
      return res
        .status(400)
        .json({ message: 'We cannot find your account', isValid: false });
    }
  } catch (error) {
    console.error('Failed to remove user - ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getAllUsers,
  getUser,
  update,
  remove,
  validateEmail,
};
