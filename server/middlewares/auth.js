const jwt = require('jsonwebtoken');
const User = require('../models/user/user.mongo');

const protect = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader?.startsWith('Bearer ')) {
    try {
      token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      req.empNo = req.user.empNo;
      next();
    } catch (err) {
      res.status(401).json('Not authorized, token failed');
      // throw new Error('Not authorized, token failed');
    }
  } else if (!token) {
    res.status(401).json('Not authorized, no token');
    // throw new Error('Not authorized, no token');
  }
};

const admin = (req, res, next) => {
  if (
    (req.user && req.user.role === 'Admin')
  ) {
    next();
  } else {
    res.status(401).json('Not authorized, as an admin');
    // throw new Error('Not authorized, as an admin');
  }
};

const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
};

module.exports = { protect, admin, requireLogin };
