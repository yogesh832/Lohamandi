const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    additional: String,
    content: String,
    image: String,

    // ✅ Meta fields
    metaTitle: String,
    metaKeywords: String,
    metaDescription: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
