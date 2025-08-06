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

  const categories = [
    { label: "TMT Bars", href: "/products/tmt-bars" },
    { label: "Binding Wires", href: "/products/binding-wires" },
    { label: "Squares", href: "/products/squares" },
    { label: "Angles", href: "/products/angles" },
    { label: "Channels", href: "/products/channels" },
    { label: "Flats", href: "/products/flats" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md text-black text-sm sm:text-base">
        {/* Top Bar */}
        <div className="hidden sm:flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4 font-medium">
            <a href="mailto:info@lohamandi.com" className="hover:text-[#EA4335] transition">
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@lohamandi.com</span>
              </div>
            </a>
            <span>|</span>
            <a href="tel:+919910025184" className="hover:text-[#EA4335] transition">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+91-9910025184</span>
              </div>
            </a>
          </div>
          <div className="flex gap-3 text-xl">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.instagram.com/lohamandicom" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/lohamandicom/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="mailto:info@lohamandi.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="flex items-center justify-between px-4 sm:px-6 min-h-16">
          <a href="/">
            <img src="/lohamandi_original.png" alt="Lohamandi Logo" className="sm:h-[100px] w-[150px] object-contain" />
          </a>

          <ul className="hidden sm:flex flex-wrap gap-6 text-base font-medium items-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="/enquiry" className="bg-gradient-to-r from-[#F17556] to-[#D61349] hover:bg-[#c94524] text-white px-4 py-2 rounded-lg">
                Enquire Now
              </a>
            </li>
          </ul>

          <div className="sm:hidden py-2 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden px-4 pb-6 space-y-4 bg-white shadow-inner">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href="/enquiry" className="block bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg text-center">Enquire Now</a>
          </div>
        )}

        {/* SubHeader (Categories) */}
        <div className="sticky top-[140px] z-40 bg-white shadow-sm border-t border-b text-sm sm:text-base">
          <div className="flex flex-wrap items-center justify-start px-4 sm:px-6 py-2 overflow-x-auto gap-4">
            {categories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="text-black font-large px-8  hover:text-red-600 transition whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
