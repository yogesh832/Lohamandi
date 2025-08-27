import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

// Reusable Product Card
const ProductCard = ({ product }) => {
  return (
    <a
      href={`/${product.slug}`}
      className="bg-white text-gray-900 rounded-xl overflow-hidden shadow-md 
                 w-full sm:w-[300px] md:w-[340px] lg:w-[360px] h-[380px] 
                 p-4 flex flex-col border border-gray-100
                 transform hover:-translate-y-2 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
    >
      {/* Product Image */}
      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover rounded-lg 
                     transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ) : (
        <div className="w-full h-56 bg-gray-100 flex items-center justify-center rounded-lg">
          <span className="text-gray-400">No Image</span>
        </div>
      )}

      {/* Product Details */}
      <div className="mt-4 flex flex-col flex-grow text-center px-2">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 text-gray-900">
          {product.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.content }}
        ></p>

        {/* Buttons */}
        <div className=" flex justify-center items-center gap-3">
          {/* Enquire */}
          <a
            href="/enquiry"
            className="bg-gradient-to-r from-[#F17556] to-[#D61349] hover:opacity-90 
                       text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
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
            className="bg-gray-100 text-gray-800 p-2 rounded-md hover:bg-gray-200 transition-all duration-300"
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
    const [categories, setCategories] = useState([]);

 // ✅ Your desired order (use title exactly as from API)
  const customOrder = [
    "TMT Bar ", // First priority
    "Angles",
    "Channels",
    "Squares",
    "Flats",
    "binding wire"
  ];

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://lohamandi.com/api/products");
      const fetchedCategories = res.data.data || [];

      // ✅ Normalize titles in lookup
      const lookup = {};
      fetchedCategories.forEach(cat => {
        lookup[cat.title.trim().toLowerCase()] = cat;
      });

      // ✅ Arrange according to customOrder (case-insensitive, trim spaces)
      const arranged = customOrder.map(item => {
        if (item === "|") return "|";
        return lookup[item.trim().toLowerCase()] || null;
      }).filter(item => item !== null);

      // ✅ Add any remaining categories not in customOrder
      const remaining = fetchedCategories.filter(
        cat => !customOrder
          .map(i => i.trim().toLowerCase())
          .includes(cat.title.trim().toLowerCase())
      );

      setCategories([...arranged, ...remaining]);
    } catch (err) {
      console.error("Failed to fetch categories", err);
    }
  };
  fetchCategories();
}, []);


  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-8">
      <div className=" max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h4 className="text-[#A01F16] text-xl font-semibold">Products Range</h4>
        <h1 className="text-black text-3xl sm:text-4xl ">
          Explore Our Steel Products
        </h1>
         <p className="text-black text-base sm:text-lg">
          Choose from a wide range of high-quality, custom-size ready TMT bars.
        </p>
      </div>

      {/* Product Cards - Flex Layout */}
      <div className="flex flex-wrap justify-center gap-6">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No categories available</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default HomeProductCategory;
