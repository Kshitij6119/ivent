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
    git clone <repo-url>
    cd ims-backend
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


