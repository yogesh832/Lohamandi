// --- SeoForm.jsx ---
import React, { useEffect, useState } from "react";
import axios from "axios";

const SeoForm = ({ slug, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    keywords: "",
    ogImage: "",
    canonicalUrl: "",
    robots: "index,follow",
    slug: "", // ✅ add slug field here
  });

  const isNew = slug === "/new-slug";

  useEffect(() => {
    if (!isNew) {
      axios
        .get(`https://lohamandi-3.onrender.com/api/seo${slug}`)
        .then((res) => setForm(res.data))
        .catch((err) => console.error("Fetch error:", err));
    } else {
      setForm({
        title: "",
        description: "",
        keywords: "",
        ogImage: "",
        canonicalUrl: "",
        robots: "index,follow",
        slug: "", // ✅ reset slug
      });
    }
  }, [slug]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        slug: form.slug.trim().startsWith("/")
          ? form.slug.trim()
          : "/" + form.slug.trim(), // ✅ normalize slug
      };

      await axios.post("https://lohamandi-3.onrender.com/api/seo", payload);
      onSave();
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Enter title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="slug"
        placeholder="/your-page-slug"
        value={form.slug}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Enter description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <input
        name="keywords"
        placeholder="Enter keywords"
        value={form.keywords}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="ogImage"
        placeholder="Enter og image URL"
        value={form.ogImage}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="canonicalUrl"
        placeholder="Enter canonical URL"
        value={form.canonicalUrl}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="robots"
        placeholder="index,follow"
        value={form.robots}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save SEO
      </button>
    </form>
  );
};

export default SeoForm;
