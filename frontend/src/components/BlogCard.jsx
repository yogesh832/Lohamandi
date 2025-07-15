import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blogs/${blog._id}`)}
      className="cursor-pointer bg-white shadow-sm rounded-lg overflow-hidden border hover:shadow-md transition"
    >
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span className="text-red-500 font-semibold">{blog.tag}</span>
          <span>{blog.date} {blog.month}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h3>

        <p className="text-sm text-gray-600">
          {blog.desc?.length > 120 ? blog.desc.slice(0, 120) + "..." : blog.desc}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
