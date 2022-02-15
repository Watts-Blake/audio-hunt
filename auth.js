const db = require('./db/models');

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  }
};

const logoutUser = (req, res) => {
  // TODO go to DB and delete session from session table?
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/');
  }
  return next();
};

const restoreUser = async (req, res, next) => {
  console.log(req.session);

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const user = await db.User.findByPk(userId);

      if(user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (error) {
      res.locals.authenticated = false;
      next(error);
    }

  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};



// requireAuth middleware.....
// POST /comments


// s%3Ar2Fql5Ml3DfsyhMQyOoVfSUNPpXShEWH.SjNyLDffbr6RnkefFmcr6iouoF%2Fi045oY1anX1UcXNA
// s%3Ar2Fql5Ml3DfsyhMQyOoVfSUNPpXShEWH.SjNyLDffbr6RnkefFmcr6iouoF%2Fi045oY1anX1UcXNA
