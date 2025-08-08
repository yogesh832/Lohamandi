import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

// Reusable Product Card
const ProductCard = ({ product }) => {
  return (
    <a
      href={`/${product.slug}`}
      className="bg-[#1E1E1E]/10 text-black rounded-xl overflow-hidden shadow-md w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-[400px] p-4 flex flex-col 
                 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out"
    >
      {/* Product Image */}
      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ) : (
        <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">No Image</span>
        </div>
      )}

      {/* Product Details */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-center line-clamp-2">
          {product.title}
        </h3>

        {/* Buttons */}
        <div className="mt-auto flex justify-center items-center gap-2">
          {/* Enquire */}
          <a
            href="/enquiry"
            className="bg-gradient-to-r from-[#F17556] to-[#D61349] hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Enquire Now
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/+919910025184?text=I am interested in ${product.title}`}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300"
            title="WhatsApp"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={18} />
          </a>

          {/* Call */}
          <a
            href="tel:+919910025184"
            className="bg-[#1E1E1E]/20 text-black p-2 rounded-md hover:bg-gray-100 transition-all duration-300"
            title="Call"
          >
            <FaPhone size={18} />
          </a>
        </div>
      </div>
    </a>
  );
};

const HomeProductCategory = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setProducts(res.data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      {/* Title */}
      <div className="text-center mb-12">
        <h4 className="text-[#A01F16] text-xl font-semibold">Products</h4>
        <h1 className="text-black text-3xl sm:text-4xl font-bold">
          Explore Our Steel Products
        </h1>
      </div>

      {/* Product Cards - Flex Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </div>
  );
};

export default HomeProductCategory;
