const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const authMiddleware = require('../middleware/authMiddleware');

// Define vehicle routes
router.post('/', authMiddleware.verifyAdmin, vehicleController.createVehicle);
router.get('/', authMiddleware.verifyToken, vehicleController.getAllVehicles);
router.get('/:id', authMiddleware.verifyToken, vehicleController.getVehicleById);
router.put('/:id', authMiddleware.verifyAdmin, vehicleController.updateVehicle);
router.delete('/:id', authMiddleware.verifyAdmin, vehicleController.deleteVehicle);

module.exports = router;
