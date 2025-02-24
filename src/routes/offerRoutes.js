const express = require("express");
const router = express.Router();
const offerController = require("../controllers/offerController");
const authMiddleware = require("../middleware/authMiddleware");

// Define offer routes
router.post("/", authMiddleware.verifyAdmin, offerController.createOffer);
router.get("/", authMiddleware.verifyToken, offerController.getAllOffers);
router.get("/:id", authMiddleware.verifyToken, offerController.getOfferById);
router.put("/:id", authMiddleware.verifyAdmin, offerController.updateOffer);
router.delete("/:id", authMiddleware.verifyAdmin, offerController.deleteOffer);

module.exports = router;
