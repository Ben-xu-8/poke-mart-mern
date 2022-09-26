const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { registerController, signinController } = require('../controllers/auth');
const {
  registerValidator,
  signinValidator,
  registerValidatorResult,
} = require('../middleware/validator');

router.post(
  '/register',
  registerValidator,
  registerValidatorResult,
  registerController
);

router.post(
  '/signin',
  signinValidator,
  registerValidatorResult,
  signinController
);

// signupValidator, validatorResult);

module.exports = router;
