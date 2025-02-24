const VehicleService = require("../services/vehicleService");

exports.createVehicle = async (req, res, next) => {
  try {
    const result = await VehicleService.createVehicle(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllVehicles = async (req, res, next) => {
  try {
    const result = await VehicleService.getAllVehicles();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getVehicleById = async (req, res, next) => {
  try {
    const result = await VehicleService.getVehicleById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateVehicle = async (req, res, next) => {
  try {
    const result = await VehicleService.updateVehicle(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteVehicle = async (req, res, next) => {
  try {
    const result = await VehicleService.deleteVehicle(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
