const Highlight = require('../models/highlight');

exports.publishHighlight = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const highlight = new Highlight({
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    imagePath: url + '/highlightsImages' + req.file.filename,
  });

  highlight.save()
  .then(highlight => {
    res.status(201).json({
      message: "highlight published successfully!"
    })
  });

}
