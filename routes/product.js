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

router.get('/', productController.readAll);
router.get('/count', productController.readByCount);

router.get('/:productId', productController.read);

router.put(
  '/:productId',
  authJWT,
  upload.single('productImage'),
  productController.update
);

router.delete('/:productId', authJWT, productController.delete);

module.exports = router;
