const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.urlencoded()); // x-ww-form-urlencded <form>
app.use(bodyParser.json()); // application/json
// GET /feed/posts
app.use("/feed", feedRoutes);
app.listen(4040);
