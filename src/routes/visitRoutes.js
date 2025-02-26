const express = require("express");
const router = express.Router();
const visitController = require("../controllers/visitController");
const authMiddleware = require("../middleware/authMiddleware");

// Define visit routes
router.post("/", authMiddleware.verifyAdmin, visitController.createVisit);
router.get("/", authMiddleware.verifyToken, visitController.getAllVisits);
router.get("/:id", authMiddleware.verifyToken, visitController.getVisitById);
router.put("/:id", authMiddleware.verifyAdmin, visitController.updateVisit);
router.delete("/:id", authMiddleware.verifyAdmin, visitController.deleteVisit);

module.exports = router;
