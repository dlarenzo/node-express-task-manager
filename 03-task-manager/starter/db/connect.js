const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Zo:1234@nodeexpressprojects.difmxbu.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
