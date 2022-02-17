// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { signupValidators, loginValidators } = require("./utils/user-validator");
const {
  asyncHandler,
  getTimeElapsed,
  getJoinedDate,
} = require("./utils/utils");
const app = require("../app");
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
// router.use((req, res, next) => {
//   console.log(res.locals.user.id);
//   next();
// });
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// PUT /users/:id
router.use((req, res, next) => {
  console.log('id',res.locals.user.id);
  next();
});
router.put(
  "/users/:id(\\d+)",
  requireAuth,
  // csrfProtection,
  signupValidators,
  asyncHandler(async (req, res, next) => {
    console.log("fuck yo bishhhhhhh");
    const { username, header, email, bio, profileImg } = req.body;
    const userId = req.params.id * 1;
    console.log('before user await user')

    const user = await db.User.findByPk(userId);
    console.log('after user await')
    if (req.session.auth.userId !== user.id) {
      console.log('after if req.session')
      const err = new Error("You are not authorized to delete this user.");
      err.status = 403;
      return next(err);
    }

    console.log('before declaration of vaildation errors')
    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      console.log('inside validation errors empty')
      await user.update({ username, header, email, bio, profileImg });
      return res.json("Update successful.");
    } else {
      // are we going to have auth trouble here??
      const errors = validationErrors.array().map((e) => e.msg);
      console.log('if validations are not empty')
      res.status(400).json(errors)
      // res.render("profile-edit", {
      //   title: "Edit Your Profile",
      //   user,
      //   errors,
      //   csrfToken: req.csrfToken(),
      // });
    }
  })
);
router.use((req, res, next) => {
  console.log("makes it before");
  next();
});
// DELETE /users/:id
router.delete(
  "/users/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id * 1;
    console.log("pleease for the love of god");

    const user = await db.User.findByPk(userId);

    if (req.session.auth.userId !== user.id) {
      const err = new Error("You are not authorized to delete this user.");
      err.status = 403;
      return next(err);
    }

    if (user) {
      console.log("from the IFFFFFFFFFFFFFF");
      user.activeState = false;
      await user.save();
      logoutUser(req, res);
      return res.json("success");
    } else {
      console.log("from the elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      const err = new Error("User to delete was not found.");
      err.status = 404;
      next(err);
    }
  })
);

module.exports = router;
