// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

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
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const id = req.params.id * 1;

    const post = await db.Post.findByPk(id);
    if (req.session.auth.userId !== post?.userId) {
      const err = new Error("You are not authorized to delete this post.");
      err.status = 403;
      return next(err);
    }

    if (post) {
      await post.destroy(); // CAN'T DESTROY THIS BECAUSE
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
router.delete(
  '/comments/:id',

)



module.exports = router;
