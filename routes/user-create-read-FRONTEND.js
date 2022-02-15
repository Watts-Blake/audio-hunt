// PACKAGE IMPORTS ******************************************************************
var express = require("express");

// MODULE IMPORTS *******************************************************************
const { loginUser, restoreUser, requireAuth, logoutUser } = require("../auth");
const db = require("../db/models");
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
// MIDDLEWARE ***********************************************************************
var router = express.Router();

router.use(restoreUser);

// ROUTES *****************************************************************
// GET /users *************************************************************
router.get("/profile-page-demo", function (req, res, next) {
  res.render("user-profile");
});



module.exports = router;
