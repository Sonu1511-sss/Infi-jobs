const express = require('express');
const router = express.Router();
const { signUp, signIn, requestPasswordReset, resetPassword } = require('../Controllers/authController');

// Sign Up Route
router.post('/signup', signUp);

// Sign In Route
router.post('/signin', signIn);

// Request password reset
router.post('/request-password-reset', requestPasswordReset);

// Reset password
router.post('/reset-password/:token', resetPassword);

module.exports = router;
