# 🛒 Inventory Management Tool (IMS) - Backend API

This is a backend REST API built with **Node.js**, **Express.js**, and **MongoDB** to manage inventory for a small business. It provides APIs for user authentication, product management, and inventory tracking.

---

## 🚀 Features

- ✅ User Authentication (JWT-based login)
- ✅ Add new products to inventory
- ✅ Update product quantity
- ✅ Fetch all products with inventory
- ✅ Swagger API Documentation
- ✅ MongoDB schema for users and products

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for auth
- **bcryptjs** for password hashing
- **Swagger** for API documentation

---

## 📁 Project Structure
```bash
ims-backend/
├── app.js # Main server entry point
├── .env # Environment variables
├── controllers/ # Controllers for route logic
│ ├── authController.js
│ └── productController.js
├── models/ # Mongoose models
│ ├── User.js
│ └── Product.js
├── middlewares/ # Middleware (e.g. JWT auth)
│ └── authMiddleware.js
├── routes/ # Route definitions
│ ├── authRoutes.js
│ └── productRoutes.js
├── config/ # DB connection config
│ └── db.js
├── swagger.js # Swagger UI setup
├── README.md # Project documentation
└── postman_collection.json # Postman collection for testing 
```
## 📦 Environment Variables
Create a .env file in the root directory with:
```bash
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ims_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```
## 🚀 Getting Started
 1. Clone the repo
 ```bash
   git clone https://github.com/yourusername/ims-backend.git
 ```
2. Install dependencies:
```bash
 npm install
```

3.Start the server:
```bash
npm start       # for production
```
Server will run on: http://localhost:8080

4.Visit Swagger docs at:
```bash
http://localhost:8080/api-docs
```
## 📡 API Endpoints

🧑‍💻 Authentication

🔸 POST /register — Create a new user account
🔸 POST /login — Authenticate and receive JWT token

📦 Product Management (Protected by JWT)
🆕 POST /products — Add a new product to inventory
🔁 PUT /products/:id/quantity — Update product quantity
📃 GET /products?page=1&limit=10 — Retrieve paginated list of products
ℹ️ Note: For all product routes, include the token in the request header:
```bash
Authorization: Bearer <your_jwt_token>
```

## 🔐 Example Auth Request

Register
```bash
POST /register
Content-Type: application/json

{
  "username": "FImoney",
  "password": "Money"
}
```
Login
```bash
POST /login
Content-Type: application/json

{
  "username": "FImoney",
  "password": "Money"
}
```
Response:
```bash
{
  "access_token": "your_jwt_token"
}
```
## 🔐 Example Auth Request

Register
<img width="1401" height="833" alt="add" src="https://github.com/user-attachments/assets/9e550e48-8cdb-4bad-b31b-a5766b0c9642" />


Login
<img width="1383" height="758" alt="login" src="https://github.com/user-attachments/assets/5e4f285a-9d43-4b01-8cf8-25b9c601d5b7" />

## 📦 Add Product Example
<img width="1422" height="795" alt="get" src="https://github.com/user-attachments/assets/3579c078-3d3c-46e8-88b4-2b4d8d43defe" />


📑 Swagger API Docs

Visit:
http://localhost:8080/api-docs

🧪 Postman Collection

Import the included postman_collection.json into Postman to test all endpoints.
