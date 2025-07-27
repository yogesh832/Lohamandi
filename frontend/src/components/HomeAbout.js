import React from 'react';

const HomeAbout = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="/about.webp"
            alt="CTL Process"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h4 className="text-[#A01F16] text-xl font-semibold">CTL Service</h4>
          <h1 className="text-3xl sm:text-4xl font-bold text-black">
            How Does CTL Work?
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            At Lohamandi, we simplify your steel buying. CTL (Cut to Length) lets you get precise TMT bar sizes, reducing waste and cost. Here’s how we do it.
          </p>

          {/* Subheadings with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[
              { icon: '/image1.png', text: 'Material Selection' },
              { icon: '/image2.png', text: 'Material Preparation' },
              { icon: '/image3.png', text: 'Cutting' },
              { icon: '/image4.png', text: 'Quality Control' }
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={icon} alt={text} className="w-8 h-8" />
                <span className="font-medium text-gray-800">{text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 rounded-lg hover:opacity-90 transition duration-300">
              <a href="/enquiry">Request Quote</a>
            </button>
            <button className="bg-white text-black border border-black py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
