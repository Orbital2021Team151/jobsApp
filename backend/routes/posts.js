const express = require("express");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const PostsController = require("../controllers/posts");
const multer = require('multer');

const router = express();

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid Mime Type!');
    if (isValid) {
      error = null;
    }
    callback(error, "images"); //path relative to server.js
  },

  filename: (req, file, callback) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, name + '-' + Date.now() + '.' + ext);
  }
});

router.post("", multer({storage: storage}).single("image"), checkAuth, PostsController.requestPost);

router.get("", PostsController.getAllPosts);

router.delete("/:id", checkAuth, PostsController.deletePost);

//publish function
router.put("/publish/:id", PostsController.publishPost);

//student apply function
router.put("/apply/:id", PostsController.applyPost);

router.put("/report/:id", PostsController.reportPost);

router.post("/check", PostsController.checkEmailExists);

router.get("/download", PostsController.downloadPosts);

module.exports = router;
