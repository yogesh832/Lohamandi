// src/components/SeoForm.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const SeoForm = ({ slug }) => {
  const [seo, setSeo] = useState({
    title: "",
    description: "",
    keywords: "",
    ogImage: "",
    canonical: "",
    robots: "index,follow",
  });

  const formatSlug = (slug) => slug.replace(/^\/+/, "");

  useEffect(() => {
    if (!slug) return;

    const fetchSeoData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/seo/${formatSlug(slug)}`
        );
        setSeo(res.data || {});
      } catch {
        // New page - reset form
        setSeo({
          title: "",
          description: "",
          keywords: "",
          ogImage: "",
          canonical: "",
          robots: "index,follow",
        });
      }
    };

    fetchSeoData();
  }, [slug]);

  const handleChange = (e) => {
    setSeo({ ...seo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slug || slug === "/") {
      alert("Slug is missing or invalid.");
      return;
    }

    const formattedSlug = formatSlug(slug);

    try {
      const res = await axios.get(
        `http://localhost:8000/api/seo/${formattedSlug}`
      );

      if (res?.data) {
        // Update
        await axios.put(
          `http://localhost:8000/api/seo/${formattedSlug}`,
          seo
        );
      } else {
        // Create
        await axios.post("http://localhost:8000/api/seo", {
          slug,
          ...seo,
        });
      }
    } catch {
      // Create on error
      await axios.post("http://localhost:8000/api/seo", {
        slug,
        ...seo,
      });
    }

    alert("SEO saved!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      {[
        { name: "title", label: "Title" },
        { name: "description", label: "Description" },
        { name: "keywords", label: "Keywords" },
        { name: "ogImage", label: "OG Image URL" },
        { name: "canonical", label: "Canonical URL" },
        { name: "robots", label: "Robots" },
      ].map(({ name, label }) => (
        <div key={name}>
          <label className="block font-semibold mb-1">{label}</label>
          <input
            type="text"
            name={name}
            value={seo[name] || ""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        </div>
      ))}

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
