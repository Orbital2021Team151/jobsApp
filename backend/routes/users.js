const express = require("express");
const UserController = require("../controllers/users");

const router = express.Router();

//TODO: Might need to change this here to our heroku app's url

router.get("/verify/:uniqueId", UserController.sendMail); //Need to return some HTML here to inform user their acc has been set up


router.post("/signupAdmin", UserController.signupAdmin);

router.post("/signup", UserController.signupGeneral);

router.post("/login", UserController.login);

router.put("/updateBeneficiaries", UserController.updateBeneficiaries);

router.put("/updatePassword", UserController.updatePassword);

router.put("/forgetPassword", UserController.forgetPassword);

module.exports = router;
