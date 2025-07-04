const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");
const nodemailer = require("nodemailer");

// Gmail & App Password (HARD-CODED for now - only use for local testing)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "upadhayayyogesh832@gmail.com", // ✅ Your Gmail
    pass: "exzl urpm udfq kzsq", // ✅ Your Gmail App Password (not your login password)
  },
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // 1. Save to MongoDB
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    // 2. Send Email to Admin
    await transporter.sendMail({
      from: `"Website Contact" <upadhayayyogesh832@gmail.com>`, // must match your Gmail
      to: "upadhayayyogesh832@gmail.com", // admin will receive this
      replyTo: email, // 👈 user’s email (for direct reply)
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ message: "Message saved and email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;
