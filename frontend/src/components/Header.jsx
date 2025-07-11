// components/Header.jsx
import React, { useState } from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full  bg-white shadow-md  text-black text-sm sm:text-base">
      {/* Top Contact Header (Desktop Only) */}
      <div className="hidden sm:flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-4 font-medium">
          <div className="flex items-center gap-2">
            <span>info@lohamandi.com</span>
            <FaTelegramPlane />
          </div>
          <span>|</span>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91-9876543210</span>
          </div>
        </div>
        <div className="flex gap-3 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 ">
        <a href="/" className="hover:text-gray-600">
          <img
            src="/lohamandi_original.png"//added 
            alt="Lohamandi Logo"
            className=" sm:h-[100px] w-[150px] object-contain"
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
        <div className="sm:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-6 space-y-4 text-base font-medium bg-white shadow-inner">
          <div className="border-t pt-4">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex flex-row">
                <div className="flex items-center gap-2">
                  <FaTelegramPlane />
                  <span>info@lohamandi.com </span>
                </div>
                <span>&nbsp; &nbsp;|&nbsp;&nbsp; </span>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span> +91-9811795184</span>
                </div>
              </div>
              <div className="flex justify-center gap-3 text-lg mt-2">
                <FaFacebookF />
                <FaYoutube />
                <FaInstagram />
                <FaTelegramPlane />
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
