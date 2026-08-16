const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Management API",
      version: "1.0.0",
      description:
        "Employee Management API with JWT authentication and RBAC",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        RegisterRequest: {
            type: "object",
            required: ["name", "email", "password"],
            properties: {
              name: {
                type: "string",
                example: "Shrushti Ponda"
              },
              email: {
                type: "string",
                example: "user@gmail.com"
              },
              password: {
                type: "string",
                example: "Password@123"
              }
            }
          },
        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              example: "admin@gmail.com",
            },
            password: {
              type: "string",
              example: "Admin@123",
            },
          },
        },
        EmployeeCreateRequest: {
            type: "object",
            required: [
                "fullName",
                "email",
                "phone",
                "department",
                "designation",
                "salary",
                "dateOfJoining",
                "dateOfBirth",
                "noticePeriodDays"
              ],
            properties: {

                fullName: {
                    type: "string",
                    example: "John Doe"
                  },
              
                  email: {
                    type: "string",
                    format: "email",
                    example: "john.doe@example.com"
                  },
              
                  phone: {
                    type: "string",
                    example: "9876543210"
                  },
              
                  department: {
                    type: "string",
                    example: "Engineering"
                  },
              
                  designation: {
                    type: "string",
                    example: "Software Engineer"
                  },
              
                  salary: {
                    type: "number",
                    example: 60000
                  },
              
                  dateOfJoining: {
                    type: "string",
                    format: "date",
                    example: "2026-08-17"
                  },
              
                  dateOfBirth: {
                    type: "string",
                    format: "date",
                    example: "1995-05-10"
                  },
              
                  noticePeriodDays: {
                    type: "integer",
                    example: 30
                  }
            },  
        },
        Employee: {
          type: "object",
          properties: {
            employeeId: {
              type: "string",
              example: "EMP0001",
            },
    
            fullName: {
              type: "string",
              example: "John Doe",
            },
    
            designation: {
              type: "string",
              example: "Software Engineer",
            },
    
            department: {
              type: "string",
              example: "Engineering",
            },
          },
        },

        RoleUpdateRequest: {
            type: "object",
            required: ["role"],
            properties: {
              role: {
                type: "string",
                enum: ["ADMIN", "HR", "MANAGER", "USER"],
                example: "HR"
              }
            }
          }
      },
    },
  },

  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);