const express = require('express');
const Post = require('../models/post');


const router = express();

router.post('', (req, res, next) => {
  const post = new Post({
    orgName: req.body.orgName,
    uen: req.body.uen,
    studentGroupName: req.body.studentGroupName,
    POC: req.body.POC,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    skills: req.body.skills,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hoursRequired: req.body.hoursRequired,
    beneficiaryInfo: req.body.beneficiaryInfo,
  });
  post.save() //creates a new post document stored in collections. Name will be plural from of models name. so schema was Post, stored is posts (lowercase)
    .then(createdPost => {
      res.status(201).json({message: "post added successfully!", postId: createdPost._id});
    });
});

router.get('', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: "posts fetched successfully",
        posts: documents,
      });
    })
    .catch(e => {
      console.log("Error occured at backend/app app.get");
    });
});

router.delete('/:id', (req, res, next) => {
  //console.log(req.params.id);
  Post.deleteOne({_id: req.params.id})
    .then((result) => {
      console.log(result);
      res.status(200).json({message: "Post delete request sent!"});
    });
});

module.exports = router;