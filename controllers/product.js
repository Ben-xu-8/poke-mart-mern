const Product = require('../models/Product');
const fs = require('fs');

exports.create = async (req, res) => {
  const { filename } = req.file;
  const {
    productName,
    productDesc,
    productPrice,
    productType,
    productQty,
    productProduct,
  } = req.body;

  try {
    let product = new Product();
    product.fileName = filename;
    product.productName = productName;
    product.productDesc = productDesc;
    product.productPrice = productPrice;
    product.productType = productType;
    product.productQty = productQty;
    product.productProduct = productProduct;

    await product.save();
    res.json({
      successMessage: `${productName} Has Been Created`,
      product,
    });
  } catch (err) {
    console.log(err, 'Create Product Error');
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const products = await Product.find({}).populate('productType', 'category');
    res.json({ products });
  } catch (err) {
    console.log(err, 'Read Product Error');
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    fs.unlink(`uploads/${deletedProduct.fileName}`, (err) => {
      if (err) throw err;
      console.log(
        'Image Successfully Deleted from FileSystem',
        deletedProduct.fileName
      );
    });
    res.json(deletedProduct);
  } catch (err) {
    console.log(err, 'Delete Product Error');
    res.status(500).json({
      errorMessage: 'Please Try Again',
    });
  }
};
