// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");
const sequelize = require("sequelize");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, requireAuthAPI, logoutUser } = require("../auth");
const db = require("../db/models");
const { editProfileValidators, commentValidators } = require("./utils/validations");
const {
  asyncHandler,
  getTimeElapsed,
  getJoinedDate,
  getPostTimeElapsed,
} = require("./utils/utils");
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);

const csrfProtection = csrf({ cookie: true });

// ROUTES *****************************************************************
// PUT api/users/:id *** EDIT USER ACCOUNT
router.put(
  "/users/:id(\\d+)",
  requireAuth,
  csrfProtection,
  editProfileValidators,
  asyncHandler(async (req, res, next) => {
    const { username, header, email, bio, profileImg } = req.body;
    const userId = req.params.id * 1;

    const user = await db.User.findByPk(userId);

    if (req.session.auth.userId !== user?.id) {
      const err = new Error("You are not authorized to delete this user.");
      err.status = 403;
      return next(err);
    }

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      await user.update({ username, header, email, bio, profileImg });
      return res.json("Update successful.");
    } else {
      const errors = validationErrors.array().map((e) => e.msg);
      res.status(400).json(errors)
    }
  })
);
// DELETE api/users/:id *** DELETE USER ACCOUNT
router.delete(
  "/users/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id * 1;

    const user = await db.User.findByPk(userId);

    if (req.session.auth.userId !== user?.id) {
      const err = new Error("You are not authorized to delete this user.");
      err.status = 403;
      return next(err);
    }

    if (user) {
      user.activeState = false;
      await user.save();
      logoutUser(req, res);
      return res.json("success");
    } else {
      const err = new Error("User to delete was not found.");
      err.status = 404;
      next(err);
    }
  })
);

// DELETE api/posts/:id *** DELETE A POST
router.delete(
  '/posts/:id(\\d+)',
  requireAuthAPI,
  asyncHandler(async (req, res, next) => {
    const id = req.params.id * 1;

    const post = await db.Post.findByPk(id);
    if (req.session.auth.userId !== post?.userId) {
      const err = new Error("You are not authorized to delete this post.");
      err.status = 403;
      return next(err);
    }

    if (post) {
      await post.destroy();
      return res.json({userId: post.userId});
    } else {
      const err = new Error("Post to delete was not found");
      error.status = 404;
      next(err);
    }
  })
)


// POST api/comments *** POST A COMMENT
router.post(
  '/comments',
  requireAuthAPI,
  commentValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { content, postId } = req.body;

    const comment = db.Comment.build({ content, userId: req.session.auth.userId, postId });

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await comment.save();
      getPostTimeElapsed(comment);
      comment.dataValues.userId = res.locals.user.id;
      comment.dataValues.username = res.locals.user.username;
      comment.dataValues.profileImg = res.locals.user.profileImg;
      return res.json(comment);
    } else {
      const errors = validatorErrors.array().map(e => e.msg);
      res.status(400).json(errors)
    }
  })
)

// PUT api/comments/:id *** EDIT A COMMENT
router.put(
  '/comments/:id(\\d+)',
  requireAuthAPI,
  // csrfProtection,
  commentValidators,
  asyncHandler(async (req, res, next) => {
    const id = req.params.id * 1;
    const { content } = req.body;

    const comment = await db.Comment.findByPk(id);

    if (req.session.auth.userId !== comment.userId) {
      const err = new Error("You are not authorized to edit this comment!");
      err.status = 403;
      return next(err);
    }

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
      await comment.update({ content });
      return res.status(201).json("Update successful.");
    } else {
      const errors = validationErrors.array().map((e) => e.msg);
      res.status(400).json(errors);
    }
  })
);

// DELETE api/comments/:id *** DELETE A COMMENT
router.delete(
  '/comments/:id(\\d+)',
  requireAuthAPI,
  asyncHandler(async (req, res, next) => {
    const id = req.params.id * 1;

    const comment = await db.Comment.findByPk(id);

    if (req.session.auth.userId !== comment.userId) {
      const err = new Error("You are not authorized to delete this comment.");
      err.status = 403;
      return next(err);
    }

    if (comment) {
      await comment.destroy();
      res.status(204).json();
    } else {
      const err = new Error("The comment you wanted to delete was not found.");
      error.status = 404;
      next(err);
    }
  })

)


// GET api/search/:postTitle  Search Function
router.get('/search/:songName',
  asyncHandler(
 async (req, res) => {
  const songName = req.params.songName;
  const posts = await db.Post.findAll({
    include: {
      model: db.Song,
      where: {
        songName: {
          // get results based on searching words (case insensitive)
          [sequelize.Op.iLike] :`\%${songName}\%`
        }
      }
    }
  });


  if (posts) {
    //WIP:  need to display the result...
    return res.status(200).json(posts)

  } else {
    const err = new Error("The posts you are looking for are not found.");
    error.status = 404;
    next(err);
  }

  

}))


module.exports = router;
