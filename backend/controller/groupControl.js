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
  const group = await User.findOne(
    { username },
    { Groups: { $elemMatch: { group_name } } },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  ).clone();
  if (group) {
    console.log(group);
    res.status(200).json({
      members: group.Groups[0].members,
    });
  } else {
    res.status(400);
    throw new Error("Error");
  }
};

const deleteGroup = async (req,res) => 
{
    const username = req.query.username;
    const group_name = req.query.group_name;
    const user = await User.findOne({username});
    var index = -1;
    for(let i=0;i<user.Groups.length;i++)
    {
      if(user.Groups[i].group_name == group_name)
      {
        index = i;
        break;
      }
    }
    var updated_Groups = user.Groups;
    updated_Groups.splice(index,1);
    User.updateOne({username},
      {Groups : updated_Groups},(err)=>{
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("Group deleted successfully.")
        }
      })
}

const addMember = async (req,res) => 
{
    const {username,group_name,member_name} = req.body
    const user = await User.findOne({username});
    var index = -1;
    for(let i=0;i<user.Groups.length;i++)
    {
      if(user.Groups[i].group_name == group_name)
      {
        index = i;
        break;
      }
    }
    var updated_Groups = user.Groups;
    updated_Groups[index].members.push(member_name);
    User.updateOne({username},
      {Groups : updated_Groups},(err)=>{
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("Member added successfully.")
        }
      })
}

const clearTransactionData = async (req,res) => 
{
    const {username,group_name} = req.query;
    const user = await User.findOne({username});
    var index = -1;
    for(let i=0;i<user.Groups.length;i++)
    {
      if(user.Groups[i].group_name == group_name)
      {
        index = i;
        break;
      }
    }
    var updated_Groups = user.Groups;
    updated_Groups[index].transaction_data = [];
    User.updateOne({username},
      {Groups : updated_Groups},(err)=>{
        if(err)
        {
          console.log(err);
        }
        else
        {
          console.log("Transaction Data cleared successfully.")
        }
      })
}

module.exports = { addGroup, getGroups, getMembers,deleteGroup,addMember,clearTransactionData };
