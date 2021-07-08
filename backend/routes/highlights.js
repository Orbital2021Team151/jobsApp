const express = require('express');
const Highlight = require('../models/highlight');
const HighlightsController = require('../controllers/highlights');
const path = require("path");

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
    //callback(error, "images"); //path relative to server.js
    callback(null, path.join(__dirname, "..", "highlightsImages")); //path relative to server.js for localhost:3000
  },

  filename: (req, file, callback) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    callback(null, name + '-' + Date.now() + '.' + ext);
  }
});

router.post("", multer({storage: storage}).single('image'), HighlightsController.publishHighlight);

module.exports = router;

