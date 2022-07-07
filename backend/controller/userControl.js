const User = require("../models/userData");

const registerUser = async (req, res) => {
  const { name, email, username, password } = req.body;
  const userExist = await User.findOne({ email });
  const userExist1 = await User.findOne({ username });
  if (userExist || userExist1) {
    res.status(400);
    throw new Error("User already exist");
  }
  const user = await new User({
    name,
    email,
    username,
    password,
  });
  user.save((err) => {
    if (err) {
      res.status(400);
      console.log(err);
      throw new Error("Error,not entered in Database.");
    }
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (foundUser) {
    console.log(foundUser);
    if (await foundUser.matchPassword(password)) {
      res.status(201).json({
        _id: foundUser._id,
        name: foundUser.name,
      });
    } else {
      res.status(400).json({ message: "Incorrect Password" });
    }
  } else {
    res.status(400).json({ message: "Username not registered." });
  }
};

module.exports = { registerUser, loginUser };
