import React, { useEffect, useState } from "react";
import { FaEnvelope, FaBlog, FaSearch } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    messages: 0,
    blogs: 0,
    seoPages: 0,
  });
  // const api = import.meta.env.VITE_API_URL;
  // console.log(api);

  const [latestMessages, setLatestMessages] = useState([]);
  useEffect(() => {
    // Fetch total counts and recent messages
    const fetchData = async () => {
      try {
        const [msgRes, blogRes, seoRes] = await Promise.all([
          axios.get(`https://lohamandi.com/api/contact`),
          axios.get(`https://lohamandi.com/api/blog`),
          axios.get(`https://lohamandi.com/api/seo`),
        ]);

        setStats({
          messages: msgRes.data.length,
          blogs: blogRes.data.length,
          seoPages: seoRes.data.length,
        });

        setLatestMessages(msgRes.data.slice(0, 5));
      } catch (error) {
        console.error("Dashboard data fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Messages"
          count={stats.messages}
          icon={<FaEnvelope />}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Blogs"
          count={stats.blogs}
          icon={<FaBlog />}
          color="bg-green-500"
        />
        <StatCard
          title="SEO Pages"
          count={stats.seoPages}
          icon={<FaSearch />}
          color="bg-yellow-500"
        />
      </div>

      {/* Latest Messages */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Latest Messages</h2>
        {latestMessages.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          <ul className="divide-y mt-4 divide-gray-200">
            {latestMessages.map((msg) => (
              <li key={msg._id} className="py-4">
                <p className="font-medium">
                  {msg.name}{" "}
                  <span className="text-sm text-gray-400">({msg.email})</span>
                </p>
                <p className="text-sm text-gray-600">
                  {msg.message.slice(0, 80)}...
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Reusable StatCard Component
const StatCard = ({ title, count, icon, color }) => (
  <div className={`rounded-lg p-5 text-white shadow-md ${color}`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{count}</p>
      </div>
      <div className="text-4xl opacity-30">{icon}</div>
    </div>
  </div>
);

export default Dashboard;
