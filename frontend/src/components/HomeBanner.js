import React, { useState } from "react";
import {
  FaBoxOpen,
  FaRecycle,
  FaClock,
  FaShoppingCart,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import axios from "axios";

const HomeBanner = () => {
  const bannerImages = [
    "/lohamandi1.webp",
    "/lohamandi2.webp",
    "/lohamandi3.webp",
  ];

  const [isFading, setIsFading] = useState(false);
  const [contact, setContact] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contact || !/^[6-9]\d{9}$/.test(contact)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await axios.post(
        "https://lohamandi.com/api/quicklead",
        {
          phone: contact,
        }
      );

      if (
        response?.data?.success ||
        response.status === 200 ||
        response.status === 201
      ) {
        setShowPopup(true);
        setContact("");

        // Auto-close popup after 5 seconds (optional)
        setTimeout(() => setShowPopup(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting mobile number:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] relative">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 2000 }}
          loop
          effect="fade"
          pagination={{ clickable: true }}
          className="h-full w-full absolute top-0 left-0"
          onSlideChangeTransitionStart={() => setIsFading(true)}
          onSlideChangeTransitionEnd={() =>
            setTimeout(() => setIsFading(false), 1000)
          }
        >
          {bannerImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full min-h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fade overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-20 bg-black/10 transition-opacity duration-500 pointer-events-none ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {/* Mobile View */}
          <div className="md:hidden w-full h-full bg-black/60 py-40 px-4 text-white space-y-2">
            <p className="text-xl font-semibold">
              At Lohamandi, we simplify your steel sourcing, from order to
              delivery.
            </p>
            <p className="text-sm text-gray-200">
              Buy top-brand TMT bars at competitive prices, ensure no wastage
              with custom lengths, and track your order in real-time...
            </p>
            <p className="text-sm text-gray-200">
              Trusted by contractors, engineers, and suppliers across India.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex w-full h-full bg-black/50 justify-center items-center px-4 md:px-10 text-white">
            <div className="flex items-center justify-between w-full max-w-7xl">
              {/* Left Section */}
              <div className="flex flex-col justify-center gap-6 w-1/2">
                <h1 className="text-5xl font-bold leading-tight">
                  Smart Steel Solutions
                </h1>
                <h1 className="text-5xl font-bold leading-tight">
                  Delivered Your Way
                </h1>
                <p className="text-lg max-w-md">
                  From customized length sariya to eco-friendly transport, steel
                  buying made easy.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/enquiry"
                    className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg"
                  >
                    Request Quote
                  </a>
                  <a
                    href="/moreproducts"
                    className="bg-white text-black py-3 px-6 rounded-lg"
                  >
                    Explore Products
                  </a>
                </div>
              </div>

              {/* Right Form */}
              <div className="w-1/2 flex justify-center">
                <div className="bg-white text-black p-8 rounded-lg w-full max-w-sm space-y-6 shadow-lg">
                  <h2 className="text-2xl font-semibold">
                    Special Discounts on
                  </h2>
                  <p>Get today's best price & more</p>
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Enter your 10-digit Mobile No."
                      pattern="[6-9]{1}[0-9]{9}"
                      maxLength="10"
                      className="p-3 border border-gray-400 rounded"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg"
                    >
                      Get Steel at Best Price
                    </button>
                    <div className="text-center text-sm text-gray-500">or</div>
                    <a
                      href="https://wa.me/919910025184"
                      className="flex justify-center items-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-xl">
          <div className="text-center py-2 px-3">
            <h2 className="text-sm font-semibold text-black">
              TMT Bars for Construction
            </h2>
            <p className="text-[#A01F16] text-xs font-semibold mt-1">
              Get free lowest price quote today!
            </p>
          </div>
          <div className="flex justify-between px-3 pb-3 gap-2">
            <a
              href="tel:+919910025184"
              className="flex items-center justify-center gap-1 bg-[#0AC1F5] text-white text-sm font-semibold px-2 py-2 rounded-md w-1/2"
            >
              <FaPhoneAlt className="text-lg" /> Call
            </a>
            <a
              href="https://wa.me/919910025184"
              className="flex items-center justify-center gap-1 bg-[#25D366] text-white text-sm font-semibold px-2 py-2 rounded-md w-1/2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
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

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn">
            <div className="flex justify-center mb-4">
              <svg
                className="w-14 h-14 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
            <p className="mt-2 text-gray-600">
              Your contact has been submitted successfully. <br /> We'll get
              back to you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-2 px-6 rounded-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
