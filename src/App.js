import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane,  FaPhoneAlt, FaFacebookF, FaYoutube,FaTimes,FaBars } from 'react-icons/fa';
import LandingPage from './Pages/LandingPage'
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';
import BlogPage from './Pages/BlogPage';
import AboutPage from './Pages/AboutPage';
import IndPage from './Pages/IndPage';
import EnquirePage from './Pages/EnquirePage';
function App() {
   const [isOpen, setIsOpen] = useState(false);
  return (
   
    <div className="min-h-screen bg-gray-100">
    
     {/* header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md text-black text-sm sm:text-base">
      {/* Top Contact Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-medium">
          <div className="flex items-center gap-2">
            <span>info@lohamandi.com</span>
            <FaTelegramPlane />
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91-9876543210</span>
          </div>
        </div>
        <div className="flex gap-3 text-xl mt-2 sm:mt-0">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <img src="/logo.png" alt="Lohamandi Logo" className="h-10 w-auto" />

        {/* Desktop Links */}
        <ul className="hidden sm:flex flex-wrap gap-6 text-base font-medium items-center">
          <li><a href="/" className="hover:text-gray-600">Home</a></li>
          <li><a href="/about" className="hover:text-gray-600">About Us</a></li>
          <li><a href="/products" className="hover:text-gray-600">Products</a></li>
          
          <li><a href="/blog" className="hover:text-gray-600">Blog</a></li>
          <li><a href="/contact" className="hover:text-gray-600">Contact</a></li>
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
          <a href="/" className="block hover:text-gray-600">Home</a>
          <a href="/about" className="block hover:text-gray-600">About Us</a>
          <a href="/products" className="block hover:text-gray-600">Products</a>
          <a href="/contact" className="block hover:text-gray-600">Contact</a>
          <a href="/blog" className="block hover:text-gray-600">Blog</a>
          <a
            href="/enquiry"
            className="block bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-4 py-2 rounded-lg text-center"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
 <Route path="/contact" element={<ContactPage/>} />
  <Route path="/products" element={<ProductsPage/>} />
    <Route path="/blog" element={<BlogPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/ind" element={<IndPage/>} />
       <Route path="/enquiry" element={<EnquirePage/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;

