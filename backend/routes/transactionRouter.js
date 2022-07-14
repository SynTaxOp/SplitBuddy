const express = require("express");
const router = express.Router();
const {
  addTransaction,generateSplitwise, deleteTransaction
} = require("../controller/transactionControl");

router.route("/addTransaction").post(addTransaction);
router.route("/generateSplitwise").get(generateSplitwise);
router.route("/deleteTransaction").post(deleteTransaction);

module.exports = router;