const Highlight = require('../models/highlight');

exports.publishHighlight = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const highlight = new Highlight({
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    imagePath: url + '/highlightsImages/' + req.file.filename,
  });

  console.log(highlight);

  highlight.save()
  .then(highlight => {
    res.status(201).json({
      message: "highlight published successfully!"
    })
  });
};

exports.getAllHighlights = (req, res, next) => {
  Highlight.find()
  .then((documents) => {
    res.status(200).json({
      message: "Highlights fetched successfully",
      highlights: documents,
    });
  })
  .catch((e) => {
    console.log("Error occurred at backend/app/app.get");
    res.status(404).json({
      error: e,
      message: "Error at getAllHighlights in controllers"
    })
  })
};

exports.deleteHighlight = (req, res, next) => {
  Highlight.deleteOne({ _id: req.params.id })
  .then(result => {
    if (result.n > 0) {
      res.status(200).json({ message: "Highlight successfully deleted." })
    } else {
      res.status(400).json({ message: "Somehow your highlight was not deleted." })
    }
  })
  .catch(err => {
    res.status(401).json({
      message: "Does the highlight even exist?",
      error: err,
    })
  })
};

