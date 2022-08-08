const express = require('express');
const router = express.Router();
const { signupValidator, validatorResult } = require('../middleware/validator');

router.post('/register', signupValidator, validatorResult);

module.exports = router;
