import React from "react";

const BlogContent = () => {
  return (
    <section className="bg-[#E7F0DD] min-h-[90vh] py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="text-[#A61349] text-lg sm:text-xl font-semibold">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl text-black mt-2">
            Smart Steel Solutions, built for efficiency.
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mt-4 max-w-3xl mx-auto">
            We provide innovative and reliable steel solutions tailored to your
            project’s needs, ensuring durability, performance, and
            cost-efficiency at every step
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left 4 Cards */}
          <div className="space-y-6">
            {[
              {
                img: "/symbol1.png",
                title: "Cut-to-Length TMT Bars",
                desc: "Less waste, less cost, faster build",
              },
              {
                img: "/symbol2.png",
                title: "Customized TMT Columns",
                desc: "Delivered pre-tied to your specs",
              },
              {
                img: "/symbol3.png",
                title: "Home Delivery",
                desc: "Direct to your site, no middleman",
              },
              {
                img: "/symbol4.png",
                title: "Free TMT tying services",
                desc: "We bring the tools - and the skills",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-stretch h-full">
            <img
              src="/blog.webp"
              alt="Warehouse"
              className="rounded-xl w-full max-w-sm max-h-[1100px] object-cover shadow-xl"
            />
          </div>

          {/* Right 4 Cards */}
          <div className="space-y-6">
            {[
              {
                img: "/symbol5.png",
                title: "Free Engineer Consultation",
                desc: "Advice on design, savings & best practices",
              },
              {
                img: "/symbol6.png",
                title: "Certified Quality",
                desc: "Only the top brands, ISI-certified & trusted",
              },
              {
                img: "/symbol7.png",
                title: "Live Order Tracking",
                desc: "Know exactly when your steel arrives",
              },
              {
                img: "/symbol8.png",
                title: "Best Market Prices",
                desc: "Transparent, Honest, Unbeatable",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 bg-white border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h3 className="text-xl font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-center mt-10 sm:flex-row gap-4">
        <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-2xl hover:opacity-90 transition duration-300">
          <a href="/enquiry">Request Quote</a>
        </button>
        <a href="/blogs">
          <button className="bg-white border border-black text-black text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-2xl hover:opacity-90 transition duration-300">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
};

export default BlogContent;
