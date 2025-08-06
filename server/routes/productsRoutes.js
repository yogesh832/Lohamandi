const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");

// Cloudinary Config
cloudinary.config({
  cloud_name: "dil5x4cxh",
  api_key: "981397987531997",
  api_secret: "SvG1gNicYWgJ904xOZun2wO2il4",
});

// Multer (memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* ---------------------------
   GET ALL PRODUCTS
---------------------------- */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

/* ---------------------------
   GET SINGLE PRODUCT BY SLUG
---------------------------- */
router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving product" });
  }
});

/* ---------------------------
   CREATE PRODUCT
---------------------------- */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, slug, additional } = req.body;

    if (!title || !content || !slug || !req.file) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ folder: "product_images" }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }).end(req.file.buffer);
    });

    const product = new Product({
      title,
      slug,
      content,
      additional,
      image: result.secure_url,
    });

    await product.save();
    res.status(201).json({ message: "Product created", data: product });
  } catch (err) {
    console.error("Create error:", err);
    res.status(500).json({ message: "Failed to create product" });
  }
});

/* ---------------------------
   UPDATE PRODUCT
---------------------------- */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, content, slug, additional } = req.body;

    const updateFields = {
      title,
      slug,
      content,
      additional,
    };

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "product_images" }, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }).end(req.file.buffer);
      });

      updateFields.image = result.secure_url;
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update product" });
  }
});

/* ---------------------------
   DELETE PRODUCT
---------------------------- */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found to delete" });

    res.json({ message: "Product deleted", data: deleted });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

module.exports = router;
