import React from "react";

const BlogContent = () => {
  return (
    <section className="bg-[white] min-h-[90vh] py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A61349] text-lg sm:text-xl font-semibold">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-black mt-2">
          solutions, built for efficiency.
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
            We provide innovative and reliable steel solutions tailored to your
            project’s needs, ensuring durability, performance, and
            cost-efficiency at every step
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left 4 Cards */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol1.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Cut-to-Length TMT Bars
                  </h3>
                  <p className="text-gray-600">
                    Less waste, less cost, faster build
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol2.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Customized TMT Columns
                  </h3>
                  <p className="text-gray-600">
                    Delivered pre-tied to your specs
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol3.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Home Delivery
                  </h3>
                  <p className="text-gray-600">
                    Direct to your site, no middleman
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol4.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Free TMT tying services
                  </h3>
                  <p className="text-gray-600">
                    We bring the tools - and the skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-stretch h-full">
            <img
              src="/blog.webp"
              alt="Warehouse"
              className="rounded-xl w-full max-w-sm max-h-[1100px] object-cover"
            />
          </div>

          {/* Right 4 Cards */}
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol5.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Free Engineer Consultation
                  </h3>
                  <p className="text-gray-600">
                    Advice on design, savings & best practices
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol6.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Certified Quality
                  </h3>
                  <p className="text-gray-600">
                    Only the top brands, ISI-certified & trusted
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol7.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Live Order Tracking
                  </h3>
                  <p className="text-gray-600">
                    Know exactly when your steel arrives
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-6 bg-white border-black shadow-md">
              <div className="flex items-center gap-4">
                <img src="/symbol8.png" alt="CTL Process" />
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Best Market Prices
                  </h3>
                  <p className="text-gray-600">
                    Transparent, Honest, Unbeatable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-10 sm:flex-row gap-4">
        <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white text-lg px-8 py-4 rounded-md hover:opacity-90 transition duration-300">
          <a href="/enquiry">Request Quote</a>
        </button>
        <a href="/blogs">
          <button className="bg-white border border-black text-black text-lg px-8 py-4 rounded-md hover:opacity-90 transition duration-300">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
};

export default BlogContent;
