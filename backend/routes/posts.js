const express = require("express");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const PostsController = require("../controllers/posts");
const multer = require('multer');
const path = require("path");

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
    //callback(error, "images"); //path relative to server.js
    callback(null, path.join(__dirname, "..", "images")); //path relative to server.js for localhost:3000
  },

  filename: (req, file, callback) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, name + '-' + Date.now() + '.' + ext);
  }
});


router.post("", multer({storage: storage}).single("image"), checkAuth, PostsController.requestPost);

router.post("/requestPostNoImage", checkAuth, PostsController.requestPostNoImage);

router.get("", PostsController.getAllPosts);

router.delete("/:id", checkAuth, PostsController.deletePost);

//publish function
router.put("/publish/:id", PostsController.publishPost);

//student apply function
router.put("/apply/:id", PostsController.applyPost);

router.put("/report/:id", PostsController.reportPost);

router.get("/download", PostsController.downloadPosts);

module.exports = router;
