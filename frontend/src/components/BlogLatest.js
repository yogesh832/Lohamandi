import React from "react";

const BlogLatest = () => {
  return (
    <section className="bg-[#E7F0DD] min-h-[110vh] py-12 px-6 sm:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#A01F16] text-xl sm:text-2xl font-medium">
          Tips, trends, and updates from the world of steel.
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-black mt-2">
          Insights for Smarter Building
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Left Image with Text */}
        <div className="col-span-1 lg:col-span-2 relative rounded-xl overflow-hidden shadow-md">
          <img
            src="/bloglatest.webp" // Replace with actual image path
            alt="Custom Length TMT Bars"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white ">
              <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
                 transition duration-300 border border-white mt-4 mb-2">
        Construction Tips
        </button>
            <h2 className="text-lg sm:text-xl font-semibold leading-tight">
              5 Reasons Why Custom-Length TMT Bars Save You Time & Money
            </h2>
            <a href="blog">
            <button className="mt-4 px-6 py-3 bg-white text-black text-sm font-semibold rounded-md">
              Read more →
            </button>
            </a>
          </div>
        </div>

        {/* Right Side Smaller Blogs */}
        <div className="flex flex-col gap-8">
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/bloglatest2.webp" // Replace with actual image path
              alt="Eco Friendly Steel"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
                 transition duration-300 border border-white mt-4 mb-2">
          Substainibility
        </button>
              <h3 className="text-lg sm:text-xl font-semibold">
                How Eco-Friendly Steel Delivery is Changing the Construction Game
              </h3>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/bloglatest3.webp" // Replace with actual image path
              alt="TMT Bar Grades"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
             
                 <button className="text-white font-semibold px-3 py-0 rounded-full hover:opacity-90 
                 transition duration-300 border border-white mt-4 mb-2">
          Product Knowledge
        </button>
            
              <h3 className="text-lg sm:text-xl font-semibold">
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