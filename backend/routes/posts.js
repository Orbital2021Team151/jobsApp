const express = require("express");
const Post = require("../models/post");
const checkAuth = require("../middleware/check-auth");
const PostsController = require("../controllers/posts");
const multer = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log(path.join(
      __dirname,
      "backend",
      "images",
    ));
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid Mime Type!');
    if (isValid) {
      error = null;
    }
    callback(null, path.join(
      __dirname,
      "backend",
      "images",
    )); //path relative to server.js
  },
  filename: (req, file, callback) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, name + '-' + Date.now() + '.' + ext);
  }
});


const router = express();

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
