const CustomerService = require("../services/customerService");

exports.createCustomer = async (req, res, next) => {
  try {
    const result = await CustomerService.createCustomer(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllCustomers = async (req, res, next) => {
  try {
    const result = await CustomerService.getAllCustomers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const result = await CustomerService.getCustomerById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const result = await CustomerService.updateCustomer(
      req.params.id,
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
exports.deleteCustomer = async (req, res, next) => {
  try {
    const result = await CustomerService.deleteCustomer(req.params.id);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
