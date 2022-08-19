const Product = require('../models/Product');

exports.create = async (req, res) => {
  console.log('req.body', req.body);
  console.log('req.file', req.file);
  console.log('req.user', req.user);

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
    product.productPrice = producePrice;
    product.productType = productType;
    product.productQty = prodcutQty;
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
