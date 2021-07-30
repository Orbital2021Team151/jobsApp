const express = require("express");
const UserController = require("../controllers/users");

const router = express.Router();

router.get("/verify/:uniqueId", UserController.verifyAccount); //Need to return some HTML here to inform user their acc has been set up

router.get("/getUsers", UserController.getUsers);

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);

router.put("/updateBeneficiaries", UserController.updateBeneficiaries);

router.put("/updatePassword", UserController.updatePassword);

router.put("/forgetPassword", UserController.forgetPassword);

router.put("/banUser", UserController.banUser);

router.put("/unbanUser", UserController.unbanUser);

router.put("/makeAdmin", UserController.makeAdmin);

router.put("/removeAdmin", UserController.removeAdmin);

module.exports = router;
