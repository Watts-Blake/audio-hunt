var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const asyncHandler = require('express-async-handler');

const { loginUser, restoreUser, requireAuth } = require('../auth');

// MIDDLEWARE ***********************************************************************
router.use(restoreUser);

// ROUTER ***************************************************************************

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Audio Hunt', authenticated: res.locals.authenticated });
});

// TEST ROUTE TO LOG IN USER
router.get('/login', (req, res) => {
  res.render('login');
});

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

router.get('/random', requireAuth, (req, res) => {
  res.send('urniujknfvedjnkrf;vebfdgg');
});


module.exports = router;
