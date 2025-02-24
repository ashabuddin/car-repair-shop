const AdminService = require('../services/adminService');

exports.getDashboard = async (req, res, next) => {
    try {
        const dashboardData = await AdminService.getDashboardData();
        res.status(200).json(dashboardData);
    } catch (error) {
        next(error);
    }
};

exports.getCustomerReport = async (req, res, next) => {
    try {
        const customerReport = await AdminService.getCustomerReport();
        res.status(200).json(customerReport);
    } catch (error) {
        next(error);
    }
};

exports.getEmployeeReport = async (req, res, next) => {
    try {
        const employeeReport = await AdminService.getEmployeeReport();
        res.status(200).json(employeeReport);
    } catch (error) {
        next(error);
    }
};

exports.getVehicleReport = async (req, res, next) => {
    try {
        const vehicleReport = await AdminService.getVehicleReport();
        res.status(200).json(vehicleReport);
    } catch (error) {
        next(error);
    }
};

exports.getServiceReport = async (req, res, next) => {
    try {
        const serviceReport = await AdminService.getServiceReport();
        res.status(200).json(serviceReport);
    } catch (error) {
        next(error);
    }
};

exports.getVisitReport = async (req, res, next) => {
    try {
        const visitReport = await AdminService.getVisitReport();
        res.status(200).json(visitReport);
    } catch (error) {
        next(error);
    }
};
