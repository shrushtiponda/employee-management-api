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