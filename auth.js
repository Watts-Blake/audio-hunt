const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res) => {
  // TODO go to DB and delete session from session table?
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect("/");
  }
  return next();
};

const requireAuthAPI = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.status(401).json('not authorized');
  }
  return next();
}

const restoreUser = async (req, res, next) => {
  // console.log(req.session);

  if (req.session.auth) {
    const { userId } = req.session.auth;

    try {
      const loggedInUser = await db.User.findByPk(userId);

      if (loggedInUser) {
        res.locals.authenticated = true;
        res.locals.user = loggedInUser;
        return next();
      }
    } catch (error) {
      res.locals.authenticated = false;
      return next(error);
    }
  } else {
    res.locals.authenticated = false;
    return next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  requireAuthAPI,
  restoreUser,
};
