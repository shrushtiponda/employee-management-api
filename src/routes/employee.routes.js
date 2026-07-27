const express = require("express");
const router = express.Router();

const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller");
const { isAuthenticate} = require("../middlewares/auth.middleware");

router.get("/", isAuthenticate, getAllEmployees);
router.post("/", createEmployee);
router.get("/:employeeId", getEmployee);
router.put("/:employeeId", updateEmployee);
router.delete("/:employeeId", deleteEmployee);

module.exports = router;