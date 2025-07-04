import React from 'react';

const HomeProducts = () => {
  const products = [
    {
      name: 'TMT ProMax 500D',
      image: '/product1.png'
    },
    {
      name: 'TMT Bars 10 MM',
      image: '/product2.png'
    },
    {
      name: 'TMT Bars 12 MM',
      image: '/product3.png'
    },
    {
      name: 'TMT Bars 16 MM',
      image: '/product4.png'
    },
    {
      name: 'TMT Bars 20 MM',
      image: '/product5.png'
    },
    {
      name: 'TMT Bars 25 MM',
      image: '/product6.png'
    },
    {
      name: 'TMT Bars 32 MM',
      image: '/product7.png'
    },
    {
      name: 'TMT Bars 40 MM',
      image: '/product8.png'
    }
  ];

  return (
  <div className="bg-white min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h4 className="text-[#A01F16] text-lg font-semibold">Products</h4>
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
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <button className="mt-2 w-full bg-gradient-to-r from-[#F17556] to-[#D61349] text-white 
              font-bold py-3 rounded-md hover:opacity-90 transition duration-300">
                 <a href="/productenquiry">Request Quote</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[#A01F16] text-lg sm:text-base">
        All available in Fe 415/ Fe 500/ Fe 550/ Fe 600 grades
        </p>
      </div>
    </div>
  );
};

export default HomeProducts;

