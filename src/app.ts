import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoutes from "./route/contactRoutes";
import dotenv from "dotenv";
import path from "path";
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Routes
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.use("/api", contactRoutes);

// Database connection
// mongoose
//   .connect(process.env.MONGO_URI || "")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Failed to connect to MongoDB", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
