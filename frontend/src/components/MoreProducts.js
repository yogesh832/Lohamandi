import React from "react";

const products = [
  {
    title: "TMT Bars",
    image: "/extra1.png", // Replace with actual path
    description: "Earthquake-resistant, high tensile strength. Cut-to-length options available.",
    tag: null,
  },
  {
    title: "Iron Wires",
    image: "/extra2.png", // Replace with actual path
    description: "Durable, multi-purpose wires for construction & reinforcement.",
    tag: null,
  },
  {
    title: "Steel Channels",
    image: "/extra3.png", // Replace with actual path
    description: "Structural elements for load-bearing and framework support.",
    tag: null,
  },
  {
    title: "Structural Steel",
    image: "/extra4.png", // Replace with actual path
    description: "MS Angles, Patti, Channels, and other ready-to-use fabrication components.",
    tag: "COMING SOON",
  },
];

export default function MoreProducts() {
  return (
    <section className="bg-[#FFF4F4] py-16 px-6 text-black" id="more-products">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-lg text-[#A01F16] -100">Product Range</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
          Explore Our Steel Products
        </h2>
        <p className="text-black text-base sm:text-lg">
          Choose from a wide range of high-quality, custom-size ready TMT bars.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 flex flex-col items-center shadow hover:shadow-lg transition duration-300 relative"
          >
            {product.tag && (
              <span className="absolute top-3 left-3 bg-red-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {product.tag}
              </span>
            )}
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
           <a href="/about"> <button className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition text-sm">
              Learn more
            </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
