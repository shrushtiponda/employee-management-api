const express = require("express");
const { getHealth } = require("../controllers/health.controller");
const employeeRoutes = require("./employee.routes");

const router = express.Router();

router.get("/", getHealth);
router.use("/employees", employeeRoutes);

module.exports = router;