import React from "react";
import { FaFacebook ,FaTwitter,FaLinkedin} from "react-icons/fa";

const IndBanner = () => {
  return (
    <section
      id="indbanner"
      className="min-h-[70vh] bg-pink-50 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-10"
    >
      <div className="max-w-5xl w-full text-center space-y-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          5 Reasons Why Custom-Length TMT Bars <br /> Save You Time & Money
        </h1>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/indpage.png"
            alt="Construction site with TMT bars"
            className="object-cover w-full h-56 sm:h-72 md:h-[60vh]"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4 pt-4 px-2">
          {/* Author & Date */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Lohamandi Logo" className="w-10 h-12" />
            <span className="font-medium">Lohamandi Services</span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span>June 09, 2025</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-black"><FaFacebook/></span>
            <span className="cursor-pointer hover:text-black"><FaLinkedin/></span>
            <span className="cursor-pointer hover:text-black"><FaTwitter/></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndBanner;

