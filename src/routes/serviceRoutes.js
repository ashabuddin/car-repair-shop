const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');

// Define service routes
router.post('/', authMiddleware.verifyAdmin, serviceController.createService);
router.get('/', authMiddleware.verifyToken, serviceController.getAllServices);
router.get('/:id', authMiddleware.verifyToken, serviceController.getServiceById);
router.put('/:id', authMiddleware.verifyAdmin, serviceController.updateService);
router.delete('/:id', authMiddleware.verifyAdmin, serviceController.deleteService);

module.exports = router;
