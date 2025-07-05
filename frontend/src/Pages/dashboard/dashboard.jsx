import { useEffect, useState } from "react";
import axios from "axios";
import SeoForm from "./SeoForm";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchPages = async () => {
    try {
      const res = await axios.get("https://lohamandi-3.onrender.com/api/seo");
      setPages(res.data);
    } catch (err) {
      console.error("Failed to fetch pages:", err);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        "https://lohamandi-3.onrender.com/api/contact"
      );
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  useEffect(() => {
    fetchPages();
    fetchMessages();
  }, []);

  const handleAddNew = () => {
    const newSlug = prompt("Enter new page slug (e.g. /about)");
    if (newSlug) {
      const formatted = newSlug.startsWith("/") ? newSlug : `/${newSlug}`;
      setSelectedSlug(formatted);
    }
  };

  const handleDelete = async (slug) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${slug}"?`
    );
    if (!confirmDelete) return;

    try {
      const safeSlug = slug.replace(/^\//, "");
      await axios.delete(
        `https://lohamandi-3.onrender.com/api/seo/${safeSlug}`
      );
      fetchPages();
      if (selectedSlug === slug) setSelectedSlug(null);
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete page.");
    }
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Pages Section */}
      <div className="space-y-4 col-span-1">
        <h2 className="text-xl font-bold">SEO Pages</h2>
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
                onClick={() => {
                  setSelectedMessage(null);
                  setSelectedSlug(page.slug);
                }}
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

      {/* Contact Messages Section */}
      <div className="space-y-4 col-span-1">
        <h2 className="text-xl font-bold">Contact Messages</h2>
        <ul className="space-y-2 max-h-[500px] overflow-auto">
          {messages.map((msg) => (
            <li
              key={msg._id}
              onClick={() => {
                setSelectedSlug(null);
                setSelectedMessage(msg);
              }}
              className="border p-2 rounded cursor-pointer hover:bg-gray-100"
            >
              <p className="font-semibold">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="text-sm">{msg.message.slice(0, 50)}...</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Details / Form Section */}
      <div className="col-span-1">
        {selectedSlug && (
          <>
            <h2 className="text-xl font-bold mb-4">
              Edit SEO for: {selectedSlug}
            </h2>
            <SeoForm slug={selectedSlug} />
          </>
        )}

        {selectedMessage && (
          <div className="border rounded p-4 space-y-2 bg-white shadow">
            <h2 className="text-xl font-bold mb-2">
              Message from {selectedMessage.name}
            </h2>
            <p>
              <strong>Email:</strong> {selectedMessage.email}
            </p>
            <p>
              <strong>Message:</strong>
            </p>
            <p>{selectedMessage.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
