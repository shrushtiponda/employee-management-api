const User = require("../models/user.model");
const userValidators = require("../validators/user.validators");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
    const validatedUserData = userValidators.validateRegisterUser(userData);

    const userExists = await User.findOne({email: validatedUserData.email});
    if(userExists)
        throw new ApiError(409, "Email already exists!");

    const hashedPassword = await bcrypt.hash(validatedUserData.password, 10);
  
    const user = {
        ...validatedUserData,
        password: hashedPassword,
    };

    const createdUser = await User.create(user);   

    const registeredUser = await User.findById(createdUser._id);

    return registeredUser;
};

const loginUser = async (userData) => {
    const validatedUserData = userValidators.validateLoginUser(userData);

    const user = await User.findOne({email: validatedUserData.email}).select("+password");
    
    if(!user)
        throw new ApiError(401, "Invalid email or password");

    const passwordMatched = await bcrypt.compare(validatedUserData.password, user.password);
    
    if(!passwordMatched)
        throw new ApiError(401, "Invalid email or password");

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_IN
    }
    );

    user.lastlogin = new Date();
    await user.save();

    const responseUser = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    
    return {user : responseUser, token };
};
 

module.exports = {
    registerUser,
    loginUser
}; 