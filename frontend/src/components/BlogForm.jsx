import React, { useEffect, useState } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BlogForm = ({ onBlogPosted, editingBlog, setEditingBlog }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    desc: "",
    tag: "",
    date: "",
    month: "",
    img: null,
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
  });

  useEffect(() => {
    if (editingBlog) {
      setForm({
        title: editingBlog.title || "",
        content: editingBlog.content || "",
        desc: editingBlog.desc || "",
        tag: editingBlog.tag || "",
        date: editingBlog.date || "",
        month: editingBlog.month || "",
        img: null,
        metaTitle: editingBlog.metaTitle || "",
        metaKeywords: editingBlog.metaKeywords || "",
        metaDescription: editingBlog.metaDescription || "",
      });
    }
  }, [editingBlog]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setForm({ ...form, img: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Always append all fields, avoid skipping desc
    Object.keys(form).forEach((key) => {
      if (key === "img") {
        if (form.img) formData.append("img", form.img);
      } else {
        formData.append(key, form[key] ?? "");
      }
    });

    try {
      if (editingBlog) {
        await axios.put(
          `https://lohamandi.com/api/blog/${editingBlog._id}`,
          formData
        );
        setEditingBlog(null);
      } else {
        await axios.post(`https://lohamandi.com/api/blog`, formData);
      }

      // Reset form
      setForm({
        title: "",
        content: "",
        desc: "",
        tag: "",
        date: "",
        month: "",
        img: null,
        metaTitle: "",
        metaKeywords: "",
        metaDescription: "",
      });

      onBlogPosted();
    } catch (err) {
      console.error("Error submitting blog:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded shadow-md max-w-2xl mx-auto"
    >
      {/* Blog Title */}
      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      {/* Blog Content */}
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Blog Content
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={form.content}
          id="content"
          placeholder="Enter your blog content here..."
          onChange={(event, editor) => {
            const data = editor.getData();
            setForm((prev) => ({ ...prev, content: data }));
          }}
        />
      </div>

      {/* Blog Description */}
      <div className="mb-6">
        <label
          htmlFor="desc"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Blog Description
        </label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter short blog description"
          value={form.desc}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Blog Tag */}
      <input
        type="text"
        name="tag"
        placeholder="Blog Tag"
        value={form.tag}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* Date + Month */}
      <div className="flex gap-4">
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleChange}
          className="flex-1 border p-2 rounded"
        />
        <input
          type="text"
          name="month"
          placeholder="Month"
          value={form.month}
          onChange={handleChange}
          className="flex-1 border p-2 rounded"
        />
      </div>

      {/* Blog Image */}
      <input
        type="file"
        name="img"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
        required={!editingBlog}
      />

      {/* SEO Options */}
      <div className="border-t pt-6">
        <h3 className="font-bold mb-4">SEO Options</h3>
        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          value={form.metaTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <input
          type="text"
          name="metaKeywords"
          placeholder="Meta Keywords"
          value={form.metaKeywords}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-2"
        />
        <textarea
          name="metaDescription"
          placeholder="Meta Description"
          value={form.metaDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingBlog ? "Update Blog" : "Create Blog"}
        </button>
        {editingBlog && (
          <button
            type="button"
            onClick={() => setEditingBlog(null)}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BlogForm;
