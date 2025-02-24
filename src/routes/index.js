const express = require("express");
const router = express.Router();

const employeeRoutes  = require("./employeeRoutes");
const adminRoutes  = require("./adminRoutes");
const customerRoutes  = require("./customerRoutes");

router.use("/employees",employeeRoutes)
router.use("/admin",adminRoutes)
router.use("/customers",customerRoutes)



module.exports=router


