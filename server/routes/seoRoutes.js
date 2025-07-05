// routes/seoRoutes.js
const express = require("express");
const router = express.Router();
const SeoPage = require("../models/SeoPage");

// Get all SEO pages
router.get("/", async (req, res) => {
  try {
    const pages = await SeoPage.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO pages" });
  }
});

// Create a new SEO page
router.post("/", async (req, res) => {
  try {
    let { slug } = req.body;
    if (!slug) return res.status(400).json({ message: "Slug is required" });

    slug = "/" + slug.replace(/^\/+/, "");
    req.body.slug = slug;

    const existing = await SeoPage.findOne({ slug });
    if (existing) return res.status(409).json({ message: "Slug already exists" });

    const newPage = new SeoPage(req.body);
    await newPage.save();

    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ message: "Failed to create SEO page" });
  }
});

// Get SEO page by slug
router.get("/:slug", async (req, res) => {
  try {
    const slug = "/" + req.params.slug.replace(/^\/+/, "");
    const page = await SeoPage.findOne({ slug });

    if (!page) return res.status(404).json({ message: "SEO page not found" });
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO page" });
  }
});

// Update SEO page by slug
router.put("/:slug", async (req, res) => {
  try {
    const slug = "/" + req.params.slug.replace(/^\/+/, "");
    const updated = await SeoPage.findOneAndUpdate({ slug }, req.body, { new: true });

    if (!updated) return res.status(404).json({ message: "SEO page not found to update" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update SEO page" });
  }
});

// Delete SEO page by slug
router.delete("/:slug", async (req, res) => {
  try {
    const slug = "/" + req.params.slug.replace(/^\/+/, "");
    const deleted = await SeoPage.findOneAndDelete({ slug });

    if (!deleted) return res.status(404).json({ message: "SEO page not found to delete" });

    res.json({ message: "SEO page deleted successfully", slug });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete SEO page" });
  }
});

module.exports = router;
