const { check } = require('express-validator');

const registerValidation = [
  check('username', 'Username is required').notEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
];

const loginValidation = [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required').notEmpty(),
];

module.exports = { registerValidation, loginValidation };
