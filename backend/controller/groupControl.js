const User = require("../models/userData");
const { Group } = require("../models/GroupData");

const addGroup = async (req, res) => {
  const { user_name, group_name, members } = req.body;

  var prevarray = await User.findOne({ username:user_name }).Groups;
  
  const new_group = new Group({
    group_name,
    members,
    transaction_data: [],
  });
  if(prevarray==undefined)
  {
  User.updateOne({username:user_name},{Groups:[new_group]},(err,res)=>{
    if(err)
    {
      console.log(err)
    }
    else
    {
      console.log()
    }
  })
  }
  else
  {
    prevarray.push(new_group);
    User.updateOne({username:user_name},{Groups:prevarray},(err,res)=>{
      if(err)
      {
        console.log(err)
      }
      else
      {
        console.log(res)
      }
    })
  }
};

module.exports = {addGroup}
