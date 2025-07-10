import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const HomeProducts = () => {
  const products = [
    { name: 'TMT ProMax 500D', image: '/product1.png' },
    { name: 'TMT Bars 10 MM', image: '/product2.png' },
    { name: 'TMT Bars 12 MM', image: '/product3.png' },
    { name: 'TMT Bars 16 MM', image: '/product4.png' },
    { name: 'TMT Bars 20 MM', image: '/product5.png' },
    { name: 'TMT Bars 25 MM', image: '/product6.png' },
    { name: 'TMT Bars 32 MM', image: '/product7.png' },
    { name: 'TMT Bars 40 MM', image: '/product8.png' },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h4 className="text-[#A01F16] text-xl font-semibold">Products</h4>
        <h1 className="text-black text-3xl sm:text-4xl font-bold">Explore Our Steel Products</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E]/10 text-black rounded-xl overflow-hidden shadow-md w-full max-w-[280px] h-[380px] p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-3 text-center">{product.name}</h3>
              <div className="flex justify-center items-center gap-2">
                <a
                  href="/productenquiry"
                  className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Enquire Now
                </a>
                <a
                  href="https://wa.me/9876543210"
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="tel:+9876543210"
                  className="bg-[#1E1E1E]/2 text-black p-2 rounded-md hover:bg-gray-100 transition"
                  title="Call"
                >
                  <FaPhone size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default HomeProducts;
