var express = require("express");
const mongoose = require("mongoose");
const Splitwise = require("splitwise-js-map");
var dotenv = require("dotenv");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
const connectDB = require("./config/db_connect");
dotenv.config();
connectDB();

const User = require("./models/userData");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");

const { Group } = require("./models/GroupData");

//test data for group
// const group1 = new Group({
//   group_name: "S.sharks",
//   members: ["Ravi", "Golu", "Shree"],
//   transaction_data: [
//     { paidBy: "Ravi", paidFor: { 'Golu': 100, 'Shree': 200, } },
//     { paidBy: "Golu", paidFor: { 'Ravi': 100 } },
//     { paidBy: "Shree", paidFor: { }}

//   ],
// });

// const group2 = new Group({
//   group_name: "ABC",
//   members: ["Kartik", "Shreya", "Srejan"],
//   transaction_data: [
//     { paidBy: "Kartik", paidFor: { 'Shreya': 100, 'Srejan': 200, } },
//     { paidBy: "Srejan", paidFor: { 'Kartik': 100 } },

//   ],
// });

const group3 = new Group({
  group_name: "ABCD",
  members: ["Kartik", "Shreya", "Srejan"],
  transaction_data: [
    { paidBy: "Kartik", paidFor: { 'Shreya': 100, 'Srejan': 200 } },
    { paidBy: "Srejan", paidFor: { 'Kartik': 100 } },

  ],
});
console.log(group3.transaction_data[1].paidFor['Shree']==undefined);

// const user1 = new User({
//   name : 'Harshita',
//   email : 'hellos@gmail.com',
//   username : 'goluvettes',
//   password : '1234',
//   Groups : [group1,group2]
// })

// user1.Groups.push(group3)

// user1.save((err,result) =>
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("reslt of user data",result);
//     console.log(user1.Groups[0].members[0])
//     console.log(user1.Groups[0].transaction_data)
//     console.log(user1.Groups[1].transaction_data[1].paidFor.Kartik)
//     console.log(user1.Groups[2].group_name)
//   }
// })

// filter out transaction_data removed _id
// var obj2 = group1.transaction_data.map((ele) => ({
//   paidBy: ele.paidBy,
//   paidFor: ele.paidFor,
// }));

// Splitwise Testing
// const Split = Splitwise(obj2)
// console.log("Split", Split)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use("/users", userRouter);
app.use("/groups", groupRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Running at port ${PORT}`));
