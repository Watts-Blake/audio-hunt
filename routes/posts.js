// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { postValidators } = require('./utils/validations');
const { asyncHandler, getTimeElapsed, getPostTimeElapsed } = require('./utils/utils');
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);
const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// GET /posts/:id
router.get(
  '/:id(\\d)',
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const post = await db.Post.findByPk(id, {
      include: [ db.Song, db.User, db.Comment ],
    });

    if (post) {
      const timeElapsed = getPostTimeElapsed(post);

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

    const songs = await db.Song.findAll({ order: db.Song.songName});

    res.render('new-post', {
      post: {}, songs, title: 'Create a new post',
      csrfToken: req.csrfToken(), loggedInUser,
    });
  })
);

// POST /posts
router.post('/new',
  postValidators,
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



module.exports = router;
