//

const getAllTasks = (req, res) => {
  //this information shows on the screen
  res.send("get all tasks");
};

const createTask = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.send("get single task");
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
