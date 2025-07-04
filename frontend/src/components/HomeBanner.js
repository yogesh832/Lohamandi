import React from 'react';
import {
  FaBoxOpen,
  FaRecycle,
  FaClock,
  FaShoppingCart,
  FaWhatsapp,
  FaPhoneAlt,
} from 'react-icons/fa';

const HomeBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full min-h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/lohamandi.png')" }}
      >
  {/* ===== Mobile Hero Paragraph Over Background ===== */}
<div className="md:hidden absolute top-[1%] left-0 right-0 z-30 px-4 py-20 bg-black/50 text-white">
  <div className=" text-white rounded-lg p-4 space-y-2">
    <p className="text-lg font-medium leading-relaxed">
      At Lohamandi, we simplify your steel sourcing — from order to delivery.
    </p>
    <p className="text-lg text-gray-200 leading-relaxed">
      Buy top-brand TMT bars at competitive prices, ensure no wastage with custom lengths, and
      track your order in real-time. Whether you're building homes or highways, Lohamandi ensures you get what you need, when you need it.
    </p>
    <p className="text-lg text-gray-200 leading-relaxed">
      Trusted by contractors, engineers, and suppliers across India.
    </p>
  </div>
</div>

{/* ===== Mobile View CTA Fixed Bottom ===== */}
<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-xl">
  <div className="text-center py-2 px-3">
    <h2 className="text-base font-semibold text-black leading-tight">TMT Bars for Construction</h2>
    <p className="text-[#A01F16] text-sm font-semibold mt-1">Get free lowest price quote today!</p>
  </div>
  <div className="flex justify-between px-3 pb-3 gap-2">
    <button className="flex items-center justify-center gap-1 bg-[#0AC1F5] 
      text-white text-sm font-semibold px-3 py-2 rounded-md w-1/2">
      <FaPhoneAlt className="text-lg" /> Call
    </button>
    <button className="flex items-center justify-center gap-1 bg-[#25D366] 
      text-white text-sm font-semibold px-3 py-2 rounded-md w-1/2">
      <FaWhatsapp className="text-lg" /> WhatsApp
    </button>
  </div>
</div>


        {/* ===== Desktop View ===== */}
        <div className="hidden md:grid grid-cols-2 min-h-[80vh] bg-black/50 text-white">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start p-10 gap-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart Steel Solutions
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Delivered Your Way
            </h1>
            <p className="text-lg max-w-md">
              From customized length sariya to eco-friendly transport — steel
              buying made easy.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition">
                <a href="/enquiry">Request Quote</a>
              </button>
              <button className="bg-white text-black py-3 px-6 rounded-lg hover:opacity-90 transition">
                <a href="/moreproducts">Explore Products</a>
              </button>
            </div>
          </div>

          {/* Right Form Card - Hidden on mobile */}
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
                <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-4 px-6 rounded-lg hover:opacity-90 transition">
                  Get Steel at Best Price
                </button>
                <div className="text-center text-sm text-gray-500">or</div>
                <button className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-lg hover:bg-green-600 transition">
                  <FaWhatsapp /> Chat on Whatsapp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Section */}
      <section className="bg-[#A01F16] text-white px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaBoxOpen className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">
              Custom Lengths - No Wastage
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaRecycle className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">
              Eco-Friendly Delivery
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">
              Time and Cost Efficient
            </span>
          </div>
          <div className="flex flex-col items-center">
            <FaShoppingCart className="text-2xl mb-2" />
            <span className="text-sm sm:text-base font-semibold">
              Hassle-Free Ordering
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
