import React from "react";
import { FaCut } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
const HomeAbout = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFFFFF] py-12 px-4 sm:px-8 md:px-16 rounded-2xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Tag */}
          <h4 className="text-[#A01F16] bg-[#FEF2F2] text-sm flex gap-2  font-semibold">
         <FaCut/> <p className="">  Cut-to-Length (CTL) Service </p>
          </h4>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#A01F16] leading-snug">
            Your Steel. Your Size. Delivered Ready.
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            We cut TMT bars exactly to your required length—so you save time,
            eliminate scrap, and reduce costs. No extra cutting charges.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 text-gray-700 text-base">
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
          <div className="flex flex-wrap gap-4 mt-6">
            {[
              { icon: "/image1.png", text: "Material" },
              { icon: "/image2.png", text: "Cutting" },
              { icon: "/image3.png", text: "QC" },
              { icon: "/image4.png", text: "Dispatch" },
            ].map(({ icon, text }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-white border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition"
              >
                <img src={icon} alt={text} className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium text-gray-700">{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/enquiry">
              <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition duration-300 shadow-md">
                Request Quote
              </button>
            </a>
            <a href="/about">
              <button className="bg-white text-[#A01F16] border border-[#A01F16] py-3 px-6 rounded-lg font-medium hover:bg-[#A01F16]/10 transition duration-300 shadow-sm">
                Learn More
              </button>
            </a>
          </div>

          {/* Footer Note */}
          <p className="text-sm flex text-gray-500 mt-4">
        <span className="text-red-500 pr-2"> <BiBlock/> </span>  No extra cutting charges · Transparent pricing
          </p>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
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
