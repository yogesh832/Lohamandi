import React from "react";

const Homeblog = () => {
  return (
    <div className="bg-[#E7F0DD] min-h-screen py-12 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="/blog.png"
            alt="Blog Visual"
            className="w-full h-[300px] sm:h-[500px] md:h-[70vh] object-cover rounded-xl"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-[#A01F16] text-xl sm:text-2xl font-semibold">
            About Lohamandi
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
            India's trusted Online Steel Platform
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            Lohamandi is a B2B & B2C steel marketplace, connecting buyers with
            verified suppliers across India. From TMT Bars to structural steel,
            we ensure quality, custom sizing and doorstep delivery, all with
            just a few clicks.
          </p>
          <button
            className="bg-[#E7F0DD] text-black font-semibold px-6 py-3 sm:py-4 rounded-md hover:opacity-90 
                 transition duration-300 border border-black"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homeblog;
