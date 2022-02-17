// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { postValidators } = require('./utils/validations');
const { asyncHandler, getTimeElapsed, getJoinedDate } = require('./utils/utils');
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// GET posts/:id
// !!! PLEASE TEST THIS ROUTE !!!
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

// GET posts/new
// !!! PLEASE TEST THIS ROUTE !!!
router.get(
  '/new',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const loggedInUser = {
      profImg: res.locals.user.profileImg,
      userId: res.locals.user.id,
    }

    const songs = await db.Song.findAll();

    res.render('new-post', {
      songs, title: 'Create a new post', csrfToken: req.csrfToken(), loggedInUser
    });
  })
);

// POST /posts
router.post('/new',
  postValidators,
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, shortDescription, content, songId } = req.body;

    const post = db.Post.build({
      title, shortDescription, content, songId, userId: req.session.auth.userId
    });

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await post.save();
      req.session.save(()=> res.redirect(`/posts/${post.id}`));
      return
    } else {
      const errors = validatorErrors.array().map((err) => err.msg);
      const songs = await db.Song.findAll();
      res.render("new-post", {
        songs,
        post,
        title: "Create a new post",
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

// GET /posts/:id



module.exports = router;
