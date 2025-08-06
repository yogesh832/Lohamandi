import React, { useState } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md text-black text-sm sm:text-base">
      {/* Top Contact Header (Desktop Only) */}
      <div className="hidden sm:flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-4 font-medium">
          <a
            href="mailto:info@lohamandi.com"
            className="hover:text-[#EA4335] hover:scale-110 transition duration-300"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span className="hover:text-[#EA4335] hover:scale-10 transition duration-300">
                info@lohamandi.com
              </span>
            </div>
          </a>
          <span>|</span>
          <a
            href="mailto:info@lohamandi.com"
            className="hover:text-[#EA4335] hover:scale-110 transition duration-300"
          >
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91-9910025184</span>
            </div>
          </a>
        </div>
        <div className="flex gap-3 text-xl">
          <a
            href="https://www.facebook.com/"
            className="hover:text-[#1877F2] hover:scale-110 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/"
            className="hover:text-[#FF0000] hover:scale-110 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/lohamandicom?igsh=MWRzZmVvNDRhYTd4bg=="
            className="hover:text-[#E1306C] hover:scale-110 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/lohamandicom/"
            className="hover:text-[#0077B5] hover:scale-110 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:info@lohamandi.com"
            className="hover:text-[#EA4335] hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 sm: min-h-16">
        <a href="/" className="hover:text-gray-600">
          <img
            src="/lohamandi_original.png"
            alt="Lohamandi Logo"
            className="sm:h-[100px] w-[150px] object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex flex-wrap gap-6 text-base font-medium items-center">
          <li>
            <a href="/" className="hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-600">
              About Us
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-600">
              Products
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-gray-600">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-600">
              Contact
            </a>
          </li>
          <li>
            <a
              href="/enquiry"
              className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg"
            >
              Enquire Now
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden p-y-10 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-6 space-y-4 text-base font-medium bg-white shadow-inner">
          <div className="border-t pt-4">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex flex-row flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>info@lohamandi.com</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+91-9811795184</span>
                </div>
              </div>
              <div className="flex justify-center gap-4 text-lg mt-2">
                <a
                  href="https://www.facebook.com/"
                  className="hover:text-[#1877F2] transition duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="hover:text-[#FF0000] transition duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="hover:text-[#E1306C] transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:info@lohamandi.com"
                  className="hover:text-[#EA4335] transition duration-300"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <a href="/" className="block hover:text-gray-600">
            Home
          </a>
          <a href="/about" className="block hover:text-gray-600">
            About Us
          </a>
          <a href="/products" className="block hover:text-gray-600">
            Products
          </a>
          <a href="/contact" className="block hover:text-gray-600">
            Contact
          </a>
          <a href="/blog" className="block hover:text-gray-600">
            Blog
          </a>
          <a
            href="/enquiry"
            className="block bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg text-center"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
