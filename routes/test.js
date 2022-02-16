var express = require("express");
const bcrypt = require("bcryptjs");
const csrf = require("csurf");
// const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { signupValidators, loginValidators } = require("./utils/user-validator");
const { asyncHandler, getTimeElapsed } = require("./utils/utils");
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

router.route("/:id(\\d+)/edit").get(
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const user = await db.User.findByPk(id);

    if (user) {
      res.render(`profile-edit`, {
        user,
      });
    } else {
      const error = new Error("We could not find this user!");
      error.status = 404;
      next(error);
    }
  })
);

router.route("/:id(\\d+)/edit/image").get(
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const user = await db.User.findByPk(id);

    if (user) {
      res.render(`profile-image-edit`, {
        user,
      });
    } else {
      const error = new Error("We could not find this user!");
      error.status = 404;
      next(error);
    }
  })
);

module.exports = router;
