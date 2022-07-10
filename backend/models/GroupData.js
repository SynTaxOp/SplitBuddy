const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
  group_name: String,
  members: {type:[String],default:[]},
  transaction_data: [
    {
      paidBy: String,
      paidFor: {type: mongoose.Schema.Types.Mixed }
    },
  ],
});

const Group = mongoose.model("groups", groupSchema);
module.exports = { Group, groupSchema };

// {
//   type: Map,
//   of: String
// }
