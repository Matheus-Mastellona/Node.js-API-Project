const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');
const { verifyToken, verifyRole } = require('../middleware/authMiddleware');


router.get('/', verifyToken, collectionController.getCollections);
router.post('/', verifyToken, verifyRole('administrador','representante'),collectionController.createCollection);
router.put('/:id', verifyToken, verifyRole('administrador','representante'),collectionController.updateCollection);
router.delete('/:id', verifyToken, verifyRole('administrador'), collectionController.deleteCollection); 

module.exports = router;
