const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { registerController } = require('../controllers/auth');
const {
  registerValidator,
  registerValidatorResult,
} = require('../middleware/validator');

router.post(
  '/register',
  registerValidator,
  registerValidatorResult,
  registerController
);

// signupValidator, validatorResult);

module.exports = router;
