import React from 'react';

const ProductsPage = () => {
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: '/sample-product.jpg', // Replace with real image path
  }));

  return (
    <div className="bg-[#D61349] text-black py-10 px-4 sm:px-10">
      {/* Headings */}
      <div className="text-center mb-10">
        <h4 className="text-[#A01F16] text-lg font-semibold uppercase">Products</h4>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Products Available</h1>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-[#1E1E1E] rounded-lg overflow-hidden text-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-black text-lg font-semibold mb-2">{product.name}</h2>
              <button className="mt-2 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-2 px-4 rounded hover:opacity-90 transition duration-300">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Maroon Line Text */}
      <div className="mt-10 text-center text-white bg-[#A01F16] py-6 px-4 rounded text-sm sm:text-base">
        We offer a wide range of high-quality products tailored to your construction and industrial needs with guaranteed satisfaction.
      </div>
    </div>
  );
};

export default ProductsPage;