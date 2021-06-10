const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const user = require("../models/user");
const User = require("../models/user");


exports.signupGeneral = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((passwordHash) => {

    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
      verified: false,
    });

    user.save()
      .then((result) => {

        const email = user.email;
        sendVerificationEmail(email, result._id);

        res.status(201).json({
          message: "Account Registered! Please check your email for activation link.",
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

  bcrypt.hash(req.body.password, 10).then((passwordHash) => {

    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
      verified: false,
    });

    user.save()
      .then((result) => {

        const email = user.email;
        sendVerificationEmail(email, result._id);

        res.status(201).json({
          message: "Account Registered! Please check your email for activation link.",
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

  User.findOne({email: req.body.email, role: req.body.role}).then(userFound => {

    if (userFound === null) {
      throw new Error ("No such user");
    }
    fetchedUser = userFound;

    return bcrypt.compare(req.body.password, userFound.password).then(result => {
      if (!result) {
        throw new Error("Wrong Password!");
      } else {
        const token = jwt.sign(
          {
            email: fetchedUser.email,
            userId: fetchedUser._id,
            role: fetchedUser.role,
          },
          process.env.JWT_KEY,
          { expiresIn: "1h" }
        );

        //TODO: This logic here is probably the cause behind the weird layout if our token expires etc. Need to redo this logic if it causes more issues.
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          id: fetchedUser._id,
          email: fetchedUser.email,
          password: fetchedUser.password,
          role: fetchedUser.role,
          orgName: fetchedUser.orgName,
          uen: fetchedUser.uen,
          beneficiaries: fetchedUser.beneficiaries,
        });
        return true && fetchedUser.verified;
      }

    })
    .catch(err => {
      res.status(401).json({
        errorCode: 2,
        message: "Wrong Password"
      });
    })
  })

  .catch(err => {
    res.status(404).json({
      errorCode: 3,
      message: "Unable to login",
      err: err})
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

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  })

    .then((user) => {

      if (!user) {
        console.log("No user to update password. at controllers users.js line 179");
        throw new Error("Authentication Failed. User does not exist in database.");
      }

      fetchedUser = user;

      return bcrypt.compare(req.body.currentPassword, user.password);
    })

    .then(result => {

      if (!result) {
        console.log("Wrong current password! Cannot change password until you give the correct password");
        throw new Error("Wrong current password!");
      }


      bcrypt.hash(req.body.newPassword, 10).then(passwordHash => {

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

    .catch(error => {
      return res.status(412).json({
        errorCode: 4,
        message: "Current password provided was wrong or for some reason, could not update password :/",
        error: error,
      });
    });
};















const sendVerificationEmail = (email, uniqueString) => {

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
  let sender = "CCSGP Email Verification";

  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Email Confirmation",
    html: `Press <a href=https://ccsgp-app.herokuapp.com/api/user/verify/${uniqueString}> here </a> to verify your email. Thank you!`
    // https://ccsgp-app.herokuapp.com/ or http://localhost:3000/
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
}

exports.sendMail = (req, res) => {

  const uniqueId  = req.params.uniqueId;

  User.findById(uniqueId)
    .then(result => {
      if (result) {
        result.verified = true;
        User.updateOne({email: result.email, role: result.role}, result).then(result => {
          res.status(500).json({
            message: "User is now verified!",
          });
        });
      } else {
        throw new Error("User cannot be verified!?");
      }
    })
    .catch(err => {
      res.status(401).json({
        errorCode: 6,
        message: "User not found",
      });
    });
};



const sendForgetPasswordEmail = (email, tempPassword) => {
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
  let sender = "CCSGP Reset Password";
  mailOptions = {
    from: sender,
    to: email,
    subject: "CCSGP Reset Password",
    html: `We have reset your password to be your email. Your temporary password is: <b>${tempPassword}</b>. Please login and change it under your dashboard section. Thank you!`
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("Could not send Reset Password email! (line 332, controllers users.js) Error is as shwon below: ");
      console.log(error);
      throw new Error("Could not send Reset Password email!");
    } else {
      console.log("Reset Password email sent!");
    }
  });
}


const randomStringGenerator = () => {
  let length = 16;
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (var i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};


exports.forgetPassword = (req, res) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  })
  .then((user) => {
    if (!user) {
      console.log("No user found to send forget password email to (line 362, controllers users.js).");
      throw new Error("Authentication Failed. User does not exist in database.");
    }

    fetchedUser = user;
    tempPassword = randomStringGenerator();

    bcrypt.hash(tempPassword, 10).then(passwordHash => {

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

      User.updateOne({ email: req.body.email, role: req.body.role }, newUser)
      .then((result) => {
        sendForgetPasswordEmail(req.body.email, tempPassword);
        res.status(200).json("User password reset!");
      })
    });
  })

  .catch(error => {
    return res.status(412).json({
      errorCode: 1,
      message: "Current email provided was wrong or user with that role does not exist in database.",
      error: error,
    });
  });
};

