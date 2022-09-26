const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

exports.authJWT = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      errorMessage: 'No Token, Authorization Denied',
    });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log('jwt error', err);
    res.status(401).json({
      errorMessage: 'Token Invalid',
    });
  }
};
