const express = require('express');
const Post = require('../models/post');
const checkAuth = require('../middleware/check-auth');
const user = require('../models/user');

const router = express();

router.post('',
checkAuth,
(req, res, next) => {
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
    beneficiaries: req.body.beneficiaries,
    appproved: false,
    creator: req.userData.userId
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
        message: "Posts fetched successfully",
        posts: documents,
      });
    })
    .catch(e => {
      console.log("Error occured at backend/app app.get");
    });
});

router.delete('/:id',
checkAuth,
(req, res, next) => {
  console.log(req.userData.role);
  if (req.userData.role === 'Admin') {
    Post.deleteOne({_id: req.params.id})
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({message: "Post delete request sent!"});
      } else {
        res.status(401).json({ message: "Not authorised to delete!"});
      }
    });
    console.log("post deleted by administrator!")
    // .then((result) => {
    //   console.log(result);
    // });
  } else {
    Post.deleteOne({ _id: req.params.id, creator: req.userData.userId, }) //change creator field to orgName?
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({message: "Post delete request sent!"});
      } else {
        res.status(401).json({ message: "Not authorised to delete!"});
      }
    });
  }
});

// Post.deleteOne({ _id: req.params.id, creator: req.userData.userId, }) //change creator field to orgName?
//     .then((result) => {
//       if (result.n > 0) {
//         res.status(200).json({message: "Post delete request sent!"});
//       } else {
//         res.status(401).json({ message: "Not authorised to delete!"});
//       }
//     });

//publish function, need to add some perms to make it so that only admins can do it..
router.put('/:id', (req, res, next) => { //publish function to change approved from false to true
//  console.log("router.put request fired!");
  const newPost = new Post({
    _id: req.body.id,
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
    approved: true,
    //creator: req.userData.userId
  });
  Post.updateOne({_id: req.params.id}, newPost).then(result => {
//    console.log(result);
    res.status(200).json("Post published!");
  });
});

module.exports = router;
