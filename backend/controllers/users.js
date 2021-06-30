const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const User = require("../models/user");

exports.signupGeneral = (req, res, next) => {
  //TODO: Need to change this wholesale when ready for production.
  let backendRole = "";
  if (req.body.role === "Student / NUS Alumni") {
    backendRole = "Student";
  } else {
    backendRole = req.body.role;
  }

  bcrypt.hash(req.body.password, 10).then((passwordHash) => {
    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: backendRole, //TODO: KIV to change at production w/o all these confusing names
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
      verified: false,
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

exports.signupAdmin = (req, res, next) => {
  //TODO: Need to change this wholesale when ready for production.
  let backendRole = "";
  if (req.body.role === "Student / NUS Alumni") {
    backendRole = "Student";
  } else {
    backendRole = req.body.role;
  }

  bcrypt.hash(req.body.password, 10).then((passwordHash) => {
    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: backendRole, //todo: kiv to change
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
      verified: false,
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
          errorCode: 5,
          message: "You probably signed up before using this email before...",
          result: err,
        });
      });
  });
};

exports.login = (req, res, next) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email
  })
    .then((userFound) => {
      if (userFound === null) {
        throw new Error("No such user");
      }

      fetchedUser = userFound;
      //console.log("Inside MongoDB now. Fetched user is: ");
      //console.log(userFound);

      return bcrypt
        .compare(req.body.password, userFound.password)
        .then((result) => {
          if (!result) {
            throw new Error("Wrong Password!");
          }
          return fetchedUser.verified;
        })

        .then((verified) => {
          if (!verified) {
            throw new Error("User not verified!");
          } else {

            const token = jwt.sign(
              {
                email: fetchedUser.email,
                userId: fetchedUser._id,
                role: fetchedUser.role,
              },

              process.env.JWT_KEY,
              { expiresIn: "0.0025h" }
            );

            res.status(200).json({
              token: token,
              expiresIn: 9,
              id: fetchedUser._id,
              email: fetchedUser.email,
              password: fetchedUser.password,
              role: fetchedUser.role,
              orgName: fetchedUser.orgName,
              uen: fetchedUser.uen,
              beneficiaries: fetchedUser.beneficiaries,
            });
            return true;
          }
        })
        .catch((err) => {
          //console.log(err);

          if (err.message === "User not verified!") {
            //console.log("User not verified! err.message printed.");
            //sendVerificationEmail(fetchedUser.email, fetchedUser._id);    //For my own testing.
            res.status(401).json({
              errorCode: 11,
              message: "User is not verified!",
            });
          }

          if (err.message === "Wrong Password!") {
            //console.log("Wrong Password! err.message printed.");
            res.status(401).json({
              errorCode: 2,
              message: "Wrong Password",
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

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  }).then((user) => {
    if (!user) {
      throw new Error("Update Failed. But this should not happen tbf");
    }
    fetchedUser = user;

    const newUser = new User({
      _id: fetchedUser.id,
      email: fetchedUser.email,
      password: fetchedUser.password,
      role: fetchedUser.role,
      orgName: fetchedUser.orgName,
      uen: fetchedUser.uen,
      beneficiaries: req.body.beneficiaries, //only difference
      verified: true,
    });

    User.updateOne(
      { email: req.body.email, role: req.body.role },
      newUser
    ).then((result) => {
      res.status(200).json("User beneficiaries updated!");
    });
  });
};

exports.updatePassword = (req, res, next) => {
  let fetchedUser;
  //console.log("Update password's controller users.js part. The req body object is: ");
  //console.log(req.body);

  User.findOne({
    email: req.body.email,
    role: req.body.role,
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
          email: fetchedUser.email,
          password: passwordHash,
          role: fetchedUser.role,
          orgName: fetchedUser.orgName,
          uen: fetchedUser.uen,
          beneficiaries: req.body.beneficiaries,
          verified: true,
        });

        User.updateMany(
          { _id: fetchedUser.id, email: req.body.email, role: req.body.role },
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
          email: fetchedUser.email,
          password: passwordHash,
          role: fetchedUser.role,
          orgName: fetchedUser.orgName,
          uen: fetchedUser.uen,
          beneficiaries: req.body.beneficiaries,
          verified: true,
        });

        User.updateOne({ email: req.body.email, role: fetchedUser.role}, newUser)
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
      pass: process.env.EMAIL_PASSWORD,
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
      pass: process.env.EMAIL_PASSWORD
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
