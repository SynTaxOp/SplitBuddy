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

const displayGroup = async (req, res) => {
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
module.exports = { addGroup, displayGroup };
