import mongoose from "mongoose";
console.log("start");
import dotenv from "dotenv";
dotenv.config();
console.log("hello");
export const connectDB = async () => {
  console.log("hello");
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    console.log("hello");
    process.exit(1);
  }
};
