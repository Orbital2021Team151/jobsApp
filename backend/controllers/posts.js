const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const mongodb = require("mongodb").MongoClient;
//const Json2csvParser = require("json2csv").Parser;

//const emailValidator = require('deep-email-validator');
//const emailExistence = require('email-existence');

const Post = require("../models/post");
const User = require("../models/user");

exports.requestPost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host"); //url to our server

  /*
  console.log("\nAt backend now. data received is as follows:");
  console.log("Testing out JSON.Stringified req");
  console.log(req.body);
  */

  const post = new Post({
    orgName: req.body.orgName,
    uen: req.body.uen,
    POC: req.body.POC,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    opportunity: req.body.opportunity,
    skills: req.body.skills,

    startDate: JSON.parse(req.body.startDate),
    endDate: JSON.parse(req.body.endDate),
    hoursRequired: req.body.hoursRequired,

    beneficiaries: req.body.beneficiaries,

    appproved: JSON.parse(req.body.approved),
    creationDate: JSON.parse(req.body.creationDate),
    publishDate: JSON.parse(req.body.publishDate),
    creator: req.userData.userId,

    students: JSON.parse(req.body.students),
    reports: JSON.parse(req.body.reports),
    image: req.body.image,
    imagePath: url + "/images/" + req.file.filename,
  });

  /*
  console.log("\nTrying out JSON.parse now. hope it works.");
  console.log(post);
  */

  post
    .save() //creates a new post document stored in collections. Name will be plural from of models name. so schema was Post, stored is posts (lowercase)
    .then((createdPost) => {
      //console.log("created post, stored in database is: ");
      //console.log(createdPost);

      //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
      //sendPostRequestedNotificationEmail(req.body.email, post);
      res.status(201).json({
        message: "post requested successfully! Pending admin approval",
        postId: createdPost._id,
        /*
        post: {
          //might not work tho because of the JSON crap again.
          id: createdPost._id,
          orgName: createdPost.orgName,
          uen: createdPost.uen,
          POC: createdPost.POC,
          phoneNumber: createdPost.phoneNumber,
          email: createdPost.email,
          title: createdPost.title,
          content: createdPost.content,
          opportunity: createdPost.opportunity,
          skills: createdPost.skills,

          startDate: createdPost.startDate,
          endDate: createdPost.endDate,
          hoursRequired: createdPost.hoursRequired,

          beneficiaries: createdPost.beneficiaries,

          appproved: createdPost.approved,
          creationDate: createdPost.creationDate,
          publishDate: createdPost.publishDate,
          creator: createdPost.userId,

          students: createdPost.students,
          reports: createdPost.reports,
          image: req.body.image,
          imagePath: createdPost.imagePath,
        },
        */

        /*
         * Spread operator has some gotcha thing in Mongoose
        post: {
          ...createdPost,
          id: createdPost._id
        }
        */
      });
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((documents) => {
      res.status(200).json({
        message: "Posts fetched successfully",
        posts: documents,
      });
    })
    .catch((e) => {
      console.log("Error occured at backend/app app.get");
      res.status(404).json({
        error: e,
        message: "Error at get all Posts in controllers posts.js",
      });
    });
};

exports.deletePost = (req, res, next) => {
  //console.log("At backend delete PoST! Data are as follows: ");
  //console.log(req.userData);
  //console.log(req.params);

  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.n > 0) {
        //console.log("Deletion by admin successful");
        res
          .status(200)
          .json({ message: "Post delete request sent and completed!" });
      } else {
        //console.log("Deletion by admin unsuccessful");
        res.status(401).json({
          message: "Not authorised to delete? Even tho I am an admin!?",
        });
      }
    })
    .catch((err) => {
      //console.log(err);
      res
        .status(401)
        .json({ message: "Error at deleting. it does not exist?", error: err });
    });

  /*
  if (req.userData.role === 'Admin') {
    Post.deleteOne({_id: req.params.id})
    .then((result) => {
      if (result.n > 0) {
        //console.log("Deletion by admin successful");
        res.status(200).json({message: "Post delete request sent and completed!"});
      } else {
        //console.log("Deletion by admin unsuccessful");
        res.status(401).json({ message: "Not authorised to delete? Even tho I am an admin!?"});
      }
    })
     .catch(err => {
       //console.log(err);
       res.status(401).json({ message: "Error at deleting. it does not exist?", error: err});
     });

  } else {
    Post.deleteOne({ _id: req.params.id, }) //  creator: req.userData.userId,  }) //can't tag creator too apparently
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({message: "Post delete request sent!"});
      } else {
        res.status(401).json({ message: "Not authorised to delete!"});
      }
    })

    .catch(err => {
      //console.log(err);
      res.status(401).json({ message: "Error at deleting. it does not exist?", error: err});
    });
  }
  */
};

//publish function to change approved from false to true
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
    opportunity: req.body.opportunity,
    skills: req.body.skills,

    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hoursRequired: req.body.hoursRequired,

    beneficiaries: req.body.beneficiaries,

    approved: true,
    creator: req.body.id,
    creationDate: req.body.creationDate,
    publishDate: req.body.publishDate,

    students: [],
    reports: [],
  });

  Post.updateOne({ _id: req.params.id }, newPost)
    .then((result) => {
      //result is either true to false
      if (!result) {
        throw new Error("Unable to publish post!");
      }

      User.find().then((allUsersDocument) => {
        //console.log("Post it published! This message should only be seen from the mongoDB shell");

        for (var userI = 0; userI < allUsersDocument.length; userI++) {
          var currentUser = allUsersDocument[userI];
          var interestedBeneficiaries = currentUser.beneficiaries;
          //console.log(currentUser);

          for (
            var postBeneficiaryI = 0;
            postBeneficiaryI < req.body.beneficiaries.length;
            postBeneficiaryI++
          ) {
            let postBeneficiary = req.body.beneficiaries[postBeneficiaryI];
            //console.log(postBeneficiary);
            if (interestedBeneficiaries.includes(postBeneficiary)) {
              //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
              //sendNotificationEmail(currentUser.email, req.body);
              break;
            }
          }
        }

        //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
        //sendPostApprovedNotificationEmail(req.body.email, req.body); //sends email to post creator to inform organisation that their post has been published?

        res.status(200).json({
          documents: allUsersDocument, //probably do not need this
          message: "All Users Found?",
        });
      });

      //res.status(200).json("Post published!"); callback later because now we need to send notification email
    })

    .catch((error) => {
      console.log(error);
      console.log(
        "Error occured at posts line 136. Could be either issue with publishing the post or sending notificaitno emails to users"
      );
    }); //in case anything goes wrong
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
    opportunity: req.body.opportunity,
    skills: req.body.skills,

    startDate: req.body.startDate,
    endDate: req.body.endDate,
    hoursRequired: req.body.hoursRequired,

    beneficiaries: req.body.beneficiaries,

    approved: true,
    creator: req.body.id,
    creationDate: req.body.creationDate,
    publishDate: req.body.publishDate,

    students: req.body.students,
    reports: req.body.reports,
  });

  Post.updateOne({ _id: req.body.id }, newPost).then((result) => {
    //sends email to organisation to inform that that someone applied for their post?

    //to just to inform the person who applied for the post that their application got through.
    //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
    //sendApplyAcknowledgementEmail(req.body.email, req.body);

    res.status(200).json("Applied for posting!");
  });
};

//report a post flagged out by a student
exports.reportPost = (req, res, next) => {
  const newPost = new Post({
    _id: req.body.post.id,
    orgName: req.body.post.orgName,
    uen: req.body.post.uen,
    POC: req.body.post.POC,
    phoneNumber: req.body.post.phoneNumber,
    email: req.body.post.email,
    title: req.body.post.title,
    content: req.body.post.content,
    opportunity: req.body.post.opportunity,
    skills: req.body.post.skills,

    startDate: req.body.post.startDate,
    endDate: req.body.post.endDate,
    hoursRequired: req.body.post.hoursRequired,

    beneficiaries: req.body.post.beneficiaries,

    approved: true,
    creator: req.body.post.id,
    creationDate: req.body.creationDate,
    publishDate: req.body.publishDate,

    students: req.body.post.students,
    reports: req.body.post.reports,
  });

  Post.findByIdAndUpdate(req.body.post.id, newPost)
    .then((result) => {
      if (!result) {
        throw new Error("Post cannot be reported!");
      }

      User.find().then((allUsersDocument) => {
        console.log(
          "Post has been reported! Now it should send notification emails to all admins and the user who reported the post."
        );

        let adminUsers = allUsersDocument.filter(
          (user) => user.role === "Admin"
        );

        for (var userI = 0; userI < adminUsers.length; userI++) {
          let currentAdmin = adminUsers[userI];
          //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
          //sendReportToAdminEmail(currentAdmin.email, req.body.post);
          //console.log("Report email sent to admin: " + currentAdmin.email);
        }

        //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
        //sendReportAcknowledgementEmail(req.body.student.email, req.body.post);
        //console.log("Report acknowledgement sent to: " + req.body.student.email);

        res.status(200).json({
          documents: allUsersDocument,
          message: "Notification for report against post?",
        });
      });
    })

    .catch((error) => {
      res.status(400).json({
        message:
          "Something went wrong at reporting post. either reporting the post itself or failed to send notification to admins",
      });
    });
};

exports.downloadPosts = (req, res, next) => {
  //let url = "mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@eprepmeancoursecluster.qa0ny.mongodb.net/orbitalDatabase?retryWrites=true&w=majority";
  let url =
    "mongodb+srv://admin:" +
    process.env.MONGO_ATLAS_PW +
    "@eprepmeancoursecluster.qa0ny.mongodb.net/";
  mongodb.connect(
    url,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },

    (err, client) => {
      if (err) {
        console.log(
          "Error at connecting to mongodb. line 261 controllers posts.js"
        );
        console.log(err);
        res.status(404).json({
          message: "Error at download posts connecting to mongodb",
          error: err,
        });
      }

      client
        .db("orbitalDatabase")
        .collection("posts")
        .find({})
        .toArray((err, data) => {
          if (err) {
            console.log(
              "Error at toArray function of downloadPosts. line 274 controllers posts.js"
            );
            console.log(err);
            res.stats(404).json({
              message: "Error at download posts retrieving posts from mongodb",
              error: err,
            });
          }

          mappedData = data.map((obj) => {
            return {
              beneficiaries: obj.beneficiaries,
              orgName: obj.orgName,
              uen: obj.uen,
              point_of_contact: obj.POC,
              phoneNumber: obj.phoneNumber,
              email: obj.email,
              title: obj.title,
              content: obj.content,
              opportunity: obj.opportunity,
              skills: obj.skills,
              startDate: obj.startDate,
              endDate: obj.endDate,
              commitment: obj.hoursRequired,
              studentsInterested: obj.students,
              reports: obj.reports,
              approved: obj.approved,
              creationDate: obj.creationDate,
              publishDate: obj.publishDate,
            };
          });

          res.status(200).json({
            message: "Downloaded csv file",
            data: mappedData,
          });

          client.close();
        });
    }
  );
};

//the only one that might work is the mailgun-js solution. but that feature is locked behind a subscription service
exports.checkEmailExists = (req, res, next) => {
  console.log("Inside MongoDB!");
  /*
   * yahoo addresses not working, @u.nus.edu addresses not working
  emailExistence.check(req.body.email, (error, response) => {
    console.log("Checking email's existence now!");
    if (error) {
      console.log("In error clause");
      console.log(error);
    } else {
      console.log("Response works?");
      console.log(response);
    }
    console.log("\n");
  })
  */

  /*
   * yahoo addresses not working, @u.nus.edu addresses not working
  async function isEmailValid(email) {
    return emailValidator.validate(email)
   }

   isEmailValid(req.body.email)
   .then(dataObject => {

    return res.status(200).json({
      message: "retrieved information are as attached",
      valid: dataObject.valid,
      reason: dataObject.reason,
      validators: dataObject.validators,
      dataObject: dataObject,
    });
  })

    .catch(err => {
      console.log("Interesting to have it fail");
      return res.status(400).send({
        message: "check email exists function failed",
        error: err,
      });
    });

    */
};

/*
 * Emails with HTML Templating.
 * They use gmail's smtp service.
 * Might need to move to sendgrid / mailgun in the future if volume is a lot larger
 */
const sendNotificationEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Email Notification";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "post-notification",
    "post-notification.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Volunteer Opportunity Available",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Notification email! (line 383, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Reset Password email!");
    } else {
      console.log("Notification email sent!");
    }
  });
};

const sendPostApprovedNotificationEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Post Approved";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "post-publish-confirmation",
    "post-publish-confirmation.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Requested Post Has Been Approved",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Publish Notification email! (line 461, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Publish Notification email!");
    } else {
      console.log("Notification email sent!");
    }
  });
};

const sendPostRequestedNotificationEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Post Request Confirmation";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "post-request-confirmation",
    "post-request-confirmation.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Post Request Acknowledgement",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Post Request Acknowledgement email! (line 539, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Post Request Acknowledgement email!");
    } else {
      console.log("Post Request Acknowledgement email sent!");
    }
  });
};

const sendReportToAdminEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Report Alert";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "report-admin",
    "report-admin.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Post Report Alert",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Post Report Alert email! (line 539, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Post Report Alert email!");
    } else {
      console.log("Post Report Alert email sent!");
    }
  });
};

const sendReportAcknowledgementEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Report Acknowledgement";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "report-acknowledgement",
    "report-acknowledgement.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Post Report Acknowledgement",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Post Report Acknowledgement email! (line 539, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Post Report Acknowledgement email!");
    } else {
      console.log("Post Report Acknowledgement email sent!");
    }
  });
};

const sendApplyAcknowledgementEmail = (email, post) => {
  var mailOptions;
  let sender = "CCSGP Report Acknowledgement";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "apply-acknowledgement",
    "apply-acknowledgement.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    orgName: post.orgName,
    POC: post.POC,
    phoneNumber: post.phoneNumber,
    email: post.email,
    title: post.title,
    content: post.content,
    opportunity: post.opportunity,
    skills: post.skills,
    startDate: new Date(post.startDate).toDateString(),
    endDate: new Date(post.endDate).toDateString(),
    hoursRequired: post.hoursRequired,
    beneficiaries: post.beneficiaries,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Post Application Acknowledgement",
    html: htmlToSend,
    attachments: [
      {
        filename: "Orbital-Logo-Design.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Orbital-Logo-Design.png"
        ),
        cid: "orbitalLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(
        "Could not send Post Application Acknowledgement email! (line 539, controllers posts.js) Error is as shown below: "
      );
      console.log(error);
      throw new Error("Could not send Post Application Acknowledgement email!");
    } else {
      console.log("Post Application Acknowledgement email sent!");
    }
  });
};

/*
const sendNotificationEmail = (email, post) => {
  var Transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false,
    },

  });

  var mailOptions;
  let sender = "CCSGP Volunteer Opportunity Notification";
  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Volunteer Opportunity Available",
    html:
    `We have received a volunteer posting recently that you might be interested in. Please take a look! Below are the details: <br>
    Organisation: ${post.orgName}<br>
    Point-Of-Contact: ${post.POC}<br>
    Contact Number: ${post.phoneNumber}<br>
    Email Address: ${post.email}<br>
    Job Title: ${post.title}<br>
    Job Description: ${post.content}<br>
    Preferred Skills: ${post.skills}<br>
    Start Date: ${new Date(post.startDate).toDateString()}<br>
    End Date: ${new Date(post.endDate).toDateString()}<br>
    Commitment Hours Required: ${post.hoursRequired}<br>
    Beneficiaries involved: ${post.beneficiaries}<br>


    Please take a look at the feed page to find out more information! The website can be accessed <a href=https://ccsgp-app.herokuapp.com/>here</a>.<br><br>

    Yours sincerely,<br>
    CCSGP Admin
    `
    // https://ccsgp-app.herokuapp.com/ or http://localhost:3000/
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      console.log("Could not send Posting Notification email!");
      throw new Error("Could not send Posting Notification email!");
    } else {
      console.log("Posting Notification email sent!");
    }
  });
};



const sendPostApprovedNotificationEmail = (email, post) => {
  var Transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false,
    },

  });

  var mailOptions;
  let sender = "CCSGP Volunteer Opportunity Post Appoved";
  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Volunteer Opportunity Post Approved",
    html:
    `Thank you for your kind patience. Our administrators have approved your post and below are the details. <br><br>

    Organisation: ${post.orgName}<br>
    Point-Of-Contact: ${post.POC}<br>
    Contact Number: ${post.phoneNumber}<br>
    Email Address: ${post.email}<br>
    Job Title: ${post.title}<br>
    Job Description: ${post.content}<br>
    Preferred Skills: ${post.skills}<br>
    Start Date: ${new Date(post.startDate).toDateString()}<br>
    End Date: ${new Date(post.endDate).toDateString()}<br>
    Commitment Hours Required: ${post.hoursRequired}<br>
    Beneficiaries involved: ${post.beneficiaries}<br><br>


    Thank you for choosing SoC CCSGP as your partner! We have sent out email notifications to students who have indicated their interest in the benefeciaries you mentioned.<br><br>

    The website can be accessed <a href=https://ccsgp-app.herokuapp.com/>here</a>. Please feel free to write in to us if you have any further queries.
    Thank you and have a great day ahead!<br><br>

    Yours sincerely,<br>
    CCSGP Admin
    `
    // https://ccsgp-app.herokuapp.com/ or http://localhost:3000/
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      console.log("Could not send Posting Notification email!");
      throw new Error("Could not send Posting Notification email!");
    } else {
      console.log("Posting Notification email sent!");
    }
  });
};







const sendReportToAdminEmail = (email, post) => {
  var Transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false,
    },

  });

  var mailOptions;
  let sender = "CCSGP Volunteer Posting Report";
  mailOptions = {
    from: sender,
    to: email,
    subject: "Report made by student for a Volunteer job Posting",
    html:
    `We have received a report from a student regarding the following posting: <br><br>
    Organisation: ${post.orgName}<br>
    Point-Of-Contact: ${post.POC}<br>
    Contact Number: ${post.phoneNumber}<br>
    Email Address: ${post.email}<br>
    Job Title: ${post.title}<br>
    Job Description: ${post.content}<br>
    Preferred Skills: ${post.skills}<br>
    Start Date: ${new Date(post.startDate).toDateString()}<br>
    End Date: ${new Date(post.endDate).toDateString()}<br>
    Commitment Hours Required: ${post.hoursRequired}<br>
    Beneficiaries involved: ${post.beneficiaries}<br>


    Please review the post on the Admin Dashboard. The website can be accessed <a href=https://ccsgp-app.herokuapp.com/>here</a>.<br><br>

    Yours sincerely,<br>
    CCSGP Admin
    `
    // https://ccsgp-app.herokuapp.com/ or http://localhost:3000/
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      console.log("Could not send Report Notification to Admin email!");
      throw new Error("Could not send Report Notification to Admin email!");
    } else {
      console.log("Report Notification to Admin email sent!");
    }
  });
};



const sendReportAcknowledgementEmail = (email, post) => {
  var Transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false,
    },

  });

  var mailOptions;
  let sender = "CCSGP Volunteer Post Report Acknowledgement";
  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Volunteer Post Report Acknowledgement",
    html:
    `Thank you for your report. We have forwarded your concerns to the relevant stakeholders for actions to be taken. Below are the details of the post you have reported on:<br>
    Organisation: ${post.orgName}<br>
    Point-Of-Contact: ${post.POC}<br>
    Contact Number: ${post.phoneNumber}<br>
    Email Address: ${post.email}<br>
    Job Title: ${post.title}<br>
    Job Description: ${post.content}<br>
    Preferred Skills: ${post.skills}<br>
    Start Date: ${new Date(post.startDate).toDateString()}<br>
    End Date: ${new Date(post.endDate).toDateString()}<br>
    Commitment Hours Required: ${post.hoursRequired}<br>
    Beneficiaries involved: ${post.beneficiaries}<br>


    Rest assured that our Administrators have received your report and will investigate the post thoroughly. Once again, thank you for the feedback and apologies for any inconvenience caused.<br>

    Yours sincerely,<br>
    CCSGP Admin
    `
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      console.log("Could not send Post Report Acknowledgement email!");
      throw new Error("Could not send Post Report Acknowledgement email!");
    } else {
      console.log("Post Report Acknowledgement email sent!");
    }
  });
}

*/
