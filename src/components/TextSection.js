import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const TextSection = () => {
  return (
    <section className="bg-[#FFF4F4] min-h-[80vh] py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <p className="text-[#A01F16] text-xl font-semibold">Lower emissions. Higher impact.</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black">
            Sustainable Steel. <br /> Seriously.
          </h2>
          <p className="text-gray-600 text-lg max-w-xl">
            We cut carbon, not corners. With CNG trucks, custom sizing,
            and eco practices, we help you build better — and cleaner.
          </p>
          <ul className="space-y-4 text-lg text-black">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#D61349] text-xl" />
              CNG-powered deliveries to cut fuel emissions
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#D61349] text-xl" />
              Custom-cut TMT bars to reduce material waste
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#D61349] text-xl" />
              Minimal & recyclable packaging
            </li>
          </ul>
          <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white text-lg px-8 py-4 rounded-md hover:opacity-90 transition duration-300">
            <a href="/enquiry">Request Quote</a>
          </button>
        </div>

      <div className="flex justify-center md:justify-end">
  <img
    src="/blogcontent.png" // replace with actual path
    alt="Lohamandi Truck"
    className="rounded-2xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default TextSection;
