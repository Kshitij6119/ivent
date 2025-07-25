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

## 📦 Environment Variables
Create a .env file in the root directory with:

PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ims_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret

##🚀 Getting Started
 1. Clone the repo
    git clone <repo-url>
    cd ims-backend
    
2. Install dependencies:
npm install

3.Start the server:
npm start       # for production
Server will run on: http://localhost:8080

4.Visit Swagger docs at:
http://localhost:8080/api-docs



