const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  group_name: String,
  members: [String],
  transaction_data: [
    {
      paidBy: String,
      paidFor: mongoose.Schema.Types.Mixed,
    },
  ],
});

const Group = mongoose.model("groups", groupSchema);
module.exports = Group;

// {
//   type: Map,
//   of: String
// }
