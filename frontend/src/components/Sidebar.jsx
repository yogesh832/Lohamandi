// --- Sidebar.jsx ---
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBlog, FaEnvelope, FaSearch, FaTools } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import logo from "../assets/lohamandi_original.png"; // 🔁 Replace with your actual logo path

const navLinks = [
  {
    path: "/admin",
    label: "Dashboard",
    icon: <MdDashboard size={18} />,
  },
  {
    path: "/admin/blogs",
    label: "Manage Blogs",
    icon: <FaBlog size={18} />,
  },
  {
    path: "/admin/seo",
    label: "SEO Pages",
    icon: <FaSearch size={18} />,
  },
  {
    path: "/admin/messages",
    label: "Messages",
    icon: <FaEnvelope size={18} />,
  },
  {
    path: "/admin/data",
    label: "User Data",
    icon: <FaEnvelope size={18} />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5 shadow-lg">
      {/* Logo & Title */}
      <div className="flex flex-col space-x-3 mb-8">
        {/* <img src={logo} alt="Logo" className="h-8  w-40 bg-white " />  */}
        <span className="text-2xl font-bold tracking-wide">Admin Panel</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold shadow"
                    : "hover:bg-gray-800 text-gray-300 hover:text-white"
                }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Optional Footer */}
      <div className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Lohamandi Admin
      </div>
    </aside>
  );
};

export default Sidebar;
