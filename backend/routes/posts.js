const express = require("express");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const PostsController = require("../controllers/posts");

const router = express();

router.post("", checkAuth, PostsController.requestPost);

router.get("", PostsController.getAllPosts);

router.delete("/:id", checkAuth, PostsController.deletePost);

//publish function
router.put("/publish/:id", PostsController.publishPost);

//student apply function
router.put("/apply/:id", PostsController.applyPost);

module.exports = router;
