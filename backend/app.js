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
    { paidBy: "Ravi", paidFor: { 'Golu': '100', 'Shree': '200','Ravi':'1000' } },
    { paidBy: "Golu", paidFor: { 'Golu': '100', 'Ravi': '500' } },
  ],
});


group1.save((err, result) => {
  if (err) {
    console.log(err);
  }
});

// filter out transaction_data removed _id
var obj2 = group1.transaction_data.map(ele => ({
    'paidBy': ele.paidBy, 'paidFor': ele.paidFor
}))

console.log("obj2",obj2)
const obj = []
group1.transaction_data.forEach((element) =>
    {
      console.log({'paidBy': element.paidBy,'paidFor': element.paidFor })
      obj.push({'paidBy': element.paidBy,'paidFor': element.paidFor })
    }
)
console.log("obj1",obj)
// Splitwise Testing
const Split = Splitwise(obj)
console.log("Split", Split)


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use("/users", userRouter);




const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Running at port ${PORT}`));

