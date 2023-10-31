const mongoose = require('mongoose');
const keys = require('../config/keys')

const connectDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(keys.mongoURI);
    console.log('connected to MongoDb');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDb;
