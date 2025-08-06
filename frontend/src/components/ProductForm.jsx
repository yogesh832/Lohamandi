// components/ProductForm.jsx
import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CLOUDINARY_UPLOAD_PRESET = "blog_upload";
const CLOUDINARY_CLOUD_NAME = "dil5x4cxh";

const ProductForm = ({ isEdit = false, productData = {}, onSubmit }) => {
  const [title, setTitle] = useState(productData.title || "");
  const [slug, setSlug] = useState(productData.slug || "");
  const [content, setContent] = useState(productData.content || "");
  const [additional, setAdditional] = useState(productData.additional || "");
  const [image, setImage] = useState(productData.image || "");
  const [allProducts, setAllProducts] = useState([]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      form
    );

    setImage(res.data.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit({ title, slug, content, additional, image });
    } else {
      try {
        const res = await axios.post("http://localhost:8000/api/products", {
          title,
          slug,
          content,
          additional,
          image,
        });
        alert("Product created successfully");
        fetchProducts();
      } catch (error) {
        console.error("Create product error", error);
      }
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");
      setAllProducts(res.data);
    } catch (error) {
      console.error("Fetch products error", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          placeholder="Slug (e.g. tmt-bars)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full border p-2"
          required
        />
        <textarea
          placeholder="Additional Content (optional)"
          value={additional}
          onChange={(e) => setAdditional(e.target.value)}
          className="w-full border p-2"
        />
        <ReactQuill value={content} onChange={setContent} theme="snow" />
        <input type="file" onChange={handleImageUpload} className="mt-2" />
        {image && <img src={image} alt="Product" className="h-24" />}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {isEdit ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="p-4 mt-8 border-t">
        <h2 className="text-lg font-semibold mb-4">All Products</h2>
        <ul className="space-y-2">
          {allProducts.map((prod) => (
            <li key={prod._id} className="border p-2 rounded">
              <h3 className="font-bold">{prod.title}</h3>
              <p className="text-sm text-gray-600">Slug: {prod.slug}</p>
              <img src={prod.image} alt={prod.title} className="h-20 mt-2" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductForm;