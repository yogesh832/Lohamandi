// --- AdminDashboard.jsx ---
import React, { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
const res = await axios.get("http://localhost:8000/api/blog");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-6">Post a New Blog</h1>
        <BlogForm onBlogPosted={fetchBlogs} />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
