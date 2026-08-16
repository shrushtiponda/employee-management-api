const express = require("express");
const router = express.Router();

const { registerUser, loginUser, updateUserRole } = require("../controllers/user.controller");
const { isAuthenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/authorize.middleware");
const { USER_ROLES } = require("../constants/user.constants");

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user with the default USER role.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RegisterRequest"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input or validation failed
 *       409:
 *         description: User already exists
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *              $ref: "#/components/schemas/LoginRequest"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", loginUser);

/**
 * @swagger
 * /users/{id}/role:
 *   patch:
 *     summary: Update user role
 *     description: Accessible only to ADMIN users.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RoleUpdateRequest"
 *     responses:
 *       200:
 *         description: User role updated successfully
 *       401:
 *         description: Authentication required
 *       403:
 *         description: You are not authorized to perform this action.
 *       404:
 *         description: User not found
 */
router.patch("/:id/role", isAuthenticate, authorize(USER_ROLES.ADMIN), updateUserRole );

module.exports = router;