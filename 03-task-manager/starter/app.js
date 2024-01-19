//setting up a basic express server, listening for one route /hello
//set up variable equal to require express package
const express = require("express");

//initialize
const app = express();

//  IMPORTED ROUTES (imported tasks) basically info exported from other js files we import here to the main file
//  use variable named routes, then you require('place your path back to specific folder')
const routes = require("./routes/tasks");

//  routes THIS IS A GET REQUEST (BASICALLY WHERE THE PAGE IS STORED IT'S URL)
//  to the right is the callback function passing through (req, res) which is request and response
//  app is used because we initialized with a const app, so wee use that
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

//ROUTES
//  app.get('/api/v1/tasks')      -get all the tasks
//  app.post('/api/v1/tasks')     -create a new task
//  app.get('/api/v1/tasks/:id')  -get single task
//  app.get('/api/v1/tasks/:id')  -update task
//  app.get('/api/v1/tasks/:id')  -delete task

//
app.listen(port, console.log("server is listening on port ${port}..."));

//invoke (currently set to 3000 but there will be more code )
const port = 3000;
