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

const HomeBanner = () => {
  const bannerImages = [
    "/lohamandi1.png",
    "/lohamandi2.png",
    "/lohamandi3.png",
  ];

  const [isFading, setIsFading] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] relative">
        {/* Swiper Background */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 5000 }}
          loop={true}
          effect="fade"
          pagination={{ clickable: true }}
          className="h-full w-full absolute top-0 left-0"
          onSlideChangeTransitionStart={() => setIsFading(true)}
          onSlideChangeTransitionEnd={() =>
            setTimeout(() => setIsFading(false), 800)
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

        {/* === Black Fade Overlay === */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-20 bg-black/20 transition-opacity duration-500 pointer-events-none ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* === Overlay Content: Mobile & Desktop === */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {/* Mobile Text */}
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

          {/* Desktop Text + Form */}
          <div className="hidden md:flex w-full h-full bg-black/50 justify-center items-center px-4 md:px-10 text-white">
            <div className="flex items-center justify-between w-full max-w-7xl">
              {/* Left Text */}
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
                  <form className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Enter your Contact Details"
                      className="p-3 border border-gray-400 rounded"
                    />
                    <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg">
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

        {/* === Mobile Fixed Bottom CTA === */}
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
            <button className="flex items-center justify-center gap-1 bg-[#0AC1F5] text-white text-sm font-semibold px-2 py-2 rounded-md w-1/2">
              <FaPhoneAlt className="text-lg" /> Call
            </button>
            <button className="flex items-center justify-center gap-1 bg-[#25D366] text-white text-sm font-semibold px-2 py-2 rounded-md w-1/2">
              <FaWhatsapp className="text-lg" /> WhatsApp
            </button>
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
    </div>
  );
};

export default HomeBanner;
