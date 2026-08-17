# Employee Management API

A RESTful Employee Management API built with Node.js, Express.js, and MongoDB.

The project demonstrates backend development concepts such as authentication, authorization, role-based access control (RBAC), request validation, API documentation, pagination, filtering, and sorting.

---

## Features

### Authentication

- User registration
- User login
- JWT-based authentication
- Password hashing with bcrypt

### Authorization (RBAC)

Four user roles are supported:

- ADMIN
- HR
- MANAGER
- USER

### Employee Management

- Create employee
- Get employee details
- Get all employees
- Update employee information
- Delete employees

### Advanced API Features

- Search
- Filtering
- Sorting
- Pagination

### Validation

- Joi request validation
- Request body validation
- Route parameter validation
- Query parameter validation

### API Documentation

- Interactive Swagger documentation

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Node.js | Runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Joi | Request validation |
| Swagger | API documentation |

---

## Project Structure

```text
src
├── config
├── constants
├── controllers
├── middlewares
├── models
├── routes
├── services
├── utils
└── validators
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```

### Start the server

```bash
npm run dev
```

---

## API Documentation

Open Swagger UI:

```text
http://localhost:5000/api-docs
```

---

## API Endpoints

### User APIs

| Method | Endpoint | Access |
| --- | --- | --- |
| POST | `/users/register` | Public |
| POST | `/users/login` | Public |
| PATCH | `/users/{id}/role` | ADMIN |

### Employee APIs

| Method | Endpoint | Access |
| --- | --- | --- |
| POST | `/employees` | ADMIN, HR |
| GET | `/employees` | All authenticated users |
| GET | `/employees/{employeeId}` | All authenticated users |
| PUT | `/employees/{employeeId}` | ADMIN, HR, MANAGER |
| DELETE | `/employees/{employeeId}` | ADMIN |

---

## Role Permissions

| Operation | ADMIN | HR | MANAGER | USER |
| --- | :---: | :---: | :---: | :---: |
| Create Employee | ✅ | ✅ | ❌ | ❌ |
| View Employees | ✅ | ✅ | ✅ | ✅ |
| Update Employee | ✅ | ✅ | ✅ | ❌ |
| Delete Employee | ✅ | ❌ | ❌ | ❌ |
| Assign Roles | ✅ | ❌ | ❌ | ❌ |

---

## Author

**Shrushti Ponda**

Backend Developer

- Node.js
- Express.js
- MongoDB
- REST APIs
- JWT Authentication

GitHub:

https://github.com/shrushtiponda
