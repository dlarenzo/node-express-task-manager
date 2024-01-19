//  WE NEED TO LOOK FOR THE EXPRESS ROUTER
const express = require("express");

//  SET UP ROUTER
const router = express.Router();

//  INVOKE ROUTER

//  this specific one is being used in the controllers file where they will all be listed
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

//  module.export is used to export the info from variable we set called router.  We will then pull(request) this back on app.js
module.exports = router;
