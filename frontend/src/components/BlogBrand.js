import React from "react";

const BlogBrand = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF3F3] py-4 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto text-center space-y-6 overflow-hidden">
        <h2 className="text-4xl sm:text-5xl  text-black">
          Trusted Steel Brands
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Lohamandi collaborates with leading manufacturers to ensure you receive
          high-quality steel at the best market price.
        </p>

        {/* Marquee effect */}
        <div className="relative overflow-hidden mt-10">
          <div className="flex animate-marquee space-x-10">
            {[
              { src: "/logo8.png", alt: "Moira" },
              { src: "/logo2.png", alt: "Mahaan" },
              { src: "/logo3.png", alt: "Jindal" },
              { src: "/logo4.png", alt: "Mongia" },
              { src: "/logo6.png", alt: "Thermocon" },
              { src: "/logo5.png", alt: "Rashmi" },
              { src: "/logo3.png", alt: "Maithan" },
              { src: "/logo1.png", alt: "Shyam" },
              // repeat for smooth looping
              { src: "/logo8.png", alt: "Moira" },
              { src: "/logo2.png", alt: "Mahaan" },
              { src: "/logo3.png", alt: "Jindal" },
              { src: "/logo4.png", alt: "Mongia" },
              { src: "/logo6.png", alt: "Thermocon" },
              { src: "/logo5.png", alt: "Rashmi" },
              { src: "/logo3.png", alt: "Maithan" },
              { src: "/logo1.png", alt: "Shyam" },
            ].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-30 w-48 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBrand;
