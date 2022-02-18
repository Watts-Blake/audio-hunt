// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
const csrf = require("csurf");
// const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const { signupValidators, loginValidators } = require("./utils/validations");
const {
  asyncHandler,
  getTimeElapsed,
  getJoinedDate,
} = require("./utils/utils");

const api = require("./api");

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
router.get("/login", csrfProtection, (req, res) => {
  res.render("login", {
    title: "Log in",
    csrfToken: req.csrfToken(),
  });
});

// POST /users/login
router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await db.User.findOne({ where: { email } });
    
    let errors = [];
    const validatorErrors = validationResult(req);
    if (user !== null && validatorErrors.isEmpty()) {
      user.activeState = true;
      await user.save();

      loginUser(req, res, user);

      req.session.save(()=> {res.redirect('/')})
      return
    } else {
      errors = validatorErrors.array().map((err) => err.msg);
      res.render("login", {
        title: "Log in",
        errors,
        csrfToken: req.csrfToken(),
      });
    }

  })
);

// POST /users/logout
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  req.session.save(()=> res.redirect('/'))
  return
});
// GET /users/signup
router.get("/signup", csrfProtection, (req, res) => {
  return res.render("signup", {
    user: {},
    title: "Sign up",
    csrfToken: req.csrfToken(),
  });
});
// POST /users/signup
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
      req.session.save(() => res.redirect('/'));
      return
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

// GET /users/:id *** PROFILE PAGE
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const user = await db.User.findByPk(id, {
      include: [
        {
          model: db.Comment,
          include: db.Post,
        },
        {
          model: db.Post,
          include: [db.Song, db.Comment],
        },
      ],
    });

    let isAuthorized = true;
    if (req.session.auth.userId !== id) {
      isAuthorized = false;
    }

    if (user) {
      getTimeElapsed(user);
      const date = getJoinedDate(user);

      const userPosts = user.Posts;
      const userComments = user.Comments;

      const loggedInUser = {
        profImg: res.locals.user.profileImg,
        userId: res.locals.user.id,
      }
      res.render(`user-profile`, {
        title: 'please fix this',
        user,
        userPosts,
        userComments,
        date,
        isAuthorized,
        loggedInUser,
      });
    } else {
      const error = new Error("We could not find this user!");
      error.status = 404;
      next(error);
    }
  })
);

// GET /users/:id/edit *** PROFILE EDIT PAGE
router.route("/:id(\\d+)/edit").get(
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const id = (await req.params.id) * 1;

    const user = await db.User.findByPk(id);

    if (req.session.auth.userId !== id) {
      const error = new Error('Sneaky sneaky :)))) This is not your account silly boy :))))')
      error.status = 403;
      return next(error);
      // req.session.save(()=> {res.redirect('/')})
    }

    if (user) {
      res.render(`profile-edit`, {
        user,
        csrfToken: req.csrfToken(),
      });
    } else {
      const error = new Error("We could not find this user!");
      error.status = 404;
      next(error);
    }
  })
);



module.exports = router;
