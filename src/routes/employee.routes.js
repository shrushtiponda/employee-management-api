const express = require("express");
const router = express.Router();

const { createEmployee, getAllEmployees } = require("../controllers/employee.controller");


router.get("/", getAllEmployees);
router.post("/", createEmployee);


module.exports = router;