const { check } = require("express-validator");
const db = require("../../db/models");

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Email Address')
		.isLength({ max: 255 })
		.withMessage('Email Address must not be more than 255 characters long')
		.isEmail()
		.withMessage('Email Address is not a valid email')
		.custom((value) => {
			return db.User.findOne({ where: { email: value } })
				.then((user) => {
					if (user) {
						return Promise.reject('The provided Email Address is already in use by another account');
					}
				});
		}),
	check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
	check('confirmPassword')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a value for Confirm Password')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Confirm Password does not match Password');
			}
			return true;
		})
];



module.exports = {
  userValidators
};