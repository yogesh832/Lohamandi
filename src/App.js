import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane,  FaPhoneAlt, FaFacebookF, FaYoutube } from 'react-icons/fa';
import HomePage from './components/HomePage';
import AboutPage from "./components/AboutPage";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 bg-white shadow-md text-black text-sm sm:text-base gap-2 sm:gap-0">
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
        <div className="flex gap-3 text-xl">
          <FaFacebookF />
          <FaYoutube />
          <FaInstagram />
          <FaTelegramPlane />
        </div>
      </header>

      {/* Navbar */}
      <nav className="sticky top-[8vh] z-40 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 bg-white text-black shadow gap-4 sm:gap-0">
        <img src={'/logo.png'} alt="Lohamandi Logo" className="h-10 w-auto" />
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-base">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">About Us</li>
          <li className="hover:text-gray-600 cursor-pointer">Products</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
          <li className="hover:text-gray-600 cursor-pointer">Blog</li>
        </ul>
      </nav>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
             <Route path="/about" element={<AboutPage />} />
               <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

