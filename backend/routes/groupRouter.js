const express = require("express");
const router = express.Router();
const {
  addGroup,
  getGroups,
  getMembers,
  deleteGroup,
  addMember,
  clearTransactionData,
} = require("../controller/groupControl");

router.route("/addGroup").post(addGroup);
router.route("/getGroups").get(getGroups);
router.route("/getMembers").get(getMembers);
router.route("/deleteGroup").delete(deleteGroup);
router.route("/addMember").post(addMember);
router.route("/clearTransactionData").delete(clearTransactionData);


module.exports = router;
