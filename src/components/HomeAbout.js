import React from 'react';


const HomeAbout = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="w-full h-[80vh]">
          <img
            src="/about.png"
            alt="CTL Process"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h4 className="text-[#A01F16] text-xl font-semibold">CTL Service</h4>
          <h1 className="text-4xl md:text-4xl font-bold text-black">How Does CTL Work?</h1>
          <p className="text-gray-600 text-lgg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at eros tincidunt, tincidunt lorem vel, varius justo. Suspendisse ut lacus non nulla ultrices posuere.
          </p>

          {/* Subheadings with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3">
            <img src="/image1.png" alt="CTL Process"></img>
              <span className="font-medium text-gray-800">Material Selection</span>
            </div>
            <div className="flex items-center gap-3">
                <img src="/image2.png"  alt="CTL Process"></img>
              <span className="font-medium text-gray-800">Material Preparation</span>
            </div>
            <div className="flex items-center gap-3">
                 <img src="/image3.png"  alt="CTL Process"></img>
              <span className="font-medium text-gray-800">Cutting</span>
            </div>
            <div className="flex items-center gap-3">
                 <img src="/image4.png"  alt="CTL Process"></img>
              <span className="font-medium text-gray-800">Quality Control</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
              Request Quote
            </button>
            <button className="bg-white text-black border border-black py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
