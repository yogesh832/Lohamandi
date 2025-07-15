const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");
const nodemailer = require("nodemailer");

// Email setup (Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "upadhayayyogesh832@gmail.com",
    pass: "exzl urpm udfq kzsq", // Secure this in .env file
  },
});

// POST: Save and Send Email
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: `"Website Contact" <${email}>`,
      to: "upadhayayyogesh832@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(201).json({ message: "Message saved and email sent!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// GET: All Messages
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

// GET: Single Message
router.get("/:id", async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ message: "Not found" });
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch message" });
  }
});

module.exports = router;
