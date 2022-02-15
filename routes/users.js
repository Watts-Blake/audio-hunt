// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
// const asyncHandler = require("express-async-handler");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);

// ROUTES *****************************************************************
// GET /users *************************************************************
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// GET /users/login
router.get("/login", (req, res) => {
  res.render("login");
});
// POST /users/login
router.post(
  "/login",
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

    return res.render("login", { email });
  })
);
// POST /users/logout
router.post("/logout", (req, res) => {
  logoutUser(req, res);

  return res.redirect("/");
});
// GET /users/signup
router.get("/signup", (req, res) => {
  return res.render("signup", { user: {} });
});
// POST /users/signup
router.post(
  "/signup",
  asyncHandler(async (req, res, next) => {
    const { username, email, bio, password, confirmPassword } = req.body;
    // TODO: implement express-validator

    const user = db.User.build({ username, email, bio });

    if (password !== confirmPassword) {
      res.render("signup", user);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user.hashedPassword = hashedPassword;
    await user.save();

    loginUser(req, res, user);
    return res.redirect("/");
  })
);

module.exports = router;
