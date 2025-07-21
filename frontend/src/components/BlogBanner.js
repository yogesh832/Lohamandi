import React from "react";

const BlogBanner = () => {
  return (
    <section
      className="w-full min-h-[85vh] bg-center bg-cover relative overflow-hidden rounded-2xl mt-5"
      style={{ backgroundImage: "url('/blogbanner.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl" />

      {/* Content in Middle of Banner */}
      <div className="relative z-10 flex items-center justify-center min-h-[85vh] p-4 sm:p-8 md:p-12">
        <div className="text-white max-w-3xl text-center flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Steel Industry Insights
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            Stay updated with the latest in steel, construction trends, and
            smart building tips, straight from the team at Lohamandi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
