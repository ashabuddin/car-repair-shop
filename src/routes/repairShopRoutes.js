const express = require("express");
const router = express.Router();
const repairShopController = require("../controllers/repairShopController");
const authMiddleware = require("../middleware/authMiddleware");

// Define offer routes
router.post("/", authMiddleware.verifyAdmin, repairShopController.createRepairShop);
router.get("/", authMiddleware.verifyToken, repairShopController.getAllRepairShops);
// router.get("/:id", authMiddleware.verifyToken, offerController.getOfferById);
// router.put("/:id", authMiddleware.verifyAdmin, offerController.updateOffer);
router.delete("/:id", authMiddleware.verifyAdmin, repairShopController.deleteRepairShop);

module.exports = router;
