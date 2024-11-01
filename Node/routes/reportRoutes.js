const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { verifyToken } = require('../middleware/authMiddleware'); 


router.get('/collections', verifyToken, reportController.getCollectionReport);

module.exports = router;
