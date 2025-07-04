import React from "react";

const BlogReview = () => {
  return (
    <section className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-12 text-lg">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <p className="text-[#A01F16] font-semibold mb-2 text-base sm:text-lg">
            Trusted by Professionals
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            From timely steel delivery to zero material mismatch — see how Lohamandi is helping
            contractors, dealers, and engineers streamline their construction needs.
          </p>
          <div className="flex space-x-4">
            <button className="border border-black px-4 py-2 rounded hover:bg-gray-200">
              ←
            </button>
            <button className="border border-black px-4 py-2 rounded hover:bg-gray-200">
              →
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-black shadow-md rounded-lg p-6">
            <div className="text-black text-xl mb-2">★★★★★</div>
            <p className="text-gray-700 mb-4 text-base">
              “Lohamandi’s platform made it easy to compare prices and get materials on-site faster than ever. It’s now our go-to solution for steel procurement.”
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt="Ravi"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Ravi Malhotra</p>
                <p className="text-sm text-gray-500">Ghaziabad</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-black shadow-md rounded-lg p-6">
            <div className="text-black text-xl mb-2">★★★★★</div>
            <p className="text-gray-700 mb-4 text-base">
              “What sets Lohamandi apart is their reliability. Materials always arrive on time and the support team is incredibly responsive.”
            </p>
            <div className="flex items-center space-x-3 mt-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Neha"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Neha Arora</p>
                <p className="text-sm text-gray-500">Noida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogReview;

