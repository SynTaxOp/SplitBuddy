const User = require('../models/userData')

const registerUser = async(req,res) =>
{
    const {name,email,username,password} = req.body
    const userExist = await User.findOne({email})
    const userExist1 = await User.findOne({username})
    if(userExist || userExist1)
    {
        res.status(400)
        throw new Error("User already exist")
    }
    const user =  await new User({
          name,email,username,password  
    })
    user.save();
    if(user)
    {
      res.status(201).json({
        _id : user._id,
        name : user.name
      })
    }
    else
    {
      res.status(400)
      throw new Error('User ban nhii paaya')
    }
}

module.exports = {registerUser}