//  WE NEED TO LOOK FOR THE EXPRESS ROUTER
const express = require("express");

//  SET UP ROUTER
const router = express.Router();

//  INVOKE ROUTER
router.route("/").get((req, res) => {
  res.send("all items");
});

//  module.export is used to export the info from variable we set called router.  We will then pull(request) this back on app.js
module.exports = router;
