// src/components/homeProductCategory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const HomeProductCategory = () => {
  const [allProducts, setAllProducts] = useState([]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setAllProducts(res.data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(allProducts) && allProducts.length > 0 ? (
          allProducts.map((prod) => (
            <div
              key={prod._id}
              className=" border rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              {prod.image ? (
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md mb-3">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-4">{prod.title}</h3>

              {/* Action Buttons */}
              <div className="flex justify-center gap-2">
                {/* Enquire Now Button */}
                <button
                      className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg">
                  Enquire Now
                </button>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/91xxxxxxxxxx?text=I am interested in ${prod.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                >
                  <FaWhatsapp size={18} />
                </a>

                {/* Phone Button */}
                <a
                  href="tel:+91xxxxxxxxxx"
                  className="bg-black text-white p-2 rounded-md hover:bg-gray-800"
                >
                  <FaPhoneAlt size={18} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeProductCategory;
