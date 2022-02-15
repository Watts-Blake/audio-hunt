var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const asyncHandler = require('express-async-handler');

const { loginUser, restoreUser, requireAuth, logoutUser } = require('../auth');

// MIDDLEWARE ***********************************************************************
router.use(restoreUser);

// ROUTER ***************************************************************************

// GET /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Audio Hunt', authenticated: res.locals.authenticated });
});
// GET /login
router.get('/login', (req, res) => {
  res.render('login');
});
// POST /login
router.post('/login', asyncHandler(async (req, res) => {
  const {
      email,
      password,
  } = req.body;

  const user = await db.User.findOne({ where: { email } });

  if(user !== null){
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

    if(passwordMatch) {
      loginUser(req, res, user);

      return res.redirect('/');
    }
  }

  res.render('login', { email });
}));
// POST /logout
router.post('/logout', (req, res) => {
  logoutUser(req, res);

  res.redirect('/');
});
// GET /signup
router.get('/signup', (req, res) => {
  res.render('signup');
});
// POST /signup
router.post('/signup', asyncHandler(async (req, res, next) => {
  // TODO redirect user and log them in
}))



// GET /random
router.get('/random', requireAuth, (req, res) => {
  res.send('urniujknfvedjnkrf;vebfdgg');
});


module.exports = router;
