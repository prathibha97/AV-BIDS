const OTP = require('./otp.mongo');

const saveOTP = async (email, otp, expirationTime) => {
  try {
    return await OTP.create({ email, otp, expirationTime });
  } catch (error) {
    throw new Error('Failed to save OTP data');
  }
};

const getOTPByEmail = async (email) => {
  try {
    return await OTP.findOne({ email });
  } catch (error) {
    throw new Error('Failed to get OTP data by email');
  }
};

const deleteOTPByEmail = async (email) => {
  try {
    return await OTP.deleteOne({ email });
  } catch (error) {
    throw new Error('Failed to delete OTP data by email');
  }
};

module.exports = {
  saveOTP,
  getOTPByEmail,
  deleteOTPByEmail,
};
