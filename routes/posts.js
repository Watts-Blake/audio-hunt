// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");
const Sequelize = require('sequelize')

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { postValidators, songValidator } = require('./utils/validations');
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
        order: [[{ model: db.Comment }, "createdAt", "DESC"]],
        model: db.Comment,
        include: db.User,
      }],
    });

    // ??? HOW TO ORDER COMMENTS BY createdAt ???

    // const comments = await db.Comment.findAll({
    //   order: [["createdAt", "DESC"]],
    //   where: { postId: id },
    //   include: [db.User, {
    //     model: db.Post,
    //     include: db.Song,
    //   }]
    // });

    // console.log(comments.Post);

    let isAuthorized = true;
    if (!req?.session?.auth?.userId || req.session.auth.userId !== post.userId ) {
      isAuthorized = false;
    }

    if (post) {
      const timeElapsed = getPostTimeElapsed(post);
      getTimeElapsed(post);

      const loggedInUser = {
        profImg: res?.locals?.user?.profileImg,
        userId: res?.locals?.user?.id,
      }
      res.render('song-post', {
        post,
        loggedInUser,
        timeElapsed,
        isAuthorized,
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

    const songs = await db.Song.findAll({
      order: [
        [
          Sequelize.fn('lower', Sequelize.col('songName')),
          'ASC',
        ],
      ],
    });


    res.render('new-post', {
      post: {}, songs, title: 'Create a new post',
      csrfToken: req.csrfToken(), loggedInUser,
    });
  })
);

// POST /posts *** CREATE NEW POST
router.post('/new',
  postValidators,
  songValidator,
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, shortDescription, content, songDetail } = req.body;

    const songName = songDetail.split(' by ')[0];
    const artistName = songDetail.split(' by ')[1];

    const song = await db.Song.findOne({
      where: {
        songName,
        artistName
      }
    })

    const post = db.Post.build({
      title, shortDescription, content, songId: song.id, userId: req.session.auth.userId
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
