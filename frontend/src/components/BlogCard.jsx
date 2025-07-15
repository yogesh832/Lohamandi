import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg border shadow-sm overflow-hidden bg-white">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-gray-500 font-semibold">
          {blog.date} {blog.month}
        </span>
        <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{blog.desc}</p>
        <span className="inline-block mt-3 px-3 py-1 text-xs bg-gray-100 rounded-full">
          {blog.tag}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
