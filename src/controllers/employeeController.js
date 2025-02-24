const EmployeeService = require('../services/employeeService');

exports.register = async (req, res, next) => {
    try {
        const result = await EmployeeService.register(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const result = await EmployeeService.login(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

exports.getAllEmployees = async (req, res, next) => {
    try {
        const result = await EmployeeService.getAllEmployees();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

exports.updateEmployee = async (req, res, next) => {
    try {
        const result = await EmployeeService.updateEmployee(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

exports.deactivateEmployee = async (req, res, next) => {
    try {
        const result = await EmployeeService.deactivateEmployee(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};
