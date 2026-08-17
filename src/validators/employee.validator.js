const Joi = require("joi");
const { ALLOWED_SORT_FIELDS } = require("../constants/employee.constants");

const createEmployeeSchema = Joi.object({
  fullName: Joi.string()
    .trim()
    .min(2)
    .max(100)
    .required(),

  email: Joi.string()
    .trim()
    .lowercase()
    .email()
    .required(),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone must contain exactly 10 digits"
    }),

  salary: Joi.number()
    .positive()
    .required(),

  designation: Joi.string()
    .trim()
    .required(),

  department: Joi.string()
    .trim()
    .required(),

  dateOfJoining: Joi.date()
    .required(),

  dateOfBirth: Joi.date()
    .max("now")
    .required(),

  isServingNoticePeriod: Joi.boolean()
    .default(false),

  noticePeriodDays: Joi.number()
    .integer()
    .min(0)
    .default(0)
});

const updateEmployeeSchema = Joi.object({
    fullName: Joi.string().trim().min(2).max(100),
  
    email: Joi.string().trim().lowercase().email(),
  
    phone: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .messages({
        "string.pattern.base": "Phone must contain exactly 10 digits"
      }),
  
    salary: Joi.number().positive(),
  
    designation: Joi.string().trim(),
  
    department: Joi.string().trim(),
  
    dateOfJoining: Joi.date(),
  
    dateOfBirth: Joi.date().max("now"),
  
    isServingNoticePeriod: Joi.boolean(),
  
    noticePeriodDays: Joi.number()
      .integer()
      .min(0)
  }).min(1);

const getAllEmployeesQuerySchema = Joi.object({
page: Joi.number()
    .integer()
    .min(1)
    .default(1),

limit: Joi.number()
    .integer()
    .min(1)
    .default(10),

search: Joi.string()
    .trim()
    .allow(""),

department: Joi.string()
    .trim(),

designation: Joi.string()
    .trim(),

sortBy: Joi.string()
    .valid(...ALLOWED_SORT_FIELDS)
    .default("employeeId"),

order: Joi.string()
    .valid("asc", "desc")
    .default("asc")
});

const employeeIdParamSchema = Joi.object({
    employeeId: Joi.string()
      .pattern(/^EMP\d+$/)
      .required()
      .messages({
        "string.pattern.base": "Invalid employee ID"
      })
  });


module.exports = {
  createEmployeeSchema,
  updateEmployeeSchema,
  getAllEmployeesQuerySchema,
  employeeIdParamSchema
};