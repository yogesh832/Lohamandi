const express = require("express");
const router = express.Router();
const data = require("../models/data");

// @route   POST /api/data
// @desc    Save mobile number
router.post("/", async (req, res) => {
  const { mobile } = req.body;

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return res.status(400).json({ error: "Invalid mobile number" });
  }

  try {
    const newdata = new data({ mobile });
    await newdata.save();
    res.status(201).json({ message: "Mobile number saved successfully" });
  } catch (err) {
    console.error("Error saving mobile:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// @route   GET /api/data
// @desc    Get all mobile numbers
router.get("/", async (req, res) => {
  try {
    const datas = await data.find().sort({ submittedAt: -1 });
    res.status(200).json(datas);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
