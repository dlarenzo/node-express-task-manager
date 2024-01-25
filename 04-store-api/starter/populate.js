require("dotenv").config();

const connectDB = require("./db/connect");

const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://Zo:1234@nodeexpressprojects.difmxbu.mongodb.net/04-STORE-API?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success");

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
