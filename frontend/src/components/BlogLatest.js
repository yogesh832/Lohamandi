import React from "react";

const BlogLatest = () => {
  return (
    <section className="bg-[#E7F0DD] py-8 px-4 sm:px-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-[#A01F16] text-lg sm:text-xl font-medium">
          Tips, trends, and updates from the world of steel.
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-black mt-1">
          Insights for Smarter Building
        </h1>
      </div>

      {/* Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Large Left Image */}
        <div className="flex-1 relative rounded-xl overflow-hidden shadow-md h-[320px]">
          <img
            src="/bloglatest.webp"
            alt="Custom Length TMT Bars"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
              transition duration-300 border border-white mt-2 mb-2">
              Construction Tips
            </button>
            <h2 className="text-lg sm:text-xl font-semibold leading-tight">
              5 Reasons Why Custom-Length TMT Bars Save You Time & Money
            </h2>
            <a href="blog">
              <button className="mt-3 px-4 py-2 bg-white text-black text-sm font-semibold rounded-md">
                Read more →
              </button>
            </a>
          </div>
        </div>

        {/* Right Column - Two Smaller Blogs */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Blog 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-md h-[150px] sm:h-[160px]">
            <img
              src="/bloglatest2.webp"
              alt="Eco Friendly Steel"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
                transition duration-300 border border-white mb-1">
                Sustainability
              </button>
              <h3 className="text-sm sm:text-base font-semibold">
                How Eco-Friendly Steel Delivery is Changing the Construction Game
              </h3>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-md h-[150px] sm:h-[160px]">
            <img
              src="/bloglatest3.webp"
              alt="TMT Bar Grades"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
                transition duration-300 border border-white mb-1">
                Product Knowledge
              </button>
              <h3 className="text-sm sm:text-base font-semibold">
                TMT Bar Grades Explained: Which One is Right for Your Project?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLatest;
