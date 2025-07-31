const express = require("express");
const router = express.Router();
const data = require("../models/data");
const nodemailer = require("nodemailer");

// Setup Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "upadhayayyogesh832@gmail.com",
    pass: "exzl urpm udfq kzsq", // App password from Google
  },
});

// Check transporter once on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Email transporter failed:", err);
  } else {
    console.log("✅ Transporter is ready to send emails.");
  }
});

// POST /api/data — Save number and send mail
router.post("/", async (req, res) => {
  console.log("📩 Received POST /api/data with body:", req.body);

  const { mobile } = req.body;

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    console.warn("⚠️ Invalid mobile number received:", mobile);
    return res.status(400).json({ error: "Invalid mobile number" });
  }

  try {
    const newData = new data({ mobile });
    await newData.save();
    console.log("✅ Mobile saved to DB:", mobile);

    // Email config
    const mailOptions = {
      from: `"Lohamandi Enquiry" <upadhayayyogesh832@gmail.com>`,
      to: "leeladharupadhayay7@gmail.com", // or multiple recipients comma-separated
      subject: "🔔 New Enquiry Received!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">📥 New Enquiry Received</h2>
          <p><strong>Mobile Number:</strong> ${mobile}</p>
          <p style="color: gray;">Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    try {
      console.log("📧 Attempting to send email...");
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully:", info.response);
    } catch (emailErr) {
      console.error("❌ Email send failed:", emailErr);
    }

    return res.status(201).json({
      message: "Mobile number saved and email sent successfully ✅",
    });
    console.log("✅ Mobile number saved and email sent successfully");
  } catch (err) {
    console.error("❌ Error saving or emailing:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/data — Get all saved mobiles
router.get("/", async (req, res) => {
  try {
    const datas = await data.find().sort({ submittedAt: -1 });
    res.status(200).json(datas);
  } catch (err) {
    console.error("❌ Failed to fetch data:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
