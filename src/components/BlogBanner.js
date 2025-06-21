import React from "react";

const BlogBanner = () => {
  return (
  <section
  className="w-full min-h-[85vh] bg-center bg-cover relative overflow-hidden rounded-2xl mt-5 p-2"
  style={{ backgroundImage: "url('/blogbanner.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl " />

  {/* Content */}
  <div className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 p-10">
    {/* Left Content */}
    <div className="flex flex-col justify-center items-start p-6 sm:p-10 text-white gap-6 sm:gap-6">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mt-24">
     Steel Industry Insights
      </h1>
      <p className="text-sm sm:text-lg max-w-md">
       Stay updated with latest in steeel,construction trends, and smart building tips - straight from the team at Lohamandi
      </p>
    </div>
  </div>
</section>


   
    
  
  );
};

export default BlogBanner;
