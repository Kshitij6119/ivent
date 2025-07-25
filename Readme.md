# Inventory Management System (IMS) - Backend

This project is a simple backend for managing product inventory with user authentication using **Node.js**, **Express**, **MongoDB**, and **JWT**.

---

## ✅ Features

- User Registration and Login (JWT Authentication)
- Add Products
- Update Product Quantity
- Get Products (with pagination)
- Swagger API documentation
- Postman collection for testing

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Auth
- dotenv for environment variables
- Swagger for API documentation

---

## 📁 Project Structure

```
ims-backend/
├── app.js
├── .env
├── controllers/
│   ├── authController.js
│   └── productController.js
├── models/
│   ├── User.js
│   └── Product.js
├── middlewares/
│   └── authMiddleware.js
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
├── config/
│   └── db.js
├── swagger.js
├── README.md
└── postman_collection.json
```

---

## 📦 Environment Variables

Create a `.env` file in the root directory with:
```env
PORT=8080
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ims_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

---

## 🚀 Getting Started

1. Clone the repo:
```bash
git clone <repo-url>
cd ims-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev     # for development with nodemon
# or
npm start       # for production
```

4. Visit Swagger docs at:
```
http://localhost:8080/api-docs
```

---

## 📬 API Endpoints

### 🔐 Auth
- `POST /register` - Register new user
- `POST /login` - Login and get JWT token

### 📦 Products (JWT required)
- `POST /products` - Add new product
- `PUT /products/:id/quantity` - Update quantity
- `GET /products?page=1&limit=10` - Get paginated products

---

## 🧪 Testing with Postman

Use the Postman collection provided:
📁 `IMS_Postman_Collection.json`

Steps:
1. Import into Postman
2. Register & login to get token
3. Use token as `Bearer <token>` in Authorization header

---

## 📄 API Docs with Swagger

After starting the server, open:
```
http://localhost:8080/api-docs
```
You will see an interactive Swagger UI with all routes documented.

---

## 📌 License

MIT License. Free to use and modify for interview or educational projects.