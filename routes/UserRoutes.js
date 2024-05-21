const express = require("express");
const router = express.Router();
const userControl = require("../controller/userControl")

router.get('/landingPage',userControl.renderLandingPage)
router.get('/login',userControl.renderLogin)
router.get("/signup",userControl.renderSignup)
router.post("/signupForm",userControl.SignupData)

module.exports = router;