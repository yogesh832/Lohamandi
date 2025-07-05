// src/components/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import SeoForm from "./SeoForm";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const fetchPages = async () => {
    try {
      const res = await axios.get("https://lohamandi-3.onrender.com/api/seo");
      setPages(res.data);
    } catch (err) {
      console.error("Failed to fetch pages:", err);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleAddNew = () => {
    const newSlug = prompt("Enter new page slug (e.g. /about)");
    if (newSlug) setSelectedSlug(newSlug);
  };

  const handleDelete = async (slug) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${slug}"?`);
    if (!confirmDelete) return;

    try {
const safeSlug = slug.replace(/^\//, "");
await axios.delete(`https://lohamandi-3.onrender.com/api/seo/${safeSlug}`);
      fetchPages(); // Refresh the list
      if (selectedSlug === slug) setSelectedSlug(null); // Reset form if deleted page was selected
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete page.");
    }
  };

  return (
    <div className="p-6 flex gap-6">
      <div className="w-1/3 space-y-4">
        <h2 className="text-xl font-bold">Pages</h2>
        <button
          onClick={handleAddNew}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          + Add New SEO Page
        </button>
        <ul className="space-y-2">
          {pages.map((page) => (
            <li
              key={page.slug}
              className="border p-2 rounded flex justify-between items-center hover:bg-gray-100"
            >
              <span
                onClick={() => setSelectedSlug(page.slug)}
                className="cursor-pointer flex-1"
              >
                {page.slug}
              </span>
              <div className="space-x-2 ml-2">
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

      <div className="w-2/3">
        {selectedSlug && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Edit SEO for: {selectedSlug}
            </h2>
            <SeoForm slug={selectedSlug} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
