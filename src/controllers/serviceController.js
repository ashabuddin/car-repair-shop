const ServiceService = require("../services/serviceService");

exports.createService = async (req, res, next) => {
  try {
    const result = await ServiceService.createService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllServices = async (req, res, next) => {
  try {
    const result = await ServiceService.getAllServices();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getServiceById = async (req, res, next) => {
  try {
    const result = await ServiceService.getServiceById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateService = async (req, res, next) => {
  try {
    const result = await ServiceService.updateService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteService = async (req, res, next) => {
  try {
    const result = await ServiceService.deleteService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
