import React, { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://lohamandi.com/api/blog");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`https://lohamandi.com/api/blog/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleFormSubmit = () => {
    fetchBlogs();
    setEditingBlog(null);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="space-y-10 p-4">
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">
          {editingBlog ? "Edit Blog" : "Post a New Blog"}
        </h1>
        <BlogForm
          onBlogPosted={handleFormSubmit}
          editingBlog={editingBlog}
          setEditingBlog={setEditingBlog}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onEdit={setEditingBlog}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
