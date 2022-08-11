const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpire } = require('../config/keys');

exports.registerController = async (req, res) => {
  const { firstname, lastname, username, email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        errorMessage: 'Email Already Exists',
      });
    }
    const newUser = new User();
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.username = username;
    newUser.email = email;
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    res.json({
      successMessage: 'Registration Success',
    });
  } catch (err) {
    console.log('Register Controller Error', err);
    res.status(500).json({
      errorMessage: 'Server Error',
    });
  }
};

exports.signinController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errorMessage: 'Invalid Credential',
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: 'Invalid Credential',
      });
    }
    const payload = {
      user: {
        _id: user._id,
      },
    };
    jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
      if (err) {
        console.log('jwt error', err);
      }
      const { _id, username, email, role } = user;
      res.json({
        token,
        user: { _id, username, email, role },
      });
    });
  } catch (err) {
    console.log('Sign In Controller Error', err);
    res.status(500).json({
      errorMessage: 'Server Error',
    });
  }
};
