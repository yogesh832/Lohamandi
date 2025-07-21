import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCards = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://lohamandi.com/api/blog");
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="py-12 px-6 sm:px-10 lg:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <Link key={blog._id} to={`/blog/${blog._id}`}>
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
          ))}
        </div>

        {/* View All / View Less Button */}
        {blogs.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="border border-black text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-300 font-semibold"
            >
              {showAll ? "View Less" : "View All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCards;
