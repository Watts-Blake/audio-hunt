// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { postValidators } = require('./utils/validations');
const { asyncHandler, getTimeElapsed, getPostTimeElapsed } = require('./utils/utils');
const { Router } = require("express");
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// GET /posts/:id
router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const post = await db.Post.findByPk(id, {
      include: [db.Song, db.User, {
        model: db.Comment,
        include: db.User,
      }],
    });

    if (post) {
      const timeElapsed = getPostTimeElapsed(post);
      getTimeElapsed(post);
      console.log(post.Comments);

      const loggedInUser = {
        profImg: res.locals.user.profileImg,
        postId: res.locals.user.id,
      }
      res.render('song-post', {
        post,
        loggedInUser,
        timeElapsed,
      });
    } else {
      const error = new Error("We could not find this post!");
      error.status = 404;
      next(error);
    }
  })
);


// GET posts/new *** NEW POST FORM/PAGE
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
      post: {}, songs, title: 'Create a new post',
      csrfToken: req.csrfToken(), loggedInUser,
    });
  })
);

// POST /posts *** CREATE NEW POST
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

// GET /posts/:id/edit *** SONG POST EDIT PAGE
router.get(
  '/:id(\\d+)/edit',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const post = await db.Post.findByPk(id);

    if (req.session.auth.userId !== post.userId) {
      const error = new Error('Sneaky sneaky :)))) This is not your post silly boy :))))')
      error.status = 403;
      return next(error);
    }

    if (post) {
      const loggedInUser = {
        profImg: res.locals.user.profileImg,
        userId: res.locals.user.id,
      }
      res.render(`song-post-edit`, {
        title: `EDIT POST: ${post.title}`,
        post,
        csrfToken: req.csrfToken(),
        loggedInUser,
      });
    } else {
      const error = new Error("We could not find this user!");
      error.status = 404;
      next(error);
    }

  })
)

router.post(
  '/:id(\\d+)/edit',
  requireAuth, // !!! CHECK HERE FOR ERRORS !!!
  postValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, shortDescription, content } = req.body;
    const id = req.params.id * 1;

    const post = await db.Post.findByPk(id);

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      await post.update({ title, shortDescription, content });
      req.session.save(() => res.redirect(`/posts/${id}`));
      return;
    } else {
      const errors = validationErrors.array().map((e) => e.msg);
      res.render(`song-post-edit`, {
        errors, post, csrfToken: req.csrfToken(),
      });
    }
  })
)


module.exports = router;
