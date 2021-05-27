const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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
        sendEmail(email, result._id);

        res.status(201).json({
          message: "Account Registered! Please check your email for activation link.",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
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
        sendEmail(email, result._id);

        res.status(201).json({
          message: "Account Registered! Please check your email for activation link.",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "You probably signed up before using this email before...",
          error: err,
        });
      });
  });
};

exports.login = (req, res, next) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  })

    .then((user) => {

      if (!user) {
        console.log("No user");
        throw new Error("Authentication Failed. User does not exist in database.");
      }

      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password) //&& user.verified; //NEED TO MODIFY THIS LATER
    })

    .then((result) => {

      if (!result) {
        console.log("GO AND ACTIVATE YOUR ACCOUNT!");
        throw new Error("Authentication Failed! Go and activate your account first!");
      }

      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          role: fetchedUser.role,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );

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
    })

    .catch((err) => {
      return res.status(401).json({
        message: err,
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
    });
    User.updateOne(
      { email: req.body.email, role: req.body.role },
      newUser
    ).then((result) => {
      res.status(200).json("User beneficiaries updated!");
    });
  });
};









const url = "http://localhost:3000/"; //https://ccsgp-app.herokuapp.com/
const sendEmail = (email, uniqueString) => {
  var Transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      pass: "ccsgp_confirmationEmailSender123",
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
    html: `Press <a href=${url}api/user/verify/${uniqueString}> here </a> to verify your email. Thank you!`
  };

  Transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      //throw new Error("Could not send confirmation email!");
    } else {
      console.log("Confirmation message sent!");
    }
  });
}

exports.sendVerificationMail = (req, res) => {

  const uniqueId  = req.params.uniqueId;

  User.findById(uniqueId)
    .then(result => {
      result.verified = true;
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
        message: "User not found",
      });
    });
};
