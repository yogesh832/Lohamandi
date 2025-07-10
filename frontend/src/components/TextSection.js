import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TextSection = () => {
  return (
    <section className="bg-[#FFF4F4] py-10 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-10 lg:gap-16 h-full">
        {/* Image First on Mobile/Tablet, Right on Desktop */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center lg:justify-end">
          <img
            src="/blogcontent.png"
            alt="Lohamandi Truck"
            className="rounded-2xl object-cover w-full h-full max-h-[400px] lg:max-h-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-[#A01F16] text-lg sm:text-xl font-semibold">
            Lower emissions. Higher impact.
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Sustainable Steel. <br /> Seriously.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            We cut carbon, not corners. With CNG trucks, custom sizing, and eco
            practices, we help you build better, and cleaner.
          </p>

          <ul className="space-y-4 text-base px-4 sm:text-lg text-black">
            <li className="flex items-start justify-start gap-3 text-left">
              <FaCheckCircle className="text-[#D61349] text-xl mt-1 ml-1" />
              CNG-powered deliveries to cut fuel emissions
            </li>
            <li className="flex items-start justify-start gap-3 text-left">
              <FaCheckCircle className="text-[#D61349] text-xl mt-1 ml-1" />
              Custom-cut TMT bars to reduce material waste
            </li>
            <li className="flex items-start justify-start gap-3 text-left">
              <FaCheckCircle className="text-[#D61349] text-xl mt-1 ml-1" />
              Minimal & recyclable packaging
            </li>
          </ul>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:opacity-90 transition duration-300">
              <a href="/enquiry">Request Quote</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
