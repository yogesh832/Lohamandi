// src/components/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import SeoForm from "./SeoForm";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const fetchPages = async () => {
    const res = await axios.get("http://localhost:8000/api/seo");
    setPages(res.data);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleAddNew = () => {
    const newSlug = prompt("Enter new page slug (e.g. /about)");
    if (newSlug) setSelectedSlug(newSlug);
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
              className="border p-2 rounded hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedSlug(page.slug)}
            >
              {page.slug}
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
