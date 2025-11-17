const path = require("path");
const rootDir = require("../util/path");

const express = require("express");

const router = express.Router();

// router.get("/", (req, res, next) => {
//   res.send("<h1>Hello from Express JS</h1>");
// });

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
