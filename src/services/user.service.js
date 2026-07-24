const User = require("../models/user.model");
const userValidators = require("../validators/user.validators");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

const registerUser = async (userData) => {
    const validatedUserData = userValidators.validateRegisterUser(userData);

    const userExists = await User.findOne({email: validatedUserData.email});
    if(userExists)
        throw new ApiError(409, "Email already exists!");

    const hashedPassword = await bcrypt.hash(validatedUserData.password, 10);
  
    const user = {
        name: validatedUserData.name,
        email: validatedUserData.email,
        password: hashedPassword,
    };

    const createdUser = await User.create(user);   

    const registeredUser = await User.findById(createdUser._id);

    return registeredUser;
};
 

module.exports = {
    registerUser
}; 