const VisitService = require("../services/visitService");

exports.createVisit = async (req, res, next) => {
  try {
    const result = await VisitService.createVisit(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllVisits = async (req, res, next) => {
  try {
    const result = await VisitService.getAllVisits();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getVisitById = async (req, res, next) => {
  try {
    const result = await VisitService.getVisitById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateVisit = async (req, res, next) => {
  try {
    const result = await VisitService.updateVisit(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteVisit = async (req, res, next) => {
  try {
    const result = await VisitService.deleteVisit(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
