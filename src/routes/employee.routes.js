const express = require("express");
const router = express.Router();

const { createEmployee, getAllEmployees, getEmployee, updateEmployee } = require("../controllers/employee.controller");


router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.get("/:employeeId", getEmployee);
router.put("/:employeeId", updateEmployee);

module.exports = router;