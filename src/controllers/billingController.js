const BillingService = require('../services/billingService');

exports.createInvoice = async (req, res, next) => {
    try {
        const result = await BillingService.createInvoice(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

exports.processPayment = async (req, res, next) => {
    try {
        const { invoiceId, token } = req.body;
        console.log(token);
        const result = await BillingService.processPayment(invoiceId, token);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

exports.getAllInvoices = async (req, res, next) => {
    try {
        const result = await BillingService.getAllInvoices();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

exports.getInvoiceById = async (req, res, next) => {
    try {
        const result = await BillingService.getInvoiceById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};
