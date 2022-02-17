// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const csrf = require("csurf");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { signupValidators, loginValidators } = require('./utils/validations');
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
    res.render('new-post', {
      user: {}, title: 'Create a new post!', csrfToken: req.csrfToken()
    });
  })
);

// POST /posts
router.post('/',
  // EXPRESS VALIDATOR
  csrfProtection,
  asyncHandler(async (req, res, next) => {

  })
)


// POST /users/signup GET RID OF  THIS AFTER LOOKING !!!!!!!!!!!!!!!!!
router.post(
  "/signup",
  signupValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { username, email, bio, password } = req.body;
    // TODO: implement express-validator

    const validatorErrors = validationResult(req);
    // console.log("************************", validatorErrors);
    const user = db.User.build({ username, email, bio });

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 12);
      user.hashedPassword = hashedPassword;
      await user.save();

      loginUser(req, res, user);
      return res.redirect("/");
    } else {

      const errors = validatorErrors.array().map((err) => err.msg);
      res.render("signup", {
        user,
        title: "Sign up",
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);





module.exports = router;
