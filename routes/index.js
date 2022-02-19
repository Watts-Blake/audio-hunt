// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
const sequelize = require("sequelize")

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const { asyncHandler, getPostTimeElapsed } = require('./utils/utils');

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
      // order: [[{model: db.Comment}, "createdAt", "DESC"]],
      include: [db.User, db.Song, db.Comment],
    });


    posts.sort((a, b) => {
      return b.Comments.length - a.Comments.length
    });

    posts.length = 10
    
    const comments = await db.Comment.findAll(
      {
        order: [["createdAt", "DESC"]],
        limit: 10
      }
    );
      
    comments.forEach(comment => {
      getPostTimeElapsed(comment);

    })

    
    res.render('index', { 
      title: "Audio Hunt",
      posts,
      comments
     });
  })
)

// GET /random
router.get("/about",(req, res) => {
  res.render('about')
});

module.exports = router;
