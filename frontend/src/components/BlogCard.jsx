import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer bg-white shadow-sm rounded-lg overflow-hidden border hover:shadow-md transition">
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

        <p className="text-sm text-gray-600 mb-4">
          {blog.desc?.length > 120 ? blog.desc.slice(0, 120) + "..." : blog.desc}
        </p>

        {/* Buttons (only show if props exist) */}
        <div className="flex justify-end gap-2">
          {onEdit && (
            <button
              onClick={() => onEdit(blog)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(blog._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
