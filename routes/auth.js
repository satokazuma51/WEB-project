const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('../validators/authValidator');
const validate = require('../middleware/validateMiddleware').default || require('../middleware/validateMiddleware');
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', validate(registerValidation), registerUser);
router.post('/login', validate(loginValidation), loginUser);

module.exports = router;
