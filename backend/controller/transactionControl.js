const User = require("../models/userData");
const Splitwise = require("splitwise-js-map");

const addTransaction = async (req, res) => {
  const { username, group_name, payer_name, amount, payees } = req.body;

  var amt = amount / payees.length;
  console.log("Amount", amt);
  const user = await User.findOne({ username });
  var group_idx = 0;
  for (let index = 0; index < user.Groups.length; index++) {
    if (user.Groups[index].group_name == group_name) {
      group_idx = index;
      break;
    }
  }
  console.log("GROUP_IDX:", group_idx);
  var Groups_array = user.Groups;
  var group_data = user.Groups[group_idx];
  var prev_transaction_data = user.Groups[group_idx].transaction_data;
  var transaction_index = -1;
  for (let i = 0; i < prev_transaction_data.length; i++) {
    if (prev_transaction_data[i].paidBy == payer_name) {
      transaction_index = i;
      break;
    }
  }

  if (transaction_index == -1) {
    var new_transaction = { paidBy: payer_name, paidFor: {} };
    payees.forEach((element) => {
      new_transaction.paidFor[element] = amt;
    });
    prev_transaction_data.push(new_transaction);
  } else {
    var new_transaction = prev_transaction_data[transaction_index];
    payees.forEach((element) => {
      if (new_transaction.paidFor[element] == undefined) {
        new_transaction.paidFor[element] = 0;
      }
      new_transaction.paidFor[element] += amt;
    });
    prev_transaction_data[transaction_index] = new_transaction;
  }
  group_data.transaction_data = prev_transaction_data;
  Groups_array[group_idx] = group_data;
  User.updateOne(
    { username },
    {
      Groups: Groups_array,
    },
    (err) => {
      if (err == null) {
        res.status(200).json({ msg: "Update Success" });
      } else {
        res.status(400).json({ msg: err });
      }
    }
  );
};

const generateSplitwise = async (req, res) => {
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
  var found_transaction_data = group.Groups[0].transaction_data;
  var splitwise_data = found_transaction_data.map((ele) => ({
    paidBy: ele.paidBy,
    paidFor: ele.paidFor,
  }));

  console.log(splitwise_data);
  const splits = Splitwise(splitwise_data);
  var updatedsplits = [];
  for (let i = 0; i < splits.length; i++) {
    if (splits[i][2] != 0) {
      updatedsplits.push(splits[i]);
    }
  }
  console.log(updatedsplits);
  res.send(updatedsplits);
};

const deleteTransaction = async (req, res) => {
  const { username, group_name, payer_name, amount, receiver_name } = req.body;

  const user = await User.findOne({ username });
  const amt = -amount;
  var group_idx = 0;
  for (let index = 0; index < user.Groups.length; index++) {
    if (user.Groups[index].group_name == group_name) {
      group_idx = index;
      break;
    }
  }
  var Groups_array = user.Groups;
  var group_data = user.Groups[group_idx];
  var prev_transaction_data = user.Groups[group_idx].transaction_data;
  var transaction_index = -1;
  for (let i = 0; i < prev_transaction_data.length; i++) {
    if (prev_transaction_data[i].paidBy == payer_name) {
      transaction_index = i;
      break;
    }
  }

  var new_transaction = prev_transaction_data[transaction_index];
  if (new_transaction.paidFor[receiver_name] == undefined) {
    new_transaction.paidFor[receiver_name] = 0;
  }
  new_transaction.paidFor[receiver_name] += amt;
  prev_transaction_data[transaction_index] = new_transaction;
  group_data.transaction_data = prev_transaction_data;
  Groups_array[group_idx] = group_data;
  User.updateOne(
    { username },
    {
      Groups: Groups_array,
    },
    (err) => {
      if (err == null) {
        res.status(200).json({ msg: "Transaction deleted Success" });
      } else {
        res.status(400).json({ msg: err });
      }
    }
  );
};

module.exports = { addTransaction, generateSplitwise, deleteTransaction };
