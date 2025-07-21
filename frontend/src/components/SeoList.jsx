// --- SeoList.jsx ---
import React, { useEffect, useState } from "react";
import axios from "axios";
import SeoForm from "./SeoForm";

const SeoList = () => {
  const [pages, setPages] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const fetchPages = async () => {
    try {
      const res = await axios.get("https://lohamandi.com/api/seo");
      setPages(res.data);
    } catch (err) {
      console.error("Failed to fetch SEO pages", err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleDelete = async (slug) => {
    if (!window.confirm(`Delete ${slug}?`)) return;
    await axios.delete(`https://lohamandi.com/api/seo${slug}`);
    fetchPages();
    setSelectedSlug(null);
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1 space-y-4">
        <h2 className="text-xl font-bold">SEO Pages</h2>
        <button
          onClick={() => setSelectedSlug("/new-slug")}
          className="bg-green-600 text-white px-3 py-2 rounded w-full"
        >
          + Add New
        </button>
        <ul className="space-y-2">
          {pages.map((page) => (
            <li
              key={page.slug}
              className="border p-2 rounded hover:bg-gray-100 flex justify-between"
            >
              <span
                onClick={() => setSelectedSlug(page.slug)}
                className="cursor-pointer"
              >
                {page.slug}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => setSelectedSlug(page.slug)}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(page.slug)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3">
        {selectedSlug && (
          <div className="bg-white p-4 rounded shadow">
            <SeoForm slug={selectedSlug} onSave={fetchPages} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SeoList;
