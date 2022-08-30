const Product = require('../models/Product');
const fs = require('fs');

exports.getNewProducts = async (req, res) => {
  const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
  const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);
  try {
    const newProducts = await Product.find({})
      .sort({ createdAt: sortBy })
      .limit(limit);
    res.json({
      newProducts,
    });
  } catch (err) {
    console.log(err, 'Get New Product Error');
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};
