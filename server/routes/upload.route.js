const express = require('express');
const { fileUpload } = require('../controllers/upload.controller');
const { protect } = require('../middlewares/auth');

const uploadRouter = express.Router();

uploadRouter.get('/', protect, fileUpload);

module.exports = uploadRouter;
