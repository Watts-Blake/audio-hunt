// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
const csrf = require('csurf'); 
// const asyncHandler = require("express-async-handler");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { userValidators } = require('./utils/user-validator');
const { asyncHandler } = require('./utils/utils');
const { validationResult } = require("express-validator");
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// GET /users *************************************************************
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
// GET /users/login
router.get("/login", csrfProtection, (req, res) => {
  res.render("login", {
    title: 'Log in',
    csrfToken: req.csrfToken()
  });
});
// POST /users/login
router.post(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await db.User.findOne({ where: { email } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(
        password,
        user.hashedPassword.toString()
      );

      if (passwordMatch) {
        loginUser(req, res, user);

        return res.redirect("/");
      }
    }

    return res.render("login", { 
      email,
      title: 'Log in',
      csrfToken: req.csrfToken()
    });
  })
);
// POST /users/logout
router.post("/logout", (req, res) => {
  logoutUser(req, res);

  return res.redirect("/");
});
// GET /users/signup
router.get("/signup",
  csrfProtection,
  (req, res) => {
  return res.render("signup", { 
    user: {},
    title: 'Sing up',
    csrfToken: req.csrfToken()
  });
});
// POST /users/signup
router.post(
  "/signup",
  userValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { username, email, bio, password } = req.body;
    // TODO: implement express-validator

    const validatorErrors = validationResult(req);
    // console.log("************************", validatorErrors);
    const user = db.User.build({ username, email, bio });

    if(validatorErrors.isEmpty()) {
  
      const hashedPassword = await bcrypt.hash(password, 12);
      user.hashedPassword = hashedPassword;
      await user.save();

      loginUser(req, res, user);
      return res.redirect("/");

    } else {
			const errors = validatorErrors.array().map((err) => err.msg)
      res.render("signup", {
        user,
        title: 'Sign up',
        errors,
        csrfToken: req.csrfToken(),
      });
    }



  })
);

module.exports = router;
