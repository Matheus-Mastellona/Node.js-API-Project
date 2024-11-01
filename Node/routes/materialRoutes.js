const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const { verifyToken, verifyRole } = require('../middleware/authMiddleware');

router.get('/', verifyToken, materialController.getMaterials);
router.post('/', verifyToken,verifyRole('administrador','representante'), materialController.createMaterial);
router.put('/:id', verifyToken,verifyRole('administrador','representante'), materialController.updateMaterial);
router.delete('/:id', verifyToken,verifyRole('administrador'), materialController.deleteMaterial);

module.exports = router;
