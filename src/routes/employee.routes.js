const express = require("express");
const router = express.Router();

const { USER_ROLES } =  require("../constants/user.constants");
const { createEmployee, getAllEmployees, getEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller");
const { isAuthenticate} = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/authorize.middleware");

/**
 * @swagger
 * /employees:
 *   post:
 *     summary: Create a new employee
 *     description: Accessible only to ADMIN and HR users.
 *     tags:
 *       - Employees
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/EmployeeCreateRequest"
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Invalid employee data
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Only ADMIN and HR users can create employees
 */
router.post("/", isAuthenticate, authorize(USER_ROLES.ADMIN, USER_ROLES.HR), createEmployee);

/**
 * @swagger
 * /employees:
 *   get:
 *     summary: Get all employees
 *     description: Fetch employees with pagination, search, filtering, and sorting.
 *     tags:
 *       - Employees
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of employees per page
 *
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search employees by employeeId, fullName, or email
 *
 *       - in: query
 *         name: department
 *         schema:
 *           type: string
 *         description: Filter employees by department
 *
 *       - in: query
 *         name: designation
 *         schema:
 *           type: string
 *         description: Filter employees by designation
 *
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: employeeId
 *         description: Field used for sorting
 *
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *           default: asc
 *         description: Sorting order
 *
 *     responses:
 *       200:
 *         description: Employees fetched successfully
 *
 *       400:
 *         description: Invalid query parameters
 *
 *       401:
 *         description: Authentication required
 */
router.get("/", isAuthenticate, authorize(...Object.values(USER_ROLES)), getAllEmployees);

/**
 * @swagger
 * /employees/{employeeId}:
 *   get:
 *     summary: Get employee by employee ID
 *     description: Fetch a single employee using the employeeId.
 *     tags:
 *       - Employees
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *           example: EMP0001
 *         description: Unique employee ID
 *     responses:
 *       200:
 *         description: Employee fetched successfully
 *       401:
 *         description: Authentication required
 *       404:
 *         description: Employee not found
 */
router.get("/:employeeId", isAuthenticate, authorize(...Object.values(USER_ROLES)), getEmployee);

/**
 * @swagger
 * /employees/{employeeId}:
 *   put:
 *     summary: Update an employee
 *     description: Accessible only to ADMIN, HR, and MANAGER users.
 *     tags:
 *       - Employees
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *           example: EMP0001
 *         description: Unique employee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Employee"
 *     responses:
 *       200:
 *         description: Employee updated successfully
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Only ADMIN, HR, and MANAGER users can update employees
 *       404:
 *         description: Employee not found
 */
router.put("/:employeeId", isAuthenticate, authorize(USER_ROLES.ADMIN, USER_ROLES.HR, USER_ROLES.MANAGER), updateEmployee);

/**
 * @swagger
 * /employees/{employeeId}:
 *   delete:
 *     summary: Delete an employee
 *     description: Accessible only to ADMIN users.
 *     tags:
 *       - Employees
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: employeeId
 *         required: true
 *         schema:
 *           type: string
 *           example: EMP0001
 *         description: Unique employee ID
 *     responses:
 *       200:
 *         description: Employee deleted successfully
 *       401:
 *         description: Authentication required
 *       403:
 *         description: Only ADMIN users can delete employees
 *       404:
 *         description: Employee not found
 */
router.delete("/:employeeId", isAuthenticate, authorize(USER_ROLES.ADMIN), deleteEmployee);

module.exports = router;