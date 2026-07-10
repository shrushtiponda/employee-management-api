const Employee = require("../models/employee.model");
const {
    EMPLOYEE_PREFIX,
    EMPLOYEE_ID_LENGTH,
} = require("../constants/employee.constants");

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

module.exports = {
    createEmployee,
};