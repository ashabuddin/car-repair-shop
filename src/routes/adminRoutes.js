const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Define admin routes
router.get('/dashboard', authMiddleware.verifyAdmin, adminController.getDashboard);
router.get('/reports/customers', authMiddleware.verifyAdmin, adminController.getCustomerReport);
router.get('/reports/employees', authMiddleware.verifyAdmin, adminController.getEmployeeReport);
router.get('/reports/vehicles', authMiddleware.verifyAdmin, adminController.getVehicleReport);
router.get('/reports/services', authMiddleware.verifyAdmin, adminController.getServiceReport);
router.get('/reports/visits', authMiddleware.verifyAdmin, adminController.getVisitReport);

module.exports = router;
