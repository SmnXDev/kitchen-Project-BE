const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactRoutes = require("./route/contactRoutes");
const dotenv = require("dotenv");
const path = require("path");dotenv.config()

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

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
