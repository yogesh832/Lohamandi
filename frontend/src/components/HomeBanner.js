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
import AnimatedMessages from "./AnimatedMessages";

const HomeBanner = () => {
  const bannerImages = [
    "/lohamandi1.webp",
    "/lohamandi2.webp",
    "/lohamandi3.webp",
  ];

  const [isFading, setIsFading] = useState(false);
  const [contact, setContact] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contact || !/^[6-9]\d{9}$/.test(contact)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true); // ✅ start loading

      const response = await axios.post("https://lohamandi.com/api/quicklead", {
        phone: contact,
      });

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
    } finally {
      setLoading(false); // ✅ stop loading
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
          <div className="md:hidden w-full h-full py-20 bg-black/60 px-4 text-white space-y-2">
            <h1 className="text-4xl font-bold ">Smart Steel Procurement,</h1>
            <h1 className="text-3xl font-bold ">Made Simple</h1>
            <AnimatedMessages />
          
            <p className="text-sm text-gray-200">
              Buy top-brand TMT bars at competitive prices, ensure no wastage
              with custom lengths, and track your order in real-time...
            </p>
            <p className="text-sm text-gray-200">
              Trusted b
              ey contractors, engineers, and suppliers across India.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex w-full h-full bg-black/50 justify-center items-center px-4 md:px-10 text-white">
            <div className="flex items-center justify-between w-full max-w-7xl">
              {/* Left Section */}
              <div className="flex flex-col justify-center gap-6 w-1/2">
                <h1 className="text-5xl font-bold leading-[0.8]">
                  Smart Steel Procurement,
                </h1>
                <h1 className="text-5xl font-bold leading-[0.8]">
                  Made Simple
                </h1>

                <AnimatedMessages />

                <p className="text-lg max-w-md">
                  From customized length sariya to eco-friendly transport, steel
                  buying made easy.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/enquiry"
                    className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Request Quote
                  </a>

                  <a
                    href="/moreproducts"
                    className="bg-white text-black py-3 px-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:bg-gray-100 hover:text-[#D61349] hover:scale-105 hover:shadow-lg"
                  >
                    Explore Products
                  </a>
                </div>
              </div>

              {/* Right Form */}
              <div className="w-1/2 flex justify-center">
                <div className="bg-white text-black p-8 rounded-lg w-full max-w-sm space-y-6 shadow-lg">
                  <h2 className="text-2xl font-semibold">
                    Your Steel, Your Expert
                  </h2>
                  <p>From price to supply – we’ve got you covered.</p>

                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Talk to a Steel Expert"
                      pattern="[6-9]{1}[0-9]{9}"
                      maxLength="10"
                      className="p-3 border border-gray-400 rounded"
                      required
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className={`py-3 px-6 rounded-lg text-white transition-all duration-300
    ${
      loading
        ? "bg-gradient-to-r from-[#F17556] to-[#D61349] opacity-50 cursor-not-allowed"
        : "bg-gradient-to-r from-[#F17556] to-[#D61349] hover:scale-105 shadow-md"
    }`}
                    >
                      {loading ? "Saving..." : "Connect Now"}
                    </button>

                    <div className="text-center text-sm text-gray-500">or</div>

                    <a
                      href="https://wa.me/919910025184"
                      className="flex justify-center items-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                      Chat with Steel Expert
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
<section className="bg-[#A01F16] px-6 sm:px-10 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-[#fff3f4] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <FaBoxOpen className="text-4xl text-gray-700 mb-3" />
      <h3 className="text-[#A01F16] font-semibold text-lg sm:text-xl">
        Custom Lengths
      </h3>
      <p className="text-sm sm:text-base text-gray-600">Zero Wastage</p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#fff3f4] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <FaRecycle className="text-4xl text-green-600 mb-3" />
      <h3 className="text-[#A01F16] font-semibold text-lg sm:text-xl">
        Eco-Friendly Delivery
      </h3>
      <p className="text-sm sm:text-base text-gray-600">Greener & Smarter</p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#fff3f4] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <FaClock className="text-4xl text-gray-700 mb-3" />
      <h3 className="text-[#A01F16] font-semibold text-lg sm:text-xl">
        Save Time & Cost
      </h3>
      <p className="text-sm sm:text-base text-gray-600">
        Efficient Procurement
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#fff3f4] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
      <FaShoppingCart className="text-4xl text-gray-700 mb-3" />
      <h3 className="text-[#A01F16] font-semibold text-lg sm:text-xl">
        Hands-Free Ordering
      </h3>
      <p className="text-sm sm:text-base text-gray-600">Click. Order. Build.</p>
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
