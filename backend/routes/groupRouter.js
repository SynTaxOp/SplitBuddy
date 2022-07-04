const express = require("express");
const router = express.Router();
const  {addGroup}= require('../controller/groupControl')

router.route('/addGroup').post(addGroup)

module.exports = router
