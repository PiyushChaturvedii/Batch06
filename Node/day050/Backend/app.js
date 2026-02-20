const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
// app.use(bodyParser.urlencoded()); // x-ww-form-urlencded <form>
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-allow-Methods",
    "OPTIONS, GET, POST,PUT, PATCH, DELETE",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// GET /feed/posts
app.use("/feed", feedRoutes);
mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.4duo99k.mongodb.net/network?appName=Cluster0",
  )
  .then((result) => {
    console.log("Server connected with mongodb : port 4040");
    app.listen(4040);
  })
  .catch((err) => console.log(err));
