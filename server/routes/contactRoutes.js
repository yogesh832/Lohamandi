const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");
const nodemailer = require("nodemailer");

// 📩 Gmail & App Password - OK for testing only
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "upadhayayyogesh832@gmail.com",
    pass: "exzl urpm udfq kzsq",
  },
});

// ✅ POST - Save & Email
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    await transporter.sendMail({
      from: `"Website Contact" <upadhayayyogesh832@gmail.com>`,
      to: "upadhayayyogesh832@gmail.com",
      replyTo: email,
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

// ✅ GET all messages
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

// ✅ GET one message
router.get("/:id", async (req, res) => {
  try {
    const message = await ContactMessage.findById(req.params.id);
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch message" });
  }
});

module.exports = router;
