const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db"); // ✅ CORRECT for CommonJS

const app = express();
app.use(cors());
app.use(express.json());

dbConnection();

app.use("/api/seo", require("./routes/seoRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

app.listen(8000, () => console.log("Server running on port 8000"));
