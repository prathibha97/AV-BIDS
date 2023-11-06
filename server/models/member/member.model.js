const Member = require('./member.mongo');

const createMember = (values) =>
  new Member(values).save().then((member) => member.toObject());

const getMembers = async (req) => await Member.find().cache({key:req.user.id});

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
