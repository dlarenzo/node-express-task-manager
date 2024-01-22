//setting up a basic express server, listening for one route /hello
//set up variable equal to require express package

const express = require("express");

//initialize
const app = express();

//  IMPORTED ROUTES (imported tasks) basically info exported from other js files we import here to the main file
//  used variable named tasks because the js routes file name is tasks.js, then you require('place your path back to specific folder')
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

//  MIDDLEWARE (express JSON allows you to access )
app.use(express.json());

//  ROUTES
//  routes THIS IS A GET REQUEST (BASICALLY WHERE THE PAGE IS STORED IT'S URL)
//  to the right is the callback function passing through (req, res) which is request and response
//  app is used because we initialized with a const app, so wee use that
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//  ROUTES TO USE ('what route we are looking for', tasks)

//  app.get('/api/v1/tasks')      -get all the tasks
app.use("/api/v1/tasks", tasks);

//  app.post('/api/v1/tasks')     -create a new task
//  app.get('/api/v1/tasks/:id')  -get single task
//  app.patch('/api/v1/tasks/:id')  -update task
//  app.delete('/api/v1/tasks/:id')  -delete task

//invoke (currently set to 3000 but there will be more code )
const port = 3000;

const start = async () => {
  try {
    await connectDB();

    //  PLACED LAST SO SERVER IS READY
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();