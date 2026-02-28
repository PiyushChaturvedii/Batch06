const express = require("express");
const { body } = require("express-validator");
const feedcontroller = require("../controllers/feed");
const isAuth = require("../middleware/is-auth");
const router = express.Router();

// GET /feed/posts
router.get("/posts", isAuth, feedcontroller.getPosts);

// POST /feed/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedcontroller.createPost,
);

router.get("/post/:postId", feedcontroller.getPost);

router.put(
  "/post/:postId",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedcontroller.updatePost,
);

router.delete("/post/:postId", feedcontroller.deletePost);

module.exports = router;
