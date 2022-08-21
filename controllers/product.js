const Product = require('../models/Product');

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
