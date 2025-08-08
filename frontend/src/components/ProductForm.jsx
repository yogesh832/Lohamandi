import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [additional, setAdditional] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [editingProductId, setEditingProductId] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", title);
    form.append("slug", slug);
    form.append("content", content);
    form.append("price", price);
    form.append("additional", additional);
    form.append("metaTitle", metaTitle);
    form.append("metaKeywords", metaKeywords);
    form.append("metaDescription", metaDescription);

    if (imageFile) {
      form.append("img", imageFile);
    }

    try {
      setUploading(true);

      if (editingProductId) {
        await axios.put(`http://localhost:8000/api/products/${editingProductId}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Product updated");
      } else {
        await axios.post("http://localhost:8000/api/products", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Product created");
      }

      resetForm();
      fetchProducts();
    } catch (err) {
      console.error("❌ Error submitting product:", err.response?.data || err.message);
      alert("❌ Error submitting product");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      alert("🗑️ Product deleted");
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setPrice("");
    setContent("");
    setAdditional("");
    setImageFile(null);
    setMetaTitle("");
    setMetaKeywords("");
    setMetaDescription("");
    setEditingProductId(null);
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setAllProducts(res.data.data || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border-b max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">
          {editingProductId ? "Edit Product" : "Add Product"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Slug (e.g. tmt-bars)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      <input
  type="number"
  placeholder="(Price in ₹)"
  value={price}
  onChange={(e) => setPrice(e.target.value)} // ✅ Correct
  className="w-full border p-2 rounded"
  required
/>


        <textarea
          placeholder="Additional Info"
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <ReactQuill value={content} onChange={setContent} theme="snow" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
          <input
            type="text"
            placeholder="Meta Title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Meta Keywords"
            value={metaKeywords}
            onChange={(e) => setMetaKeywords(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Meta Description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="col-span-2 border p-2 rounded"
          />
        </div>

        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="mt-2"
          accept="image/*"
        />
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            {editingProductId ? "Update Product" : "Add Product"}
          </button>
          {editingProductId && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-2 text-sm underline text-gray-600"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
        {Array.isArray(allProducts) &&
          allProducts.map((prod) => (
            <div key={prod._id} className="border rounded-lg p-4 shadow-sm bg-white relative">
              {prod.image ? (
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded mb-2">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              <h3 className="text-lg font-bold">{prod.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{prod.slug}</p>
              <div
                className="text-sm text-gray-800 mb-3"
                dangerouslySetInnerHTML={{ __html: prod.content?.slice(0, 100) + "..." }}
              />

              <div className="flex justify-between">
                <button
                  onClick={() => {
                    setTitle(prod.title);
                    setContent(prod.content);
                    setSlug(prod.slug);
                    setPrice(prod.price);
                    setAdditional(prod.additional);
                    setMetaTitle(prod.metaTitle);
                    setMetaKeywords(prod.metaKeywords);
                    setMetaDescription(prod.metaDescription);
                    setEditingProductId(prod._id);
                  }}
                  className="text-blue-600 hover:underline text-sm"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(prod._id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductForm;
