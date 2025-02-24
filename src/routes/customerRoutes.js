const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

// Define customer routes
router.post('/', authMiddleware.verifyAdmin, customerController.createCustomer);
router.get('/', authMiddleware.verifyToken, customerController.getAllCustomers);
router.get('/:id', authMiddleware.verifyToken, customerController.getCustomerById);
router.put('/:id', authMiddleware.verifyAdmin, customerController.updateCustomer);
router.delete('/:id', authMiddleware.verifyAdmin, customerController.deleteCustomer);

module.exports = router;
