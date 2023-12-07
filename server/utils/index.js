// Validate email format
const isValidEmail = (email) => {
  // Use a regular expression or any library of your choice for email validation
  // Example regex for basic email validation:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number format
const isValidPhone = (phone) => {
  // Use a regular expression or any library of your choice for phone number validation
  // Example regex for basic phone number validation:
  const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
  return phoneRegex.test(phone);
};

const generateFiveDigitOTP = () => {
  const otp = Math.floor(10000 + Math.random() * 90000);
  return otp.toString();
};

module.exports = {
  isValidEmail,
  isValidPhone,
  generateFiveDigitOTP,
};