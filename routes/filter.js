const express = require('express');
const router = express.Router();
const { authJWT } = require('../middleware/auth');
const upload = require('../middleware/multer');
const filterController = require('../controllers/filter');

router.get('/', filterController.getNewProducts);
router.post('/search', filterController.searchedByQuery);

module.exports = router;
