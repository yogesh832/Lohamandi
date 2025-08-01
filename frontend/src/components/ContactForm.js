import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`https://lohamandi.com/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
        setShowPopup(true); // Show modal
      } else {
        setStatus(data.message || "❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-[110vh] bg-gradient-to-b from-white to-[#FFF3F3] px-6 sm:px-10 md:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row gap-10 h-full">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex-1">
          <p className="text-[#A01F16] text-lg sm:text-xl font-semibold mb-2">Contact Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg mb-6 text-gray-700">We usually respond within 24 hours on business days.</p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-base sm:text-lg font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-base sm:text-lg font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#D61349] to-[#F17556] text-white text-lg font-semibold rounded-md"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
              <p className={`mt-4 text-center font-medium ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Google Map + Addresses */}
        <div className="w-full md:w-1/2 flex-1 h-[30vh] md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.541833368118!2d77.4754215!3d28.6373945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzE0LjYiTiA3N8KwMjgnMzEuNSJF!5e0!3m2!1sen!2sin!4v1722476991112!5m2!1sen!2sin"
            className="rounded-md shadow-lg w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className="w-full bg-[#F5F3F3] text-gray-500 px-4 py-2">
            <div className="flex justify-between flex-wrap text-sm">
              <div className="mr-4">
                <p className="font-semibold">Registered Office:</p>
                <span className="text-gray-400">
                  305, C-102, RDC, Raj Nagar, Ghaziabad
                </span>
              </div>
              <div>
                <p className="font-semibold">Warehouse Address:</p>
                <p className="text-gray-400">
                  Plot No - A4, Block-A, Zone B, Jaipuria Sunrise Greens, Village - Bamheta, 201001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn">
            <div className="flex justify-center mb-4">
              <svg
                className="w-14 h-14 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
            <p className="mt-2 text-gray-600">
              Thank you for reaching out. <br /> We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-2 px-6 rounded-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
