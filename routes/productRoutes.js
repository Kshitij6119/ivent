import express from "express";
import {
  addProduct,
  updateQuantity,
  getProducts,
} from "../controllers/productController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();
console.log("products");
router.post("/add", verifyToken, addProduct);
router.put("/:id/quantity", verifyToken, updateQuantity);
router.get("/get", verifyToken, getProducts);

export default router;
