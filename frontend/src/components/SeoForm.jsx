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
    slug: "",
  });

  const isNew = slug === "/new-slug";

  useEffect(() => {
    if (!isNew) {
      axios
        .get(`https://lohamandi.com/api/seo${slug}`)
        .then((res) => setForm(res.data))
        .catch((err) => {
          console.error("Fetch error:", err);
          alert("Failed to load SEO page.");
        });
    } else {
      setForm({
        title: "",
        description: "",
        keywords: "",
        ogImage: "",
        canonicalUrl: "",
        robots: "index,follow",
        slug: "",
      });
    }
  }, [slug]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const normalizedSlug = form.slug.trim().startsWith("/")
        ? form.slug.trim()
        : "/" + form.slug.trim();

      const payload = {
        ...form,
        slug: normalizedSlug,
      };

      if (isNew) {
        await axios.post("https://lohamandi.com/api/seo", payload);
      } else {
        const encoded = encodeURIComponent(slug);
        await axios.put(`https://lohamandi.com/api/seo/${encoded}`, payload);
      }

      onSave();
    } catch (err) {
      console.error("Save error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
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
        placeholder="Enter og:image URL"
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
