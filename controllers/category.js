const Category = require('../models/Category');

exports.create = async (req, res) => {
  const { category } = req.body;

  try {
    const categoryExist = await Category.findOne({ category });

    if (categoryExist) {
      return res.status(400).json({
        errorMessage: `${category} Already Exists`,
      });
    }

    let newCategory = new Category();
    newCategory.category = category;
    newCategory = await newCategory.save();

    res.status(200).json({
      successMessage: `${newCategory.category} Was Created`,
    });
  } catch (err) {
    console.log('Category Create Error', err);
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};

exports.read = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({
      categories,
    });
  } catch (err) {
    console.log('Read Error', err);
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};
