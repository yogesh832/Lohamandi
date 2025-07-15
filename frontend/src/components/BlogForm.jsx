import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ onBlogPosted }) => {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    tag: "",
    img: null, // for file object
    date: "",
    month: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("desc", form.desc);
    formData.append("tag", form.tag);
    formData.append("img", form.img); // file object
    formData.append("date", form.date);
    formData.append("month", form.month);

    try {
      await axios.post("http://localhost:8000/api/blog", formData);
      onBlogPosted();
      setForm({
        title: "",
        desc: "",
        tag: "",
        img: null,
        date: "",
        month: "",
      });
    } catch (err) {
      console.error("Blog post error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="desc"
        placeholder="Description"
        value={form.desc}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <input
        name="tag"
        placeholder="Tag"
        value={form.tag}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="file"
        accept="image/*"
        name="img"
        onChange={handleFileChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="date"
        placeholder="Date (e.g. 09)"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="month"
        placeholder="Month (e.g. JUN)"
        value={form.month}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Post Blog
      </button>
    </form>
  );
};

export default BlogForm;
