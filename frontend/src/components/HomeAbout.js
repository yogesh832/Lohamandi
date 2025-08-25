import React from "react";
import { FaCut } from "react-icons/fa";
import { BiBlock } from "react-icons/bi";

const HomeAbout = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] py-10 px-4 sm:px-8 md:px-16 rounded-2xl shadow-md">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 order-2 md:order-1">
          {/* Tag */}
          <h4 className="flex items-center gap-2 text-[#A01F16] text-sm sm:text-base font-semibold">
            <FaCut className="text-lg" />
            <span className="bg-[#FEF2F2] px-2 py-0.5 rounded">
              Cut-to-Length (CTL) Service
            </span>
          </h4>

          {/* Title */}
          <h1 className="text-xl sm:text-3xl font-bold text-[#A01F16] leading-snug">
            Your Steel. Your Size. Delivered Ready.
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We cut TMT bars exactly to your required length—so you save time,
            eliminate scrap, and reduce costs. No extra cutting charges.
          </p>

          {/* Feature List */}
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <span className="font-bold text-black">✔ Customized Sizes:</span>{" "}
              Precisely cut to your BOQ
            </li>
            <li>
              <span className="font-bold text-black">✔ Zero Wastage:</span> No
              on-site scrap or rework
            </li>
            <li>
              <span className="font-bold text-black">✔ Faster Projects:</span>{" "}
              Ready-to-use delivery
            </li>
            <li>
              <span className="font-bold text-black">✔ Quality Assured:</span>{" "}
              Mill-tested TMT, inspected before dispatch
            </li>
            <li>
              <span className="font-bold text-black">✔ Greener Choice:</span>{" "}
              Less waste, lower carbon footprint
            </li>
          </ul>

          {/* Steps Icons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
            {[
              { icon: "/image1.png", text: "Material" },
              { icon: "/image2.png", text: "Cutting" },
              { icon: "/image3.png", text: "QC" },
              { icon: "/image4.png", text: "Dispatch" },
            ].map(({ icon, text }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white border rounded-lg px-4 py-3 sm:px-5 sm:py-4 shadow-sm hover:shadow-md transition w-[45%] sm:w-auto"
              >
                <img src={icon} alt={text} className="w-7 h-7 sm:w-8 sm:h-8 mb-2" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <a href="/enquiry">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg font-medium hover:opacity-90 transition duration-300 shadow-md">
                Request Quote
              </button>
            </a>
            <a href="/about">
              <button className="w-full sm:w-auto bg-white text-[#A01F16] border border-[#A01F16] py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg font-medium hover:bg-[#A01F16]/10 transition duration-300 shadow-sm">
                Learn More
              </button>
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-xs sm:text-sm flex items-center text-red-500 mt-3">
            <BiBlock className="mr-2 text-base sm:text-lg" />
            No extra cutting charges · Transparent pricing
          </p>
        </div>

        {/* Right Side Image */}
        <div className="order-1 md:order-2 w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
          <img
            src="/newAbout.webp"
            alt="Cut-to-Length TMT Service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
