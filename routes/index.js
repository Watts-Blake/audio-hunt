// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
// const asyncHandler = require('express-async-handler');
// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const { asyncHandler, getTimeElapsed, getJoinedDate } = require('./utils/utils');

const db = require("../db/models");

// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);

// ROUTER ***************************************************************************

// GET /
// !!! PLEASE TEST THIS ROUTE !!!
router.get(
  "/",
  asyncHandler(async (req, res, next)  => {
    const posts = await db.Post.findAll({
      include: [db.User, db.Comment, db.Song]
    });

    res.render('index', { posts });

    // return res.render("index", {
    //   title: "Audio Hunt",
    //   authenticated: res.locals.authenticated,
    // });
  })
)

// GET /random
router.get("/about",(req, res) => {
  res.render('about')
});

module.exports = router;
