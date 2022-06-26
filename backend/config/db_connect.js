
const mongoose = require('mongoose')

const connectDB = async() =>
{
  try
  {
    const connect = mongoose.connect(process.env.MGDB,{useNewUrlParser : true})
    console.log('Mongo db connected.');
  }catch(err){console.log('ERROR')}
}

module.exports = connectDB




