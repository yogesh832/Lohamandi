// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");

// Cloudinary config
cloudinary.config({
  cloud_name: "dil5x4cxh",
  api_key: "981397987531997",
  api_secret: "SvG1gNicYWgJ904xOZun2wO2il4",
});

// Multer setup (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

// POST new blog with image upload
router.post("/", upload.single("img"), async (req, res) => {
  try {
    const { title, desc, tag, date, month } = req.body;

    if (!title || !desc || !tag || !req.file || !date || !month) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "blog_images" }, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }).end(req.file.buffer);
    });

    const newBlog = new Blog({
      title,
      desc,
      tag,
      img: result.secure_url, // Cloudinary URL
      date,
      month,
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully" });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Failed to create blog" });
  }
});

module.exports = router;
