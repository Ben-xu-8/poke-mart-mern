const { body, validationResult } = require('express-validator');

exports.signupValidator = [
  body('username').not().isEmpty().trim().withMessage('All Fields Required'),
  body('email').isEmail().normalizeEmail('Invalid Email'),
  body('password')
    .isLength({
      min: 6,
    })
    .withMessage('Password has to be at least 6 characters long'),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult();
  const hasErrors = !result.isEmpty();
  //   if (hasErrors) {
  //     console.log('Errors:', hasErrors);
  //     console.log('results', result);
  //   }
  next();
};
