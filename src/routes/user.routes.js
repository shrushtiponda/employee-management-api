const express = require("express");
const router = express.Router();

const { registerUser, loginUser, updateUserRole } = require("../controllers/user.controller");
const { isAuthenticate } = require("../middlewares/auth.middleware");
const { authorize } = require("../middlewares/authorize.middleware");
const { USER_ROLES } = require("../constants/user.constants");

router.post("/", registerUser);
router.post("/login", loginUser);
router.patch("/:id/role", isAuthenticate, authorize(USER_ROLES.ADMIN), updateUserRole );

module.exports = router;