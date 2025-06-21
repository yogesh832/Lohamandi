import React from "react";

const ContactForm = () => {
  return (
    <>
<section className="min-h-[110vh] bg-gradient-to-b from-white to-[#FFF3F3] px-6 sm:px-16 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
    {/* Left - Contact Form */}
    <div>
      <p className="text-[#A01F16] text-lg font-semibold mb-2">Contact Us</p>
      <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Get in Touch</h2>
      <p className="text-lg mb-6 text-gray-700">We usually respond within 24 hours on business days.</p>

      <form className="space-y-5">
        <div>
          <label className="block text-lg font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Placeholder"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Placeholder"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-1">Message</label>
          <textarea
            placeholder="Placeholder"
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#D61349] to-[#F17556] text-white text-lg font-semibold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Right - Map */}
    <div>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.894760031096!2d13.377704815854763!3d52.51627597981278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9e092f9db%3A0x5a7a1b14659dc2!2sBrandenburg%20Gate!5e0!3m2!1sen!2sin!4v1622024210139!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="rounded-md shadow-lg w-full h-full min-h-[400px]"
      ></iframe>
    </div>
  </div>
</section>
<section className="bg-white py-12 px-6 sm:px-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    
    {/* Open Hours */}
    <div className="flex items-start gap-4">
      <div className="text-2xl bg-gray-100 rounded-full p-3">
       <img src="/icon1.png" alt="contact icon"></img>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Open hours</h3>
        <p><strong>Mon - Fri:</strong> 9:00 AM to 5:00 PM</p>
        <p><strong>Saturday:</strong> 9:00 AM to 1:00 PM</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="text-2xl bg-gray-100 rounded-full p-3">
        <img src="/icon2.png" alt="contact icon"></img>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Location</h3>
        <p>
          Office No - 305, C 102, RDC Raj Nagar,<br />
          Ghaziabad, Uttar Pradesh 201002, INDIA
        </p>
      </div>
    </div>

    {/* Contact Us */}
    <div className="flex items-start gap-4">
      <div className="text-2xl bg-gray-100 rounded-full p-3">
       <img src="/icon3.png" alt="contact icon"></img>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Contact us</h3>
        <p>info@lohamandi.com</p>
        <p>+91 9811795184</p>
      </div>
    </div>
    
  </div>
</section>
</>

  )
}
export default ContactForm