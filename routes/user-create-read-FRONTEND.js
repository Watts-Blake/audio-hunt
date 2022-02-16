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
router.get("/profile-page-demo", asyncHandler(async (req, res, next) => {
  const post = await db.Post.build({
    userId: 1,
    songId: 1,
    title: 'Title Of Song Post!',
    shortDescription: 'this is a short description of the post',
    content: 'f jefiesrsjkerflskjrf  surhsiru hriu hsi iur hiruhir hwoiu hwi  hi uuh se ',
  });

  res.render("user-profile", { post });
}));



module.exports = router;
