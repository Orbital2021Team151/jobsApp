const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const nev = require('email-verification')(mongoose);


const User = require("../models/user");

const router = express.Router();

nev.configure({
  //verificationURL: 'http://myawesomewebsite.com/email-verification/${URL}',
  verificationURL: 'http://localhost:3000/api/user/verify/${uniqueString}',
  persistentUserModel: User,
  tempUserCollection: 'myawesomewebsite_tempusers',

  transportOptions: {
      service: 'Gmail',
      auth: {
          user: 'myawesomeemail@gmail.com',
          pass: 'mysupersecretpassword'
      }
  },
  verifyMailOptions: {
      from: 'Do Not Reply <myawesomeemail_do_not_reply@gmail.com>',
      subject: 'Please confirm account',
      html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
      text: 'Please confirm your account by clicking the following link: ${URL}'
  }
}, function(error, options){
});


/*
const randString = () => {
  const len = 32;
  let randStr = '';
  for (let i=0; i<len; i++) {
    const char = Math.floor((Math.random()*10) +1);
    randStr += char;
  }
  return randStr;
}

const sendEmail = (email, uniqueString) => {
  var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "CCSGP.NUS.CONFIRMATION@gmail.com",
      passowrd: "ccsgp_confirmationEmailSender123",
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
    subject: "Email Confirmation",
    html: `Press <a href=http://localhost:3000/api/user/verify/${uniqueString}> here </a> to verify your email. Thank you!`
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


router.get("/verify/:uniqueString", async (req, res) => {
  const { uniqueString } = req.params;
  const user = await User.findOne({uniqueString: uniqueString});
  if (user) {
    user.verified = true;
    await user.save();
    res.status(500).json({
      message: "User is now verified!",
    });
  } else {
    res.status(401).json({
      message: "User not found",
    });
  }
});
*/



router.post("/signup", (req, res, next) => {


  bcrypt.hash(req.body.password, 10).then((passwordHash) => {
    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
    });

    user.save()
      .then((result) => {

        //const uniqueString = randString();
        //const {email} = req.body.email;
        //sendEmail(email, uniqueString);

        //console.log("User has been created!");
        res.status(201).json({
          message: "Account Registered! Please check your email for activation link.",
          result: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "You probably signed up before using this email before...",
          error: err,
        });
      });

  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  })

    .then((user) => {
      if (!user) {
        throw new Error("Authentication Failed 1");
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password) && !user.verified; //NEED TO MODIFY THIS LATER
    })

    .then((result) => {
      if (!result) {
        throw new Error("Authentication Failed 1");
      }

      if (!result.verified) {
        throw new Error("Verify your account first!");
      }

      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          role: fetchedUser.role,
        },
        "secret_token_that_no_one_will_find_out_about",
        { expiresIn: "24h" }
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
        message: "Authentication failed",
      });
    });
});

router.put("/update", (req, res, next) => {
  let fetchedUser;

  User.findOne({
    email: req.body.email,
    role: req.body.role,
  }).then((user) => {
    if (!user) {
      throw new Error("Update Failed. But this should not happen tbf");
    }
    console.log("This fires");
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
});

module.exports = router;
