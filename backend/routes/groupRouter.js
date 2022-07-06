const express = require("express");
const router = express.Router();
const { addGroup, displayGroup } = require("../controller/groupControl");

router.route("/addGroup").post(addGroup);
router.route("/displayGroup").get(displayGroup);
module.exports = router;
