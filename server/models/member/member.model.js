const Member = require('./member.mongo');
const User = require('../user/user.mongo');

const createMember = async (values, userId) => {
  try {
    const newMember = await new Member(values).save();

    // Find the user by ID
    const user = await User.findById(userId);

    // If the user is found, update the members array with the new member's ID
    if (user) {
      user.members.push(newMember._id);
      await user.save();
    }
    // Return the new review
    return newMember.toObject();
  } catch (error) {
    console.log(error);
  }
};
const getMembers = async (req) =>
  await Member.find().cache({ key: req.user.id });

const getMemberById = (id) => Member.findById({ _id: id });

const getMembereByEmail = (email) => Member.findOne({ email });

const updateMember = (id, updates) => {
  return Member.findOneAndUpdate({ _id: id }, updates, {
    new: true,
    upsert: true,
  });
};

const removeMember = (id) => {
  return Member.findByIdAndRemove(
    { _id: id },
    {
      new: true,
      upsert: true,
    }
  );
};

module.exports = {
  createMember,
  getMembers,
  getMemberById,
  getMembereByEmail,
  updateMember,
  removeMember,
};
