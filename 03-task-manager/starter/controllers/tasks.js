//

const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  //this information shows on the screen
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  try {
    const tasks = await Task.find({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

//  MODULE.EXPORT ALWAYS ON THE BOTTOM
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
