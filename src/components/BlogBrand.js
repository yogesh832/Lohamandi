import React from "react";

const BlogBrand = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#FFF3F3] min-h-[60vh] py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-black">Brands We have</h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>

        {/* Brand Logos */}
       <div className="grid grid-cols-2 sm:grid-cols-8 gap-4 items-center justify-center mt-10">
  <img src="/logo5.png" alt="Moira" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo2.png" alt="Mahaan" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo3.png" alt="Jindal" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo4.png" alt="Mongia" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo5.png" alt="Rashmi" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo6.png" alt="Thermocon" className="h-20 w-32 object-contain mx-auto" />
  <img src="/logo3.png" alt="Maithan" className="h-20 w-32 object-contain mx-auto" />
  <div className="w-32 h-14 flex items-center justify-center bg-[#FDD835]">
  <img src="/Shyam.jpg" alt="Shyam" className="max-h-full max-w-full object-contain rounded-lg" />
</div>

</div>

      </div>
    </section>
  );
};

export default BlogBrand;
