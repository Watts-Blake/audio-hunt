const { check } = require("express-validator");
const bcrypt = require('bcryptjs')
const db = require("../../db/models");

const signupValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a user name.')
    .isLength({ max: 50 })
    .withMessage('Name must be shorter than 50 characters. Sorry...'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email (we promise not to blow up your inbox)')
    .isLength({ max: 255 })
    .withMessage('Email must be shorter than 255 characters...')
    .isEmail()
    .withMessage('The email address you entered is not a valid email. Not sure what you were doing there...')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('This email is already in use by another account sus 😳');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm your password')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match... 🙂');
      }
      return true;
    })
];

const editProfileValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a user name.')
    .isLength({ max: 50 })
    .withMessage('Name must be shorter than 50 characters. Sorry...'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email (we promise not to blow up your inbox)')
    .isLength({ max: 255 })
    .withMessage('Email must be shorter than 255 characters...')
    .isEmail()
    .withMessage('The email address you entered is not a valid email. Not sure what you were doing there...')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            if (user.email === value) {
              return true
            } else {
              return Promise.reject('This email is already in use by another account sus :flushed:');
            }
          }
        });
    }),
];


const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .custom(async (value, { req }) => {
      const { email } = req.body;
      const user = await db.User.findOne({ where: { email } });

      if (!user) {
        throw new Error('Invalid password or email');
      }

      const passwordMatch = await bcrypt.compare(
        value,
        user.hashedPassword.toString()
      )

      if (!passwordMatch) {
        throw new Error('Invalid password or email');
      }

      return true;
    })
];


const postValidators = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your Post')
    .isLength({ max: 100 })
    .withMessage('Title be shorter than 100 characters. Sorry...'),
  check('shortDescription')
    .exists({ checkFalsy: true })
    .withMessage("Make sure to add a short description!")
    .isLength({ max: 255 })
    .withMessage('Your short description must be shorter than 255 characters...')
];

const commentValidators = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide content for your comment')
];

module.exports = {
  signupValidators,
  loginValidators,
  editProfileValidators,
  postValidators,
  commentValidators,
};
