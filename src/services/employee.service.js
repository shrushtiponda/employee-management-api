const Employee = require("../models/employee.model");
const {
    EMPLOYEE_PREFIX,
    EMPLOYEE_ID_LENGTH,
    ALLOWED_SORT_FIELDS
} = require("../constants/employee.constants");
const ApiError = require("../utils/ApiError");
const generateEmployeeID = async () => {

    const highestEmployee = await Employee
        .findOne()
        .sort( { employeeId: -1 } );

    if(!highestEmployee){
        return  `${EMPLOYEE_PREFIX}${"1".padStart(EMPLOYEE_ID_LENGTH, "0")}`;
    }

    const employeeId = parseInt(highestEmployee.employeeId.slice(EMPLOYEE_PREFIX.length), 10);

    const newEmployeeID = employeeId + 1;

    const formattedEmployeeId = newEmployeeID
                                .toString()
                                .padStart(EMPLOYEE_ID_LENGTH, "0");

    const newHighestEmployeeId =  `${EMPLOYEE_PREFIX}${formattedEmployeeId}`;
    
    return newHighestEmployeeId;

};


const createEmployee = async (employeeData) => {
    const newEmployeeId = await generateEmployeeID();

    employeeData.employeeId = newEmployeeId;

    const employee = await Employee.create(employeeData);

    return employee;
};

const getAllEmployees = async (queryParams)=>{
    const page = queryParams.page ? Number(queryParams.page) : 1;
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;

    const {
        search,
        department,
        designation,
        sortBy = "employeeId",
        order = "asc"
    } = queryParams;

   
    if (
        !Number.isInteger(page) ||
        !Number.isInteger(limit) ||
        page < 1 ||
        limit < 1
    ) {
        throw new ApiError(400, "Page and limit must be positive integers");
    }

    if (!ALLOWED_SORT_FIELDS.includes(sortBy)) {
        throw new ApiError(400, "Invalid sort field");
    }

    if (order !== "asc" && order !== "desc") {
        throw new ApiError(400, "Order must be either 'asc' or 'desc'");
    }

    const sort = {};
    const query = {};

    if (search) {
        query.$or = [
            { employeeId: { $regex: search, $options: "i" } },
            { fullName: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } }
        ];
    }

    if(department){
        query.department = department;
    }

    if(designation){
        query.designation = designation;
    }

    sort[sortBy] = order === "desc" ? -1 : 1;

    const skip = (page - 1) * limit;
    
    const [employees, totalRecords] = await Promise.all([
        Employee.find(query)
            .sort(sort)
            .skip(skip)
            .limit(limit),
    
        Employee.countDocuments(query)
    ]);
    
    
    return {
        employees,
        pagination: {
            page,
            limit,
            totalRecords,
            totalPages: Math.ceil(totalRecords / limit)
        }
    };
};

const getEmployee = async (employeeId)=>{
    const employee = await Employee.findOne({employeeId: employeeId},{
        _id: 0,
        __v: 0
    });
    if (!employee) {    
        throw new ApiError(404, "Employee not found");
    }

    return employee;
}

const updateEmployee = async (employeeId, updatedQuery)=>{
    const employee = await Employee.findOneAndUpdate({employeeId}, updatedQuery, {new:true, runValidators: true});

    if (!employee) {
        throw new ApiError(404, "Employee not found");
    }

    return employee;
}

const deleteEmployee = async (employeeId)=>{
    const employee = await Employee.findOneAndDelete({employeeId});

    if (!employee) {
        throw new ApiError(404, "Employee not found");
    }

    return employee;
}

module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
};