import React from "react";


const BlogReview = () => {
  return (
  <section className="h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-8 text-lg">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <p className="text-[#A01F16]-700 font-semibold mb-2">Real feedback. Real results.</p>
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 mb-6">
            From on-time delivery to zero wastage — hear how Loha Mandi is helping builders,
            contractors, and suppliers work smarter every day.
          </p>
          <div className="flex space-x-4">
            <button className="border border-black p-2.5 rounded hover:bg-gray-200">
              ←
            </button>
            <button className="border border-black p-2.5 rounded hover:bg-gray-200">
              →
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {/* Card 1 */}
          <div className="min-w-[350px] bg-white border border-black shadow-md rounded-lg p-6 border">
            <div className="text-black text-xl mb-2">★★★★★</div>
            <p className="text-gray-700 mb-4">
              "We’ve worked with Lohamandi Service on multiple projects, and they’ve never let us
              down. Their commitment to quality and customer satisfaction is evident..."
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Anjali"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Anjali S</p>
                <p className="text-sm text-gray-500">Delhi</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[350px] bg-white border border-black shadow-md rounded-lg p-6 border">
            <div className="text-black text-xl mb-2">★★★★★</div>
            <p className="text-gray-700  mb-4">
              "I’m extremely pleased with Loha Mandi Service. From inquiry to delivery, everything
              was seamless. The products are high quality..."
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-semibold">Rajesh P</p>
                <p className="text-sm text-gray-500">Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogReview;
