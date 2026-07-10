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

    return res.status(statusCode).json({
        statusCode,
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
    });

};

module.exports = errorHandler;
