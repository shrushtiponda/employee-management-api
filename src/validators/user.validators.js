const ApiError = require("../utils/ApiError");
const { EMAIL_REGEX, PASSWORD_REGEX, NAME_REGEX } = require("../constants/validators.constants");

const validateRegisterUser = (userData) => {
        //Required fileds
        if (!userData.name?.trim()) {
            throw new ApiError(400, "Name is required");
        }
        
        if (!userData.email?.trim()) {
            throw new ApiError(400, "Email is required");
        }
        
        if (!userData.password?.trim()) {
            throw new ApiError(400, "Password is required");
        }

        const name = userData.name.trim();
        const email = userData.email.trim().toLowerCase();
        const password = userData.password.trim();
 

        //Regex validations
        if(!EMAIL_REGEX.test(email)){
            throw new ApiError(400, "Invalid email");
        }

        if(!PASSWORD_REGEX.test(password)){
            throw new ApiError(400, "Invalid password");
        }

        if(!NAME_REGEX.test(name)){
            throw new ApiError(400, "Invalid name");
        }    
        

        return {name, email, password};
}

const validateLoginUser = (userData) => {
        //Required fileds
        if (!userData.email?.trim()) {
            throw new ApiError(400, "Email is required");
        }
        
        if (!userData.password?.trim()) {
            throw new ApiError(400, "Password is required");
        }

        const email = userData.email.trim().toLowerCase();
        const password = userData.password.trim();
 

        //Regex validations
        if(!EMAIL_REGEX.test(email)){
            throw new ApiError(400, "Invalid email");
        }

        if(!PASSWORD_REGEX.test(password)){
            throw new ApiError(400, "Invalid password");
        }

        return {email, password};

}

module.exports = { validateRegisterUser, validateLoginUser };