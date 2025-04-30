const express = require("express");
const userRouter = require("./Routes/userRoutes");
const bodyParse = require("body-parser");
const mongooose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
mongooose
  .connect("mongodb://127.0.0.1:27017/condidates")
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((err) => {
    console.log("err from mongoDB =>", err);
  });

app.use("/api/v3", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
