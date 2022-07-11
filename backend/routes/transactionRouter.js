const express = require("express");
const router = express.Router();
const {
  addTransaction,generateSplitwise
} = require("../controller/transactionControl");

router.route("/addTransaction").post(addTransaction);
router.route("/generateSplitwise").get(generateSplitwise);
module.exports = router;