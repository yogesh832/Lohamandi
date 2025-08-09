import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function IndividualContent() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

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
        {/* Basic SEO */}
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.desc?.slice(0, 160)}
        />
        <meta
          name="keywords"
          content={blog.metaKeywords || "blog, lohamandi"}
        />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.desc}
        />
        <meta property="og:image" content={blog.img} />
        <meta property="og:url" content={`https://lohamandi.com/blog/${id}`} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta
          name="twitter:description"
          content={blog.metaDescription || blog.desc}
        />
        <meta name="twitter:image" content={blog.img} />

        {/* Canonical Link */}
        <link rel="canonical" href={`https://lohamandi.com/blog/${id}`} />
      </Helmet>

      {/* ✅ Blog Content */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-[#1a1a1a]">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 leading-tight">{blog.title}</h1>

        {/* Featured Image */}
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
        {blog.desc && (
          <p className="text-base mb-6 text-gray-700 leading-relaxed">
            {blog.desc}
          </p>
        )}

        {/* Full HTML Content */}
        <div
          className="prose prose-lg max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Debug - remove later */}
        <div className="mt-10 text-xs text-gray-400">
          <p>Meta Title: {blog.metaTitle}</p>
          <p>Meta Keywords: {blog.metaKeywords}</p>
          <p>Meta Description: {blog.metaDescription}</p>
        </div>
      </section>
    </>
  );
}
