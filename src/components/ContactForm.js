import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="min-h-[110vh] bg-gradient-to-b from-white to-[#FFF3F3] px-6 sm:px-10 md:px-16 py-12">
        {/* Use flex-col-reverse only on md (tablet) and down */}
        <div className="flex flex-col-reverse md:flex-row gap-10 h-full">
          
          {/* Contact Form - 70% height on mobile/tablet */}
          <div className="w-full md:w-1/2 flex-1">
            <p className="text-[#A01F16] text-lg sm:text-xl font-semibold mb-2">Contact Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-base sm:text-lg mb-6 text-gray-700">We usually respond within 24 hours on business days.</p>

            <form className="space-y-5">
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-base sm:text-lg font-medium mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
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

          {/* Map - 30% height on mobile/tablet */}
          <div className="w-full md:w-1/2 flex-1 h-[30vh] md:h-auto">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.894760031096!2d13.377704815854763!3d52.51627597981278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9e092f9db%3A0x5a7a1b14659dc2!2sBrandenburg%20Gate!5e0!3m2!1sen!2sin!4v1622024210139!5m2!1sen!2sin"
              className="rounded-md shadow-lg w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

