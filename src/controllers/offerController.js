const OfferService = require("../services/offerService");

exports.createOffer = async (req, res, next) => {
  try {
    const result = await OfferService.createOffer(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllOffers = async (req, res, next) => {
  try {
    const result = await OfferService.getAllOffers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getOfferById = async (req, res, next) => {
  try {
    const result = await OfferService.getOfferById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateOffer = async (req, res, next) => {
  try {
    const result = await OfferService.updateOffer(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteOffer = async (req, res, next) => {
  try {
    const result = await OfferService.deleteOffer(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
