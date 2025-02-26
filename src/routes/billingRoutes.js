const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');
const authMiddleware = require('../middleware/authMiddleware');

// Define billing routes
router.post('/invoices', authMiddleware.verifyAdmin, billingController.createInvoice);
router.post('/payment', authMiddleware.verifyToken, billingController.processPayment);
router.get('/invoices', authMiddleware.verifyAdmin, billingController.getAllInvoices);
router.get('/invoices/:id', authMiddleware.verifyAdmin, billingController.getInvoiceById);

module.exports = router;
