const userService = require("../services/user.service");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
    const user = await userService.registerUser(req.body);
    return res.status(201).json( new ApiResponse(201, user, "User registered successfully") );
}); 

module.exports = { registerUser };