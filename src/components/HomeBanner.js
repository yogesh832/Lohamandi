import React from 'react';
import { FaBoxOpen,FaPhoneAlt, FaRecycle, FaClock, FaShoppingCart,FaWhatsapp } from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <div>
     <section
  className="w-full min-h-[80vh] bg-cover bg-center relative"
  style={{ backgroundImage: "url('/lohamandi.png')" }}
>
  {/* Mobile CTA - Only visible on mobile */}
  <div className="md:hidden absolute inset-0 bg-black/50
   flex flex-col justify-center items-center px-6 py-8 text-center space-y-3">
    <h3 className="text-white text-4xl font-bold">TMT Bars of Construction</h3>
    <hr className="my-6 border-t-4 border-red-500" />

    <p className="text-white text-lg">Get free lowest price quotation now!</p>
    {/* <div className="flex flex-row gap-3 w-full max-w-s">
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center 
        gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold text-sm shadow-md min-w-s"
      >
        <FaPhoneAlt className="text-2xl mb-2" /> Call us now
      </a>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] 
        text-white px-5 py-3 rounded-lg font-semibold text-smshadow-md"
      >
       <FaWhatsapp className="text-2xl mb-2" />  WhatsApp now
      </a>
    </div> */}
     <div className="flex flex-row gap-3 w-full max-w-xs">
  <a
    href="tel:+919876543210"
    className="flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold text-sm shadow-md min-w-[140px]"
  >
    <FaPhoneAlt className="text-xl" /> Call us now
  </a>
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-semibold text-sm shadow-md min-w-[140px]"
  >
    <FaWhatsapp className="text-xl" /> WhatsApp now
  </a>
</div>
  </div>

 


  {/* Desktop Hero Section */}
  {/* <div className="hidden md:grid grid-cols-2 min-h-[80vh] bg-black/50 text-white"> */}
  <div className="hidden md:flex flex-col md:grid md:grid-cols-2 min-h-[80vh] bg-black/50 text-white">

    {/* Left Content */}
    <div className="flex flex-col justify-center items-start p-10 gap-6">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">Smart Steel Solutions</h1>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">Delivered Your Way</h1>
      <p className="text-lg max-w-md">
        From customized length sariya to eco-friendly transport — steel buying made easy.
      </p>
      <div className="flex gap-4">
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
          <a href="/enquiry">Request Quote</a>
        </button>
        <button className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
          <a href="/moreproducts">Explore Products</a>
        </button>
      </div>
    </div>

    {/* Right Contact Card */}
    <div className="flex justify-center items-center p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm text-black space-y-6">
        <h2 className="text-2xl font-semibold">Special Discounts on</h2>
        <p className="text-lg">Get today's best price & more</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your Contact Details"
            className="p-3 rounded-lg border border-black text-gray-800"
          />
          <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-4 px-6
           rounded-lg hover:opacity-90 transition duration-300">
            Get Steel at Best Price
          </button>
          <div className="text-center text-sm text-gray-500">or</div>
          <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-lg hover:bg-green-600 transition duration-300">
            <FaWhatsapp  /> Chat on Whatsapp
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Bottom Features Section */}
      <section className="min-h-[20vh] bg-[#A01F16] text-white flex flex-col justify-center items-center px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaBoxOpen className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">Custom Lengths - No Wastage</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRecycle className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">Eco-Friendly Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">Time and Cost Efficient</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShoppingCart className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">Hassle-Free Ordering</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;