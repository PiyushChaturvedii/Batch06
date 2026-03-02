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
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedcontroller.createPost,
);

router.get("/post/:postId", isAuth, feedcontroller.getPost);

router.put(
  "/post/:postId",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedcontroller.updatePost,
);

router.delete("/post/:postId", isAuth, feedcontroller.deletePost);

module.exports = router;
