const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const getTimeElapsed = (user) => {
  return user.Comments.map(comment => {
    const ms = new Date() - comment.createdAt;
    const hoursAgo = Math.floor(ms / 3600000);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo > 1) comment.dataValues.timeElapsed = daysAgo + 'd';
    else comment.dataValues.timeElapsed = hoursAgo + 'h';
  });
}


module.exports = { asyncHandler, getTimeElapsed }
