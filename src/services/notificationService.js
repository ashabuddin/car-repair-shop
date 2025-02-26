const nodemailer = require('nodemailer');
const twilio = require('twilio');

class NotificationService {
    constructor() {
        this.twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        this.emailTransporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendEmail(to, subject, text) {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
        };

        await this.emailTransporter.sendMail(mailOptions);
    }

    async sendSMS(to, message) {
        await this.twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to,
        });
    }

    async notifyRepairStarted(customerEmail, customerPhone, repairDetails) {
        const emailSubject = 'Repair Started';
        const emailText = `Dear Customer, your vehicle repair has started. Details: ${repairDetails}`;
        const smsText = `Repair Started: ${repairDetails}`;

        if (customerEmail) {
            await this.sendEmail(customerEmail, emailSubject, emailText);
        }

        if (customerPhone) {
            await this.sendSMS(customerPhone, smsText);
        }
    }

    async notifyRepairCompleted(customerEmail, customerPhone, repairDetails) {
        const emailSubject = 'Repair Completed';
        const emailText = `Dear Customer, your vehicle repair is complete. Details: ${repairDetails}`;
        const smsText = `Repair Completed: ${repairDetails}`;

        if (customerEmail) {
            await this.sendEmail(customerEmail, emailSubject, emailText);
        }

        if (customerPhone) {
            await this.sendSMS(customerPhone, smsText);
        }
    }
}

module.exports = new NotificationService();
