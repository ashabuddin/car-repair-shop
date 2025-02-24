const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", employeeController.register);
router.post("/login", employeeController.login);
router.get("/", authMiddleware.verifyAdmin, employeeController.getAllEmployees);
router.put(
  "/:id",
  authMiddleware.verifyAdmin,
  employeeController.updateEmployee
);
router.delete(
  "/:id",
  authMiddleware.verifyAdmin,
  employeeController.deactivateEmployee
);

module.exports = router;
