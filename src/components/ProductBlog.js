import React from "react";

const ProductBlog = () => {
  return (
    <section className="min-h-[90vh] bg-white flex items-center justify-center px-6 py-12 sm:px-12">
      <div className="relative w-full max-w-7xl h-[70vh] rounded-4xl overflow-hidden shadow-lg">
        <img
          src="/productblog.jpg" // Replace with actual image path
          alt="Ready to Build Smarter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-lg font-semibold mb-2">Let’s get steel moving.</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
            Ready to Build Smarter?
          </h1>
          <p className="text-lg font-semibold mb-6 max-w-xl">
            Get in touch now for custom quotes, or explore our product range.
          </p>
          <button className="px-6 py-3 border border-white text-white
           rounded-md text-xl  hover:bg-white hover:text-black transition duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductBlog;