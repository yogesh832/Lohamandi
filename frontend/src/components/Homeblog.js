import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`https://lohamandi.com/api/blog`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-12 px-6 sm:px-10 lg:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Blogs</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <Link to={`/blog/${blog._id}`}>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white text-black rounded-md px-2 py-1 text-xs font-semibold text-center shadow">
                      <p className="leading-none">{blog.date}</p>
                      <p className="text-[10px] uppercase text-gray-500">
                        {blog.month}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {blog.desc?.length > 120
                        ? blog.desc.slice(0, 120) + "..."
                        : blog.desc}
                    </p>
                    <span className="inline-block text-xs font-semibold text-black border border-black px-3 py-1 rounded-full">
                      {blog.tag}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeBlog;
