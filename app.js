import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { swaggerDocs } from "./swagger.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log("hello");
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
console.log("main project");
app.get("/",(req,res)=>{
    res.send("Api working");
})
swaggerDocs(app);
connectDB();
console.log("hello");
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
