const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    tag: String,
    img: String,
    date: String,
    month: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
