const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");

const app = express();
const PORT = 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to DB
dbConnection();

// Routes
app.use("/api/seo", require("./routes/seoRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/data", require("./routes/dataRoutes"));
app.use("/api/enquiry", require("./routes/enquireRoutes")); // Enquiry route

// Root route for testing
app.get("/", (req, res) => {
  res.send("🚀 API is up and running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
