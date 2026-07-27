const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");


const isAuthenticate = asyncHandler( async (req, res, next)=> {
    const authorization = req.header("Authorization");
    const token = authorization?.split(" ")[1];

    if(!token){
        throw new ApiError(401, "Authentication required");
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token");
    }

    const user  = await User.findById(decoded.id);

    if (!user || !user.isActive){
        throw new ApiError(401, "Unauthorized");
    }
    req.user = user;
    next();
        
});


module.exports = {
    isAuthenticate
};