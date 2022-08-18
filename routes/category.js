const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { authJWT } = require('../middleware/auth');

router.post('/', authJWT, categoryController.create);
router.get('/', authJWT, categoryController.read);

module.exports = router;
