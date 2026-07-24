const express = require("express");
const { getHealth } = require("../controllers/health.controller");
const employeeRoutes = require("./employee.routes");
const userRoutes = require("./user.routes");

const router = express.Router();

router.get("/", getHealth);
router.use("/employees", employeeRoutes);
router.use("/users", userRoutes);

module.exports = router;