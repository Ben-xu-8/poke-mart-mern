const User = require('../models/User');
const bcrypt = require('bcryptjs');

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
  } catch (err) {
    console.log('Register Controller Error', err);
  }
};