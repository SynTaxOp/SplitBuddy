const express = require("express");
const router = express.Router();
const {
  addTransaction
} = require("../controller/transactionControl");

router.route("/addTransaction").post(addTransaction);

module.exports = router;