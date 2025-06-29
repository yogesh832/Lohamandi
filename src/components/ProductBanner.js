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
  
      <div className="relative flex justify-center items-center h-full z-10 p-6 sm:p-10">
  <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 bg-black/10 rounded-2xl p-6 sm:p-10 text-white max-w-3xl">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      TMT Bars, Delivered Your Way
    </h1>
    <p className="text-base sm:text-lg lg:text-xl max-w-xl">
      Order high-quality, ISI certified TMT bars in custom lengths, delivered directly to your site. Enjoy hassle-free steel buying with Lohamandi.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
      <button className="flex-1 sm:flex-initial flex items-center justify-center gap-3 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
        <a href="/enquiry">Request Quote</a>
      </button>
      <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
        Explore Products
      </button>
    </div>
  </div>
</div>

    </section>
  );
};

export default ProductBanner;

