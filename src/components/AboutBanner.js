import React from 'react';


const AboutBanner = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full min-h-[80vh] bg-cover bg-center grid grid-cols-1  bg-white/50 md:grid-cols-2"
        style={{ backgroundImage: "url('/aboutpage.png')" }}
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start w-full p-6 sm:p-10 text-black  gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">About Us</h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">Delivered Your Way</h1>
          <p className="text-sm sm:text-lg max-w-full sm:max-w-lg text-black-200">
          At Lohamandi, we're reshaping how India buys steel. Whether you're contracter,builder or supplier, we bring you quality
          steel products,custom-cut options, and reliable doorstep deievery-all through a smooth and digital experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-4 px-6 rounded-lg hover:opacity-90 transition duration-300">
              Request Quote
            </button>
     
          </div>
        </div>

        {/* Right Contact Card */}
      
      </section>

      
    </div>
  );
};

export default AboutBanner;
