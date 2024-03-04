const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();

const port = 3000;

//middleware
app.use(express.static("./public"));
app.use(express.json()); //parse json data from request body

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
