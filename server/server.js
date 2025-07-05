const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
const seoRoutes = require("./routes/seoRoutes");

const app = express();

// ✅ Use proper CORS setup
app.use(cors({
  origin: "*", // or restrict to specific domains like "https://yourdomain.com"
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ Connect to MongoDB
dbConnection();

// ✅ Mount routes (enable these only if verified)
app.use("/api/seo", seoRoutes);
app.use("/api/contact", require("./routes/contactRoutes"));

// ✅ Start server
app.listen(8000, () => console.log("Server running on port 8000"));
