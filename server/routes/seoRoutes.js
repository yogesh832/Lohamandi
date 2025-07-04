const express = require("express");
const router = express.Router();
const SeoPage = require("../models/SeoPage");

// ✅ GET all SEO pages
router.get("/", async (req, res) => {
  try {
    const pages = await SeoPage.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO pages" });
  }
});

// ✅ GET one by slug
router.get("/:slug", async (req, res) => {
  const requestedSlug = "/" + req.params.slug;
  console.log("Fetching SEO for:", requestedSlug);

  try {
    const page = await SeoPage.findOne({ slug: requestedSlug });
    if (!page) {
      return res.status(404).json({ message: "SEO page not found" });
    }
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch SEO page" });
  }
});

// ✅ CREATE new SEO page (auto-fix slug)
router.post("/", async (req, res) => {
  try {
    let { slug } = req.body;
    if (!slug) return res.status(400).json({ message: "Slug is required" });

    // Ensure slug starts with "/"
    slug = slug.startsWith("/") ? slug : `/${slug}`;
    req.body.slug = slug;

    const existing = await SeoPage.findOne({ slug });
    if (existing) return res.status(409).json({ message: "Slug already exists" });

    const newPage = new SeoPage(req.body);
    await newPage.save();
    res.json(newPage);
  } catch (error) {
    res.status(500).json({ message: "Failed to create SEO page" });
  }
});

// ✅ UPDATE existing SEO page
router.put("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug.startsWith("/") ? req.params.slug : `/${req.params.slug}`;
    const updated = await SeoPage.findOneAndUpdate({ slug }, req.body, { new: true });

    if (!updated) return res.status(404).json({ message: "SEO page not found to update" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update SEO page" });
  }
});

module.exports = router;
