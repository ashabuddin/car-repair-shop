const repairShopService = require("../services/repairShopService");

exports.createRepairShop = async (req, res, next) => {
  try {
    const result = await repairShopService.createRepairShop(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getAllRepairShops = async (req, res, next) => {
  try {
    const result = await repairShopService.getAllRepairShops();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
exports.deleteRepairShop = async (req, res, next) => {
  try {
    const result = await repairShopService.deleteRepairShop(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
