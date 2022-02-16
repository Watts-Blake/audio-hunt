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

const getJoinedDate = (user) => {
	// console.log(user.createdAt)
	// const month = user.createdAt.getMonth();
	// const date = user.createdAt.getDay();
	// const year = user.createdAt.getYear();
	const fullDate = user.createdAt.toLocaleString('default', {year: 'numeric', month: 'short', day: 'numeric' })

	return fullDate
}

module.exports = { asyncHandler, getTimeElapsed, getJoinedDate }
