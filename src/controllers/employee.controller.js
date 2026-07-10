const employeeService = require("../services/employee.service");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createEmployee = asyncHandler(async (req, res) => {
    const employee = await employeeService.createEmployee(req.body);
    return res.status(201).json( new ApiResponse(201,employee, "Employee created successfully") );
});

module.exports = {
    createEmployee
};