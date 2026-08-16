const express = require("express");
const router = express.Router();

const { USER_ROLES } =  require("../constants/user.constants");
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller");
const { isAuthenticate} = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/authorize.middleware");

router.post("/", isAuthenticate, authorize(USER_ROLES.ADMIN, USER_ROLES.HR), createEmployee);
router.get("/", isAuthenticate, authorize(...Object.values(USER_ROLES)), getAllEmployees);
router.get("/:employeeId", isAuthenticate, authorize(...Object.values(USER_ROLES)), getEmployee);
router.put("/:employeeId", isAuthenticate, authorize(USER_ROLES.ADMIN, USER_ROLES.HR, USER_ROLES.MANAGER), updateEmployee);
router.delete("/:employeeId", isAuthenticate, authorize(USER_ROLES.ADMIN), deleteEmployee);

module.exports = router;