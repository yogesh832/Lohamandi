import React from "react";

const AboutBanner = () => {
  return (
    <section
      className="w-full min-h-[80vh] bg-cover bg-center grid grid-cols-1 md:grid-cols-2 relative"
      style={{ backgroundImage: "url('/aboutpage.png')" }}
    >
      {/* Overlay for backdrop blur (only on mobile) */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] sm:backdrop-blur-0 sm:bg-transparent z-0" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-center items-start w-full px-4 py-10 sm:p-10 text-black gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          About Us
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Delivered Your Way
        </h1>
        <p className="text-base sm:text-lg text-justify max-w-full sm:max-w-lg text-black">
          At Lohamandi, we're reshaping how India buys steel. Whether you're a
          contractor, builder, or supplier, we bring you quality steel products,
          custom-cut options, and reliable doorstep delivery, all through a
          smooth and digital experience.
        </p>
        <div className="w-full sm:w-auto">
          <a href="/enquiry">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
              Request Quote
            </button>
          </a>
        </div>
      </div>

      {/* Empty Right Column for layout */}
      <div className="relative z-10" />
    </section>
  );
};

export default AboutBanner;
