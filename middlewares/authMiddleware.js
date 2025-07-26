import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
console.log("hello");
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Auther: ",authHeader);
  const token = authHeader;
  console.log("Tokeb: ",token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });
console.log("hello");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Decoded: ",decoded);
    next();
  } catch (err) {
    console.log("hello");
    return res.status(403).json({ message: "Forbidden" });
  }
};
