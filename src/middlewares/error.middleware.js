const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {

    let statusCode = err.statusCode || 500;
    let message = err.message;
    let errors = err.errors || [];

    if (err.name === "ValidationError") {

        statusCode = 400;

        message = "Validation failed";

        errors = Object.values(err.errors).map(error => ({
            field: error.path,
            message: error.message
        }));
    }

    if (err.code === 11000) {
        statusCode = 409;
    
        const field = Object.keys(err.keyPattern)[0];
    
        message = `${field} already exists`;
    
        errors = [
            {
                field,
                message: `${field} already exists`
            }
        ];
    }
        
    return res.status(statusCode).json({
        statusCode,
        success: false,
        message,
        errors
    });

};

module.exports = errorHandler;
