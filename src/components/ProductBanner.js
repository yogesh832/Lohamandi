import React from "react";

const ProductBanner = () => {
  return (
    <section
      className="w-full min-h-[85vh] bg-center bg-cover relative overflow-hidden rounded-2xl mt-5"
      style={{ backgroundImage: "url('/productbanner.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl" />

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 p-6 sm:p-10">
        {/* Left Content with Blur */}
        <div className="flex flex-col justify-center items-start gap-10  bg-black/10 rounded-2xl p-6 sm:p-10 text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            TMT Bars, Delivered Your Way
          </h1>
          <p className="text-sm sm:text-lg max-w-md">
            Order high-quality, ISI certified TMT bars in custom lengths, delivered directly to your site. Enjoy hassle-free steel buying with Lohamandi.
          </p>

          {/* Buttons aligned with text */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
              Request Quote
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
