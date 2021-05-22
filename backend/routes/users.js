const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((passwordHash) => {
    //TODO: might have to hash role here too.

    const user = new User({
      email: req.body.email,
      password: passwordHash,
      role: req.body.role,
      orgName: req.body.orgName,
      uen: req.body.uen,
      beneficiaries: req.body.beneficiaries,
    });

    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User created!",
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
      return bcrypt.compare(req.body.password, user.password); // , user.role);
    })

    .then((result) => {
      if (!result) {
        throw new Error("Authentication Failed 1");
      }

      const token = jwt.sign(
        {
          email: fetchedUser.email,
          userId: fetchedUser._id,
          role: fetchedUser.role,
        },
        "secret_token_that_no_one_will_find_out_about",
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
    User.updateOne({ email: req.body.email, role: req.body.role }, newUser).then((result) => {
      res.status(200).json("User beneficiaries updated!");
    });
  });

});

module.exports = router;
