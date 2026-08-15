const express = require("express");
const router = express.Router();

const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller");
const { isAuthenticate} = require("../middlewares/auth.middleware");

router.get("/", isAuthenticate, getAllEmployees);
router.post("/", isAuthenticate, createEmployee);
router.get("/:employeeId", isAuthenticate, getEmployee);
router.put("/:employeeId", isAuthenticate, updateEmployee);
router.delete("/:employeeId", isAuthenticate, deleteEmployee);

module.exports = router;