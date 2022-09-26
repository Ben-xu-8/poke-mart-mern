const { body, validationResult } = require('express-validator');

exports.registerValidator = [
  body('username').not().isEmpty().trim().withMessage('Check All Fields'),
  body('email').isEmail().withMessage('Invalid Email Address'),
  body('password')
    .isLength({
      min: 6,
    })
    .withMessage('Must Contain at Least 6 Characters Long'),
];

exports.signinValidator = [
  body('email').isEmail().withMessage('Invalid Email Address'),
  body('password')
    .isLength({
      min: 6,
    })
    .withMessage('Must Contain at Least 6 Characters Long'),
];

exports.registerValidatorResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errorMessage: errors.array()[0].msg });
  }
  next();
};
