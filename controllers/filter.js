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

exports.searchedByQuery = async (req, res) => {
  const { type, query } = req.body;
  try {
    let products;
    switch (type) {
      case 'text':
        products = await Product.find({ $text: { $search: query } });
        break;
      case 'category':
        products = await Product.find({ productType: query });
        break;
    }
    if (!products.length > 0) {
      products = await Product.find({});
    }
    res.json({ products });
  } catch (err) {
    console.log(err, 'Filtered Error');
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};