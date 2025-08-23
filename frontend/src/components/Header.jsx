import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // ✅ Desired order (case-insensitive, trimmed)
  const customOrder = [
    "tmt bar",
    "|",
    "angles",
    "|",
    "channels",
    "|",
    "flats",
    "|",
    "binding wire",
    "|",
    "square",
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://lohamandi.com/api/products");
        const fetchedCategories = res.data.data || [];

        // ✅ Create lookup table (title -> category object)
        const lookup = {};
        fetchedCategories.forEach((cat) => {
          lookup[cat.title.trim().toLowerCase()] = cat;
        });

        // ✅ Arrange categories according to customOrder
        const arranged = customOrder.map((item) => {
          if (item === "|") return "|"; // keep separator
          return lookup[item] || null;
        });

        // ✅ Remove null (if API doesn’t return some category, skip it)
        const filteredArranged = arranged.filter((cat) => cat !== null && cat !== undefined);

        // ✅ Add any categories not in customOrder (append to end)
        const remaining = fetchedCategories.filter(
          (cat) =>
            !customOrder.includes(cat.title.trim().toLowerCase())
        );

        setCategories([...filteredArranged, ...remaining]);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md text-black text-sm sm:text-base">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 min-h-12">
        <a href="/">
          <img
            src="/lohamandi_original.png"
            alt="Lohamandi Logo"
            className="sm:h-[100px] w-[150px] object-contain"
          />
        </a>

        <ul className="hidden sm:flex flex-wrap gap-6 text-base font-medium items-center">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <a
              href="/enquiry"
              className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg"
            >
              Enquire Now
            </a>
          </li>
        </ul>

        <div
          className="sm:hidden py-2 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-6 space-y-2 bg-white shadow-inner">
          {[
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about" },
            { name: "Products", link: "/products" },
            { name: "Blog", link: "/blog" },
            { name: "Contact", link: "/contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="block w-full py-2 border-b border-gray-200 hover:text-red-600 transition"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/enquiry"
            className="block bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg text-center mt-2"
          >
            Enquire Now
          </a>
        </div>
      )}

      {/* SubHeader (Categories) */}
      <div className="hidden md:flex sticky top-[140px] z-40 bg-white shadow-sm border-t border-b text-sm sm:text-base">
        <div className="flex w-full items-center justify-between px-6 md:px-6 lg:px-8 xl:px-10 py-2 whitespace-nowrap">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-6">
            {categories.map((cat, index) =>
              cat === "|" ? (
                <span key={index} className="text-gray-300">|</span>
              ) : (
                <a
                  key={cat._id}
                  href={`/${cat.slug}`}
                  className="px-2 sm:px-3 text-base md:px-4 text-black hover:text-red-600 transition"
                >
                  {cat.title}
                </a>
              )
            )}
              {/* Contact Info */}
          <div className="flex items-center gap-6 font-medium">
            <a
              href="tel:+919910025184"
              className="hover:text-[#EA4335] transition flex items-center gap-2 bg-red-50 px-3 py-1 rounded"
            >
              <FaPhoneAlt />
              <span>+91-9910025184</span>
            </a>
            <span>|</span>
            <a
              href="mailto:info@lohamandi.com"
              className="hover:text-[#EA4335] transition flex items-center gap-2"
            >
              <FaEnvelope />
              <span>info@lohamandi.com</span>
            </a>
          </div>
          </div>

        
        </div>
      </div>
    </header>
  );
};

export default Header;
