const User = require("../models/userData");
const { Group } = require("../models/GroupData");

const addGroup = async (req, res) => {
  const { username, group_name, members } = req.body;

  const new_group = new Group({
    group_name,
    members,
    transaction_data: [],
  });
  User.updateOne({ username }, { $push: { Groups: [new_group] } }, (err) => {
    if (err) {
      console.log("Group not added to user.");
      console.log(err);
    }
  });
  const updatedUser = await User.findOne({ username });
  if (updatedUser) {
    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      Groups: updatedUser.Groups,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

const getGroups = async (req, res) => {
  const username = req.query.username;
  const user = await User.findOne({ username });
  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      Groups: user.Groups,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

const getMembers = async (req, res) => {
  const username = req.query.username;
  const group_name = req.query.title;
  // const user = await User.findOne({ username });
  const group = await User.findOne(
    { username },
    { Groups: { $elemMatch: { group_name } } },
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  ).clone();
  if (group) {
    res.status(200).json({
      members: group.Groups[0].members,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

module.exports = { addGroup, getGroups, getMembers };
