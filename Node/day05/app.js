const http = require("http");
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This message is print by Middleware");
  res.send("<h1>Hello from Root</h1>");

  next(); //Allow the request to continue to the next middleware in line
});

app.use("/product", (req, res, next) => {
  console.log("This message is print by Middleware");
  res.send("<h1>Hello from Product</h1>");

  next(); //Allow the request to continue to the next middleware in line
});

app.use("/", (req, res, next) => {
  console.log("This message is print by Middleware no 2");
  res.send("<h1>Hello from Expressjs</h1>");
});

// const routes = require("./routes");

// console.log(routes.someText);

const server = http.createServer(app);

server.listen(3333);
