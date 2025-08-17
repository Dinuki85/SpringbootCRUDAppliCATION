# FULL STACK CRUD APPLICATION

Welcome to the **Full Stack CRUD Application**! 🚀  
This project demonstrates a fully functional CRUD system for managing users using **React.js frontend** and **Spring Boot backend** with **MySQL database**.

---

## 🎨 Frontend Overview

This frontend is built with **React.js**, **Bootstrap 5**, and **Axios** to create a **fully interactive CRUD interface**.

### 🏠 Pages

* **Home Page** 🖥️
  - Displays all users in a **responsive table**.
  - Actions:
    - View user details 🔍
    - Edit user ✏️
    - Delete user ❌
    - Navigate to Add User page ➕

* **Add User Page** ➕
  - Form to add a new user.
  - Features:
    - Enter name, username, email ✍️
    - Submit form to backend ✅
    - Cancel and return to home page ❌

* **Edit User Page** ✏️
  - Pre-filled form with existing user data.
  - Features:
    - Update user details 📝
    - Submit changes to backend ✅
    - Cancel and return to home page ❌

* **View User Page** 🔍
  - Shows user details in a **card layout**.
  - Features:
    - View full name, username, email 📋
    - Navigate back to home page ⬅️

---

### ⚡ Frontend Features

* **Responsive Navbar** 🌐
  - Links to Home and Add User pages
  - Mobile-friendly hamburger menu

* **Interactive Buttons** 🔘
  - Add, Edit, View, Delete actions
  - Styled with **Bootstrap 5**

* **Axios Integration** 🌊
  - Connects frontend to backend APIs
  - Handles GET, POST, PUT, DELETE requests

* **React Router** 🛣️
  - Smooth navigation between pages
  - URL parameters for edit/view actions

---

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
````
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

````
--- 

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
🙌 Acknowledgements

React ⚛️

Bootstrap 💅

Axios 🌊

React Router DOM 🛣️

Spring Boot 🏗️

Spring Data JPA 💾

MySQL 🛢️
