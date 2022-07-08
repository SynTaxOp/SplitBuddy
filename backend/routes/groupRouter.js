const express = require("express");
const router = express.Router();
const {
  addGroup,
  getGroups,
  getMembers,
} = require("../controller/groupControl");

router.route("/addGroup").post(addGroup);
router.route("/getGroups").get(getGroups);
router.route("/getMembers").get(getMembers);

module.exports = router;
