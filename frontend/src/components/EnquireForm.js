// src/pages/ProductEnquiry.jsx

"use client";

import React, { useState } from "react";
import axios from "axios";

const ProductEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
    accepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.accepted) {
      alert("Please accept the privacy policy.");
      return;
    }

    setLoading(true);

    try {
      // Combine phone and product into the message
      const fullMessage = `
        Product: ${formData.product}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `;

      const res = await axios.post("http://localhost:8000/api/enquiry", {
        name: formData.name,
        email: formData.email,
        message: fullMessage,
      });

      alert("Enquiry sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
        accepted: false,
      });
    } catch (err) {
      alert("Failed to send enquiry.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[100vh] bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="shadow-lg rounded-xl w-full max-w-2xl p-8 space-y-6 bg-[#FFF4F4]">
        <div className="flex items-center justify-center">
          <img src="/enquire.png" alt="enquire" className="h-20 w-20" />
        </div>
        <h2 className="text-3xl font-bold text-center text-black">Quick Enquire</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-lg">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Product</label>
            <input
              type="text"
              name="product"
              placeholder="e.g. TMT Bars 25 MM"
              value={formData.product}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="accepted"
              checked={formData.accepted}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-600">
              I have read and accepted the{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>.
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Enquiry Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductEnquiry;
