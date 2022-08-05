const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://pokemart-user:user@poke-mart-mern.aweezoy.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Database Connection Success');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
