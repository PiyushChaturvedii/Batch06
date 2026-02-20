const express = require("express");
const { body } = require("express-validator");
const feedcontroller = require("../controllers/feed");

const router = express.Router();

router.get("/posts", feedcontroller.getPosts);
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedcontroller.createPost,
);

module.exports = router;
