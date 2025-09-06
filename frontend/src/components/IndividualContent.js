import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

export default function IndividualContent() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  // ✅ Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`https://lohamandi.com/api/blog`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  // ✅ Fetch individual blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`https://lohamandi.com/api/blog/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center p-10">Loading...</p>;

  return (
    <>
      {/* ✅ Dynamic SEO Meta Tags */}
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.desc?.slice(0, 160)}
        />
        <meta name="keywords" content={blog.metaKeywords || "blog, lohamandi"} />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.desc}
        />
        <meta property="og:image" content={blog.img} />
        <meta property="og:url" content={`https://lohamandi.com/blog/${id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta
          name="twitter:description"
          content={blog.metaDescription || blog.desc}
        />
        <meta name="twitter:image" content={blog.img} />
        <link rel="canonical" href={`https://lohamandi.com/blog/${id}`} />
      </Helmet>

      {/* ✅ Layout: Blog Content + Sidebar */}
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-6 lg:px-16 py-12">
        {/* Main Blog Section */}
        <div>
          <h1 className="text-3xl font-bold mb-6 leading-tight">{blog.title}</h1>

          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-[350px] object-cover rounded-xl mb-8"
          />

          {/* Meta Info */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-red-500 text-white flex items-center justify-center font-bold rounded-full">
                L
              </div>
              <div>
                <p className="font-semibold">Lohamandi Services</p>
                <p>{`${blog.month} ${blog.date}, 2025`}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span>Share:</span>
              <button className="hover:text-black">🔗</button>
              <button className="hover:text-black">📘</button>
              <button className="hover:text-black">💼</button>
            </div>
          </div>

          {/* Short Description */}
        
  {/* {blog.desc && (
            <p className="text-base mb-6 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blog.desc }}

            >
            </p>
          )} */}
          {/* Full Blog Content */}
          <div
            className="prose prose-lg max-w-none text-gray-900"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Sidebar - Other Blogs */}
       {/* Sidebar - Other Blogs */}
       {blogs.length > 1 && (
<aside className="border-l border-gray-200 pl-6 lg:pl-10 overflow-y-auto max-h-screen sticky top-20 bottom-20">
  <h2 className="text-xl font-bold mb-6">Other Blogs</h2>
  <div className="space-y-6">
    {blogs
      .filter((item) => item._id !== id) // ✅ exclude current blog
      .map((item) => (
        <Link key={item?._id} to={`/blog/${item._id}`}>
          <div className="bg-white border mb-10 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.desc?.length > 80
                  ? item.desc.slice(0, 80) + "..."
                  : item.desc}
              </p>
            </div>
          </div>
        </Link>
      ))}
  </div>
</aside>
)}
      </section>
      <Footer />
    </>
  );
}
