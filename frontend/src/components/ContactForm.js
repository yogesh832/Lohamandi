import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://lohamandi.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
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
          <p className="text-[#A01F16] text-lg sm:text-xl font-semibold mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg mb-6 text-gray-700">
            We usually respond within 24 hours on business days.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-base sm:text-lg font-medium mb-1">
                Name
              </label>
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
              <label className="block text-base sm:text-lg font-medium mb-1">
                Email
              </label>
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
              <label className="block text-base sm:text-lg font-medium mb-1">
                Message
              </label>
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
              <p
                className={`mt-4 text-center font-medium ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2 flex-1 h-[30vh] md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.894760031096!2d13.377704815854763!3d52.51627597981278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9e092f9db%3A0x5a7a1b14659dc2!2sBrandenburg%20Gate!5e0!3m2!1sen!2sin!4v1622024210139!5m2!1sen!2sin"
            className="rounded-md shadow-lg w-full h-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
