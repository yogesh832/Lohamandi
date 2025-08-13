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

  // ✅ Your desired order (use title exactly as from API)
  const customOrder = [
    "TMT Bar ", // First priority
    "|",
    "Angles",
    "|",
    "Channels",
    "|", // Separator
    "Squares",
    "|",
    "Flats",
    "|",
    "binding wire",
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://lohamandi.com/api/products");
        const fetchedCategories = res.data.data || [];

        // ✅ Normalize titles in lookup
        const lookup = {};
        fetchedCategories.forEach((cat) => {
          lookup[cat.title.trim().toLowerCase()] = cat;
        });

        // ✅ Arrange according to customOrder (case-insensitive, trim spaces)
        const arranged = customOrder
          .map((item) => {
            if (item === "|") return "|";
            return lookup[item.trim().toLowerCase()] || null;
          })
          .filter((item) => item !== null);

        // ✅ Add any remaining categories not in customOrder
        const remaining = fetchedCategories.filter(
          (cat) =>
            !customOrder
              .map((i) => i.trim().toLowerCase())
              .includes(cat.title.trim().toLowerCase())
        );

        setCategories([...arranged, ...remaining]);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md text-black text-sm sm:text-base">
        {/* Top Bar */}
        <div className="hidden sm:flex items-center justify-between px-6">
          <div className="flex items-center gap-4 font-medium">
            <a
              href="mailto:info@lohamandi.com"
              className="hover:text-[#EA4335] transition"
            >
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>info@lohamandi.com</span>
              </div>
            </a>
            <span>|</span>
            <a
              href="tel:+919910025184"
              className="hover:text-[#EA4335] transition"
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/lohamandicom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/lohamandicom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a href="mailto:info@lohamandi.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a
                href="/enquiry"
                className="bg-gradient-to-r from-[#F17556] to-[#D61349] hover:bg-[#c94524] text-white px-4 py-2 rounded-lg"
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
        {/* SubHeader (Categories) */}
        {/* SubHeader (Categories) */}
        <div className="hidden md:block sticky top-[140px] z-40 bg-white shadow-sm border-t border-b text-sm sm:text-base">
          <div className="flex flex-wrap items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 overflow-x-auto">
            {categories.map((cat, index) =>
              cat === "|" ? (
                <span
                  key={index}
                  className="mx-2 sm:mx-3 md:mx-4 text-gray-300"
                >
                  |
                </span>
              ) : (
                <a
                  key={cat._id}
                  href={`/${cat.slug}`}
                  className="px-3 sm:px-4 md:px-6 lg:px-8 text-black hover:text-red-600 transition whitespace-nowrap"
                >
                  {cat.title}
                </a>
              )
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
