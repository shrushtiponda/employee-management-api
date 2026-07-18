const employeeService = require("../services/employee.service");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createEmployee = asyncHandler(async (req, res) => {
    const employee = await employeeService.createEmployee(req.body);
    return res.status(201).json( new ApiResponse(201,employee, "Employee created successfully") );
}); 

const getAllEmployees = asyncHandler(async (req,res)=>{
    const employees = await employeeService.getAllEmployees(req.query);
    return res.status(200).json( new ApiResponse(200,employees, "Employees fetched successfully") );
});

const getEmployee = asyncHandler(async (req, res)=>{
    const employee = await employeeService.getEmployee(req.params.employeeId);
    return res.status(200).json(new ApiResponse(200, employee, "employee fetched successfully"));
});

const updateEmployee = asyncHandler(async (req, res)=>{
    const employee = await employeeService.updateEmployee(req.params.employeeId, req.body);
    return res.status(200).json(new ApiResponse(200, employee, "employee updated successfully"));
});

const deleteEmployee = asyncHandler(async (req, res)=>{
    const employee = await employeeService.deleteEmployee(req.params.employeeId);
    return res.status(200).json( new ApiResponse(200,employee, "Employee deleted successfully") );
});

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};