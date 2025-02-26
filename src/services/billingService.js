const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Visit = require('../models/Visit');
const Invoice = require('../models/Invoice');

class BillingService {
    static async createInvoice(data) {
        const { visitId, amount, currency } = data;
        const visit = await Visit.findById(visitId).populate('customer vehicle services');

        if (!visit) {
            throw new Error('Visit not found');
        }

        const invoice = new Invoice({
            visit: visitId,
            customer: visit.customer._id,
            amount,
            currency,
            status: 'pending',
        });

        await invoice.save();
        return { message: 'Invoice created successfully', invoice };
    }

    static async processPayment(invoiceId, token) {
        const invoice = await Invoice.findById(invoiceId);

        if (!invoice) {
            throw new Error('Invoice not found');
        }

        if (invoice.status !== 'pending') {
            throw new Error('Invoice is not pending');
        }

        const charge = await stripe.charges.create({
            amount: invoice.amount,
            currency: invoice.currency,
            source: token,
            description: `Payment for invoice ${invoice._id}`,
        });

        invoice.status = 'paid';
        invoice.paymentDate = new Date();
        await invoice.save();

        return { message: 'Payment processed successfully', charge };
    }

    static async getAllInvoices() {
        const invoices = await Invoice.find().populate('visit customer');
        return invoices;
    }

    static async getInvoiceById(id) {
        const invoice = await Invoice.findById(id).populate('visit customer');
        if (!invoice) {
            throw new Error('Invoice not found');
        }
        return invoice;
    }
}

module.exports = BillingService;
