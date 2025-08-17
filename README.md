
# FULL STACK CRUD APPLICATION-BACKEND

## ⚙️ Backend Overview

This backend is built with **Spring Boot**, **Spring Data JPA**, and **MySQL** to handle all CRUD operations via REST APIs.

### 📦 Key Technologies

* **Spring Boot** 🏗️ - Backend framework
* **Spring Data JPA** 💾 - Database operations
* **MySQL** 🛢️ - Relational database
* **Java 17+** ☕ - Modern Java features
* **Maven** 📦 - Dependency management

---

### 🔑 Backend Features

* **User Management** 👥
  - Add a new user ➕
  - Get all users 📋
  - Get a user by ID 🔍
  - Update user ✏️
  - Delete user ❌

* **Exception Handling** ⚠️
  - `UserNotFoundException` triggers 404 responses
  - Global handling using `@ControllerAdvice`

* **CORS Support** 🌐
  - Allows frontend on `localhost:3000` to access backend

---

### 🗂️ Backend Structure
```
src/main/java/com/example/CRUDApplication
│
├── controller
│ └── UserController.java # Handles all CRUD API endpoints
│
├── exception
│ ├── UserNotFoundException.java # Custom exception
│ └── UserNotFoundAdvice.java # Global exception handler
│
├── model
│ └── User.java # JPA entity for user
│
└── repository
└── UserRepository.java # Interface for database operations
```
---


### 🛠️ API Endpoints


| Method | Endpoint                  | Description                      |
|--------|---------------------------|----------------------------------|
| POST   | `/api/user/adduser`       | Add a new user                   |
| GET    | `/api/user/getusers`      | Retrieve all users               |
| GET    | `/api/user/{id}`          | Retrieve a user by ID            |
| PUT    | `/api/user/{id}`          | Update a user by ID              |
| DELETE | `/api/user/{id}`          | Delete a user by ID              |

> Example JSON response for GET `/api/user/1`:
```json
{
  "id": 1,
  "username": "johndoe",
  "name": "John Doe",
  "email": "john@example.com"
}

```
---
## 🎯 Testing

  ### Used Postman

* Add user: POST /adduser

* View all users: GET /getusers

* View single user: GET /{id}

* Update user: PUT /{id}

* Delete user: DELETE /{id}


  ---
  ### 📦 Demo
  <img width="1918" height="1008" alt="getuserById" src="https://github.com/user-attachments/assets/9d8be00e-58fe-471c-8f58-ec9a793ca73f" />
  <img width="1917" height="1007" alt="getusers" src="https://github.com/user-attachments/assets/4d50954a-9654-4169-a6db-2a276a3bf1d9" />

 ---
 ## Author

- [Dinuki Prarthana](https://github.com/Dinuki85/SpringbootCRUDAppliCATION)
- Full Stack Web Developer


