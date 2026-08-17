const Joi = require("joi");
const {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NAME_REGEX
} = require("../constants/validators.constants");
const { USER_ROLES } =  require("../constants/user.constants");
const registerSchema = Joi.object({
  name: Joi.string()
    .trim()
    .pattern(NAME_REGEX)
    .required()
    .messages({
      "string.empty": "Name is required",
      "string.pattern.base": "Invalid name",
      "any.required": "Name is required"
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .pattern(EMAIL_REGEX)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.pattern.base": "Invalid email",
      "any.required": "Email is required"
    }),

  password: Joi.string()
    .pattern(PASSWORD_REGEX)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": "Invalid password",
      "any.required": "Password is required"
    })
});

const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .pattern(EMAIL_REGEX)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.pattern.base": "Invalid email",
      "any.required": "Email is required"
    }),

  password: Joi.string()
    .pattern(PASSWORD_REGEX)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base": "Invalid password",
      "any.required": "Password is required"
    })
});

const updateUserRoleSchema = Joi.object({
  role: Joi.string()
      .valid(...Object.values(USER_ROLES))
      .required()
      .messages({
          "any.only": `Role must be one of: ${Object.values(USER_ROLES).join(", ")}`,
          "any.required": "Role is required"
      })
});

module.exports = {
  registerSchema,
  loginSchema,
  updateUserRoleSchema
};