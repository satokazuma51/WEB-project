const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  res.json({ message: 'User registered successfully' });
};

const loginUser = async (req, res) => {
  res.json({ message: 'User logged in successfully' });
};

module.exports = { registerUser, loginUser };

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController'); 
const { validate } = require('../middleware/validateMiddleware'); 
const { registerValidation, loginValidation } = require('../validators/authValidator'); 

router.post('/register', validate(registerValidation), registerUser);
router.post('/login', validate(loginValidation), loginUser);

module.exports = router;


