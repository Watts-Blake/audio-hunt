// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { signupValidators, loginValidators } = require('./utils/user-validator');
const { asyncHandler, getTimeElapsed, getJoinedDate } = require('./utils/utils');
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// GET posts/:id
router.get(
  '/:id(\\d+)',
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const postId = req.params.id * 1;

    const post = await db.Post.findByPk(postId, {
      include: [db.Comment, db.User, db.Song]
    });

    if (post) {
      res.render('post', { post, csrfToken: req.csrfToken() });
    } else {
      const error = new Error("We could not find the post you were looking for! Sorry!");
      error.status = 404;
      next(error);
    }
  }
));




module.exports = router;
