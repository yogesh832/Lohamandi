"use client";

import React, { useState } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      const fullMessage = `
        Product: ${formData.product}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `;

      await axios.post("https://lohamandi.com//api/enquiry", {
        name: formData.name,
        email: formData.email,
        message: fullMessage,
      });

      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
        accepted: false,
      });
    } catch (err) {
      console.error("Error sending enquiry:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
        <div className="shadow-lg rounded-xl w-full max-w-2xl p-8 space-y-6 bg-[#FFF4F4]">
          <div className="flex items-center justify-center">
            <img src="/enquire.png" alt="enquire" className="h-20 w-20" />
          </div>
          <h2 className="text-3xl font-bold text-center text-black">
            Quick Enquire
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-lg">
            {/* Form Fields */}
            {["name", "email", "phone", "product"].map((field) => (
              <div key={field}>
                <label className="block font-semibold mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required={field === "name" || field === "email"}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
                />
              </div>
            ))}

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
                <span className="underline cursor-pointer">Privacy Policy</span>
                .
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

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl text-center space-y-4">
            <CheckCircle size={48} className="text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Enquiry Sent!
            </h3>
            <p className="text-gray-600">
              Thank you for your interest. We will get back to you shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-4 px-6 py-2 bg-[#D61349] text-white rounded-full hover:bg-[#b60f3b] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductEnquiry;
