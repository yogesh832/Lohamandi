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

  const isNewPage = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/seo/${slug}`);
      return !!res.data;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    if (!slug) return;
    axios
      .get(`http://localhost:8000/api/seo/${slug}`)
      .then((res) => {
        if (res.data) {
          setSeo(res.data);
        } else {
          setSeo({
            title: "",
            description: "",
            keywords: "",
            ogImage: "",
            canonical: "",
            robots: "index,follow",
          });
        }
      })
      .catch(() => {
        setSeo({
          title: "",
          description: "",
          keywords: "",
          ogImage: "",
          canonical: "",
          robots: "index,follow",
        });
      });
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

    try {
      const res = await axios.get(
        `http://localhost:8000/api/seo/${encodeURIComponent(slug)}`
      );

      // If found: update
      if (res?.data) {
        await axios.put(
          `http://localhost:8000/api/seo/${encodeURIComponent(slug)}`,
          seo
        );
      } else {
        // If not found: create
        await axios.post("http://localhost:8000/api/seo", {
          slug,
          ...seo,
        });
      }
    } catch (err) {
      // If GET failed, treat as new
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
