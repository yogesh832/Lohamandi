const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
dbConnection();

// Mount Routes
app.use("/api/seo", require("./routes/seoRoutes"));      // ✅ Slug-safe
app.use("/api/blog", require("./routes/blogRoutes"));    // ✅ Blog endpoint
app.use("/api/contact", require("./routes/contactRoutes")); // ✅ Contact messages

// Start Server
app.listen(8000, () => console.log("Server running on port 8000"));
