var express = require("express");
const mongoose = require('mongoose')
const Splitwise = require('splitwise-js-map');
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const connectDB = require("./config/db_connect");
dotenv.config();
connectDB();

const User = require("./models/userData");
const userRouter = require("./routes/userRouter");

const Group = require("./models/GroupData");

//test data for group
const group1 = new Group({
  group_name: "S.sharks",
  members: ["Ravi", "Golu", "Shree"],
  transaction_data: [
    { paidBy: "Ravi", paidFor: { 'Golu': 100, 'Shree': 200, } },
    { paidBy: "Golu", paidFor: { 'Ravi': 100 } },
    { paidBy: "Shree", paidFor: { }}

  ],
});


group1.save((err, result) => {
  if (err) {
    console.log(err);
  }
  else
  {
    console.log(result)
  }
});

// filter out transaction_data removed _id
var obj2 = group1.transaction_data.map(ele => ({
    'paidBy': ele.paidBy, 'paidFor': ele.paidFor
}))


// Splitwise Testing
const Split = Splitwise(obj2)
console.log("Split", Split)


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use("/users", userRouter);




const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Running at port ${PORT}`));

