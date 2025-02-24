const express = require("express");
const router = express.Router();

const employeeRoutes  = require("./employeeRoutes");
const adminRoutes  = require("./adminRoutes");
const customerRoutes  = require("./customerRoutes");
const vehicleRoutes  = require("./vehicleRoutes");
const serviceRoutes  = require("./serviceRoutes");
const offerRoutes  = require("./offerRoutes");

router.use("/employees",employeeRoutes)
router.use("/admin",adminRoutes)
router.use("/customers",customerRoutes)
router.use("/vehicles",vehicleRoutes)
router.use("/services",serviceRoutes)
router.use("/offers",offerRoutes)



module.exports=router


