const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  group_name: { type: String, required: true, unique: true },
  members: [String],
  transaction_data: [
    {
      paidBy: String,
      paidFor: mongoose.Schema.Types.Mixed,
    },
  ],
});

const Group = mongoose.model("groups", groupSchema);
module.exports = { Group, groupSchema };

// {
//   type: Map,
//   of: String
// }
