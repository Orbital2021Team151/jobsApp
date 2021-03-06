const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const User = require("../models/user");

exports.signup = (req, res, next) => {

  bcrypt.hash(req.body.password, 10).then((passwordHash) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
      admin: false,
      beneficiaries: [],
      verified: false,
      ban: false,
    });

    user
      .save()
      .then((result) => {
        const email = user.email;
        //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
        sendVerificationEmail(email, result._id);

        res.status(201).json({
          message:
            "Account Registered! Please check your email for activation link.",
          result: result,
        });
      })

      .catch((err) => {
        res.status(500).json({
          errorCode: 5, //same as below because it's the same error.
          message: "You probably signed up before using this email before...",
          error: err,
        });
      });
  });
};

exports.login = (req, res, next) => {
  User.findOne({
    email: req.body.email
  })
    .then((userFound) => {
      if (userFound === null) {
        throw new Error("No such user");
      }

      //console.log("Inside MongoDB now. Fetched user is: ");
      //console.log(userFound);

      return bcrypt
        .compare(req.body.password, userFound.password)
        .then((result) => {
          if (!result) {
            throw new Error("Wrong Password!");
          }
          return userFound.verified;
        })

        .then((verified) => {
          if (!verified) {
            throw new Error("User not verified!");
          } else if (userFound.ban) {
            throw new Error("User has been banned!");
          } else {

            const token = jwt.sign(
              {
                email: userFound.email,
                userId: userFound._id,
              },
              process.env.JWT_KEY,
              { expiresIn: "24h" }
            );

            res.status(200).json({
              token: token,
              expiresIn: 86400,
              id: userFound._id,
              name: userFound.name,
              email: userFound.email,
              password: userFound.password,
              admin: userFound.admin,
              beneficiaries: userFound.beneficiaries,
              verified: userFound.verified,
              ban: userFound.ban,
            });
            return true;
          }
        })

        .catch((err) => {
          //console.log(err);

          if (err.message === "User not verified!") {
            //console.log("User not verified! err.message printed.");
            sendVerificationEmail(fetchedUser.email, fetchedUser._id);    //For my own testing.
            res.status(401).json({
              errorCode: 11,
              message: "User is not verified!",
              error: err,
            });
          }

          if (err.message === "Wrong Password!") {
            //console.log("Wrong Password! err.message printed.");
            res.status(401).json({
              errorCode: 2,
              message: "Wrong Password",
              error: err,
            });
          }

          if (err.message === "User has been banned!") {
            //console.log("Account got banned!");
            res.status(401).json({
              errorCode: 17, //TODO: NEED A NEW ERROR FOR THIS
              message: "User has been banned",
              error: err,
            });
          }
        });
    })

    .catch((err) => {
      res.status(404).json({
        errorCode: 3,
        message: "Unable to login",
        err: err,
      });
    });

};

exports.updateBeneficiaries = (req, res, next) => {
  let fetchedUser;
  console.log("updating beneficiaries now!")

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      throw new Error("Update Failed. But this should not happen tbf");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      name: fetchedUser.name,
      email: fetchedUser.email,
      password: fetchedUser.password,
      admin: fetchedUser.admin,
      beneficiaries: req.body.beneficiaries, //only difference
      verified: true,
      ban: false,
    });

    //console.log("Found the user to update!")
    //console.log(newUser)

    User.updateOne(
      {email: req.body.email},
      newUser
    ).then((result) => {
      //console.log("User's beneficiaries got updated?")
      //console.log(result);

      res.status(200).json({
        message: "User beneficiaries updated!",
        result: result,
      });
    });
  });
};

exports.updatePassword = (req, res, next) => {
  let fetchedUser;
  //console.log("Update password's controller users.js part. The req body object is: ");
  //console.log(req.body);

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  })

    .then((user) => {
      if (!user) {
        console.log("No user to update password. at controllers users.js line 179");
        throw new Error(
          "Authentication Failed. User does not exist in database."
        );
      }

      fetchedUser = user;

      return bcrypt.compare(req.body.currentPassword, user.password);
    })

    .then((result) => {
      if (!result) {
        console.log("Wrong current password! Cannot change password until you give the correct password");
        throw new Error("Wrong current password!");
      }

      bcrypt.hash(req.body.newPassword, 10).then((passwordHash) => {
        const newUser = new User({
          _id: fetchedUser.id,
          name: fetchedUser.name,
          email: fetchedUser.email,
          password: passwordHash,
          admin: fetchedUser.admin,
          beneficiaries: fetchedUser.beneficiaries,
          verified: true,
          ban: false,
        });

        User.updateOne(
          { _id: fetchedUser.id, email: req.body.email},
          newUser
        ).then((result) => {
          if (!result) {
            throw new Error("User password could not be updated!?");
          }
          res.status(200).json("User password updated!");
        });
      });
    })

    .catch((error) => {
      return res.status(412).json({
        errorCode: 4,
        message:
          "Current password provided was wrong or for some reason, could not update password :/",
        error: error,
      });
    });
};

exports.forgetPassword = (req, res) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email
  })
    .then((user) => {
      if (!user) {
        console.log("No user found to send forget password email to (line 362, controllers users.js).");
        throw new Error(
          "Authentication Failed. User does not exist in database."
        );
      }

      fetchedUser = user;
      tempPassword = randomStringGenerator();

      bcrypt.hash(tempPassword, 10).then((passwordHash) => {
        const newUser = new User({
          _id: fetchedUser.id,
          name: fetchedUser.name,
          email: fetchedUser.email,
          password: passwordHash,
          admin: fetchedUser.admin,
          beneficiaries: req.body.beneficiaries,
          verified: fetchedUser.verified,
          ban: false,
        });

        User.updateOne({_id: fetchedUser.id, email: req.body.email}, newUser)
          .then((result) => {
            if (result) {

              //TODO: REMOVE BACKSLAHES WHEN UPLOADING TO HEROKU. CAN LEAVE IT HERE IF EXTENSIVELY TESTING TO AVOID SPAM
              sendForgetPasswordEmail(req.body.email, tempPassword);
              res.status(200).json("User password reset!");
            } else {
              throw new Error(
                "Unable to reset the person's password. Might it be due to the backendRole issue again?"
              );
            }
          })
          .catch((err) => {
            res.status(404).json({
              errorCode: 10,
              message: "Issue with resetting person's password.",
            });
          });
      });
    })

    .catch((error) => {
      return res.status(412).json({
        errorCode: 1,
        message:
          "Current email provided was wrong or user with that role does not exist in database.",
        error: error,
      });
    });
};

exports.verifyAccount = (req, res) => {
  const uniqueId = req.params.uniqueId;

  User.findById(uniqueId)
    .then((result) => {
      if (result) {
        result.verified = true;

        User
        .updateOne({ email: result.email, role: result.role }, result)
        .then(
          (result) => {

            /*
            res.status(500).json({
              message: "User is now verified!",
            });
            */
            res.sendFile(path.join(__dirname, "..", "views", "verification-confirmation", "verification-confirmation.html"));
          }
        );
      } else {
        throw new Error("User cannot be verified!?");
      }
    })

    .catch((err) => {
      res.status(401).json({
        errorCode: 6,
        message: "User not found",
      });
    });
};

exports.getUsers = (req, res) => {
  User.find()
    .then((documents) => {
      res.status(200).json({
        message: "all users fetched successfully",
        users: documents,
      });
    })

    .catch((e) => {
      console.log("Error at get users in controllers users.js");
      res.status(404).json({
        error: e,
        message: "Error at get users in controllers users.js",
      });
    });
};


exports.banUser = (req, res, next) => {

  //console.log("At ban user in users.js controllers. received req body is: ")
  //console.log(req.body)

  let fetchedUser;

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      throw new Error("No user found to ban");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      name: fetchedUser.name,
      email: fetchedUser.email,
      password: fetchedUser.password,
      admin: fetchedUser.admin,
      beneficiaries: fetchedUser.beneficiaries,
      verified: fetchedUser.verified,
      ban: true,
    });

    User.updateOne(
      {email: req.body.email},
      newUser
    ).then((result) => {
      res.status(200).json("User Banned!");
    });
  });
};

exports.unbanUser = (req, res, next) => {
  let fetchedUser;

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      throw new Error("No user found to unban. @ controllers js line 391");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      name: fetchedUser.name,
      email: fetchedUser.email,
      password: fetchedUser.password,
      admin: fetchedUser.admin,
      beneficiaries: fetchedUser.beneficiaries,
      verified: fetchedUser.verified,
      ban: false,
    });

    User.updateOne(
      {email: req.body.email},
      newUser
    ).then((result) => {
      res.status(200).json("User unbanned!");
    });
  });
};

exports.makeAdmin = (req, res, next) => {
  let fetchedUser;

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      throw new Error("No user found to make admin. @ controllers users.js line 423");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      name: fetchedUser.name,
      email: fetchedUser.email,
      password: fetchedUser.password,
      admin: true,
      beneficiaries: fetchedUser.beneficiaries,
      verified: fetchedUser.verified,
      ban: fetchedUser.ban,
    });

    User.updateOne(
      {email: req.body.email},
      newUser
    ).then((result) => {
      res.status(200).json("User made Admin!");
    });
  });
};

exports.removeAdmin = (req, res, next) => {
  let fetchedUser;

  User.findOne({
    //_id: req.body.id,
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      throw new Error("No user found remove admin persmissions from. @ controllers users js line 455");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      name: fetchedUser.name,
      email: fetchedUser.email,
      password: fetchedUser.password,
      admin: false,
      beneficiaries: fetchedUser.beneficiaries,
      verified: fetchedUser.verified,
      ban: fetchedUser.ban,
    });

    User.updateOne(
      {email: req.body.email},
      newUser
    ).then((result) => {
      res.status(200).json("User Removed of admin privileges!");
    });
  });
};





























/*
 * Emails with html templating
*/
//For production, should use Sendgrid / MailGun [if we have the money]
const sendVerificationEmail = (email, uniqueString) => {
  var mailOptions;
  let sender = "CCSGP Email Verification";
  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "verification",
    "verification.html"
  );
  //console.log(templatePath);
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();
  const template = handlebars.compile(templateSource);
  const replacements = {
    uniqueString: uniqueString,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: "d3f1NiTeLy_NEWp@5sw0Rdee",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Email Confirmation",
    //html: `Press <a href=https://ccsgp-app.herokuapp.com/api/user/verify/${uniqueString}> here </a> to verify your email. Thank you!`
    // https://ccsgp-app.herokuapp.com/ or http://localhost:3000/
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
      {
        filename: "Facebook.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Facebook.png"
        ),
        cid: "FacebookLogo",
      },
      {
        filename: "Instagram.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Instagram.png"
        ),
        cid: "InstagramLogo",
      },
      {
        filename: "NUS.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "NUS.png"
        ),
        cid: "NUSLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Could not send confirmation email! (line 270, controllers users.js) Error log is as shown below: ");
      console.log(error);
      throw new Error("Could not send confirmation email!");
    } else {
      console.log("Confirmation message sent!");
    }
  });
};

const sendForgetPasswordEmail = (email, tempPassword) => {
  var mailOptions;
  let sender = "CCSGP Email Verification";

  let templatePath = path.join(
    __dirname,
    "..",
    "views",
    "forget-password",
    "forget-password.html"
  );
  const templateSource = fs.readFileSync(templatePath, "utf-8").toString();

  const template = handlebars.compile(templateSource);
  const replacements = {
    tempPassword: tempPassword,
  };
  const htmlToSend = template(replacements);

  var Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: "d3f1NiTeLy_NEWp@5sw0Rdee" //process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Reset Password",
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
      {
        filename: "Facebook.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Facebook.png"
        ),
        cid: "FacebookLogo",
      },
      {
        filename: "Instagram.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "Instagram.png"
        ),
        cid: "InstagramLogo",
      },
      {
        filename: "NUS.png",
        path: path.join(
          __dirname,
          "..",
          "..",
          "src",
          "assets",
          "NUS.png"
        ),
        cid: "NUSLogo",
      },
    ],
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Could not send Reset Password email! (line 332, controllers users.js) Error is as shown below: ");
      console.log(error);
      throw new Error("Could not send Reset Password email!");
    } else {
      console.log("Reset Password email sent!");
    }
  });
};

const randomStringGenerator = () => {
  let length = 16;
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
