const { application } = require('express');
const mongoose = require('mongoose');

const highlightSchema = mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Highlight', highlightSchema);

