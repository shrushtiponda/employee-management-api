const ApiResponse = require("../utils/ApiResponse");

const getHealth = (req, res) => {
    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Employee Management API is running"
        )
    );
};

module.exports = {
    getHealth,
};