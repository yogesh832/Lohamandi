// src/pages/EnquireForm.jsx
import React from "react";

const EnquireForm = () => {
  return (
    <section className="min-h-[100vh] bg-[#F5F5F5] flex items-center justify-center p-4">
      <div className="shadow-lg rounded-xl w-full max-w-2xl p-8 space-y-6 bg-[#FFF4F4] ">
        <h2 className="text-3xl font-bold text-center text-black">Quick Enquire</h2>

        <form className="space-y-4 text-lg ">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A01F16]"
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <label className="text-sm text-gray-600">
              I have read and accepted the <span className="underline cursor-pointer">Privacy Policy</span>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              Enquiry Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquireForm;
