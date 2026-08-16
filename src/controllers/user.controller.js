const userService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
    const user = await userService.registerUser(req.body);
    return res.status(201).json( new ApiResponse(201, user, "User registered successfully") );
}); 

const loginUser = asyncHandler(async (req, res) => {
    const user = await userService.loginUser(req.body);
    return res.status(200).json( new ApiResponse(200, user, "User logged in successfully") );
}); 

const updateUserRole = asyncHandler(async (req, res) => {
    const user = await userService.updateUserRole(req.params.id, req.body.role);
    return res.status(200).json( new ApiResponse(200, user, "User role updated successfully") );
});

module.exports = { registerUser, loginUser, updateUserRole };