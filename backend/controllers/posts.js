const Post = require('../models/post');
const User = require('../models/user');

exports.requestPost = (req, res, next) => {
  const post = new Post({
    orgName: req.body.orgName,
    uen: req.body.uen,
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
    creator: req.userData.userId,

    students: [],
    reports: [],
  });
  post.save() //creates a new post document stored in collections. Name will be plural from of models name. so schema was Post, stored is posts (lowercase)
    .then(createdPost => {
      res.status(201).json({message: "post requested successfully! Pending admin approval", postId: createdPost._id});
    });
};

exports.getAllPosts = (req, res, next) => {
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
};

exports.deletePost = (req, res, next) => {

  if (req.userData.role === 'Admin') {
    Post.deleteOne({_id: req.params.id})
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({message: "Post delete request sent!"});
      } else {
        res.status(401).json({ message: "Not authorised to delete!"});
      }
    })
     .then((result) => {
       console.log(result);
     });

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
};


//publish function to change approved from false to true
//TODO: must also send out email to students with interested posts
exports.publishPost = (req, res, next) => {
    const newPost = new Post({
      _id: req.body.id,
      orgName: req.body.orgName,
      uen: req.body.uen,
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
      approved: true,
      creator: req.body.id,
      //creator: req.userData.userId
      students: [],
      reports: [],
    });
    Post.updateOne({_id: req.params.id}, newPost)
    .then(result => { //result is either true to false
      if (!result) {
        throw new Error("Unable to publish post!");
      }


      User.find()
      .then(allUsersDocument => {
        console.log(allUsersDocument);
        res.status(200).json({
          documents: allUsersDocument,
          message: "All Users Found?",
        });
      });

      //res.status(200).json("Post published!"); callback later because now we need to send notification email
    })

    .catch(error => {}); //in case anything goes wrong
  };

 exports.applyPost = (req, res, next) => {
  const newPost = new Post({
    _id: req.body.id,
    orgName: req.body.orgName,
    uen: req.body.uen,
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
    approved: true,
    creator: req.body.id,

    students: req.body.students,
    reports: req.body.reports,
  });

  Post.findByIdAndUpdate(req.body.id, newPost).then((result) => { //try updateOne instead as I think mongoose might deprecate findByIdAndUpdate
    res.status(200).json("Post published!");
  });
};

exports.reportPost = (req, res, next) => {
  const newPost = new Post({
    _id: req.body.id,
    orgName: req.body.orgName,
    uen: req.body.uen,
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
    approved: true,
    creator: req.body.id,

    students: req.body.students,
    reports: req.body.reports,
  });

  Post.findByIdAndUpdate(req.body.id, newPost).then((result) => { //try updateOne instead as I think mongoose might deprecate findByIdAndUpdate
    res.status(200).json("Post reported!");
  });
};
