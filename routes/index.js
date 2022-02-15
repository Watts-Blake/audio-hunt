// PACKAGE IMPORTS ******************************************************************
var express = require("express");
const bcrypt = require("bcryptjs");
// const asyncHandler = require('express-async-handler');
// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");

// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);

// ROUTER ***************************************************************************

// GET /
router.get("/", function (req, res, next) {
  return res.render("index", {
    title: "Audio Hunt",
    authenticated: res.locals.authenticated,
  });
});

// GET /random
router.get("/random", requireAuth, (req, res) => {
  res.send("urniujknfvedjnkrcszfvbzdbxgdfgxcfvefdvsebfdgg");
});

module.exports = router;
