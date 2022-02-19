// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
const sequelize = require("sequelize")

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
      include: [db.User, db.Song, db.Comment],
    });

    // const comments = await db.Comments.findAll({

    // })

    posts.sort((a, b) => {
      return b.Comments.length - a.Comments.length
    });

    posts.length = 10

    // comments.sort((a, b) => {
    //   return a.Comments.
    // })


    // const recentPost = await db.Post.findAll({
    //   include: [db.User, db.Song, db.Comment],
    //   order: [[{ model: db.Comment }, "createdAt", "DESC"]],
    //   limit: 10
    // });

    

    res.render('index', { 
      title: "Audio Hunt",
      posts
     });
  })
)

// GET /random
router.get("/random", requireAuth, (req, res) => {
  res.send("urniujknfvedjnkrcszfvbzdbxgdfgxcfvefdvsebfdgg");
});

module.exports = router;
