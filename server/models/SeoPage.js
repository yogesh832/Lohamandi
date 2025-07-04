const mongoose = require("mongoose");

const seoPageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: String,
  description: String,
  keywords: String,
  ogImage: String,
  canonical: String,
  robots: { type: String, default: "index,follow" }
});

module.exports = mongoose.model("SeoPage", seoPageSchema);
