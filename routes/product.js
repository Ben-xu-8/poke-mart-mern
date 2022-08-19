const express = require('express');
const router = express.Router();
const { authJWT } = require('../middleware/auth');
const upload = require('../middleware/multer');
const productController = require('../controllers/product');

router.post(
  '/',
  authJWT,
  upload.single('productImage'),
  productController.create
);

module.exports = router;
