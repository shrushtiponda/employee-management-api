# Employee Management API

A RESTful Employee Management API built with **Node.js**, **Express.js**, and **MongoDB** following a layered architecture (Routes → Controllers → Services → Models). The project demonstrates backend development best practices including CRUD operations, custom error handling, pagination, search, filtering, sorting, and clean code organization.

---

## 🚀 Features

### Employee Management

* Create Employee
* Get All Employees
* Get Employee by Employee ID
* Update Employee
* Delete Employee

### Advanced Listing

* Pagination
* Search by Employee ID, Full Name, and Email
* Filter by Department
* Filter by Designation
* Sort by supported fields
* Pagination metadata (page, limit, total records, total pages)

### Error Handling

* Centralized Error Middleware
* Custom `ApiError`
* Standardized `ApiResponse`
* Async Error Handler

### Employee ID Generation

Employees receive automatically generated IDs in the following format:

```
EMP0001
EMP0002
EMP0003
```

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# Project Structure

```
src
│
├── config
│
├── constants
│
├── controllers
│
├── middlewares
│
├── models
│
├── routes
│
├── services
│
├── utils
│
└── app.js
```

---

# API Endpoints

## Create Employee

```
POST /employees
```

---

## Get All Employees

```
GET /employees
```

### Query Parameters

| Parameter   | Description                          |
| ----------- | ------------------------------------ |
| page        | Page number                          |
| limit       | Records per page                     |
| search      | Search by Employee ID, Name or Email |
| department  | Filter by Department                 |
| designation | Filter by Designation                |
| sortBy      | Field to sort                        |
| order       | asc / desc                           |

Example

```
GET /employees?page=1&limit=10&search=john&department=Engineering&sortBy=salary&order=desc
```

---

## Get Employee

```
GET /employees/:employeeId
```

Example

```
GET /employees/EMP0001
```

---

## Update Employee

```
PUT /employees/:employeeId
```

---

## Delete Employee

```
DELETE /employees/:employeeId
```

---

# Pagination Response

```json
{
  "statusCode": 200,
  "data": {
    "employees": [
      {
        "employeeId": "EMP0001",
        "fullName": "John Doe"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "totalRecords": 25,
      "totalPages": 3
    }
  },
  "message": "Employees fetched successfully"
}
```

---

# Installation

Clone the repository

```
git clone <repository-url>
```

Install dependencies

```
npm install
```

Create a `.env` file

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Run the application

```
npm run dev
```

---

# Design Decisions

* Layered Architecture
* Business Logic separated from Controllers
* Centralized Error Handling
* Dynamic Query Building
* Auto-generated Employee IDs
* Custom API Response Structure
* Query Validation
* Clean and Maintainable Code

---

# Future Enhancements

* JWT Authentication
* Role-Based Access Control (RBAC)
* Soft Delete
* Request Validation using Joi
* Unit Testing
* Docker Support
* API Documentation using Swagger

---

# Author

**Shrushti Ponda**

Backend Developer | Node.js | Express.js | MongoDB
