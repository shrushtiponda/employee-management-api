const EMPLOYEE_PREFIX = "EMP";
const EMPLOYEE_ID_LENGTH = 4;

const ALLOWED_SORT_FIELDS = [
    "employeeId",
    "fullName",
    "email",
    "department",
    "designation",
    "salary",
    "createdAt"
];

module.exports = {
    EMPLOYEE_PREFIX,
    EMPLOYEE_ID_LENGTH,
    ALLOWED_SORT_FIELDS
};