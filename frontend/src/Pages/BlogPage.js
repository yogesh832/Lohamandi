import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import BlogBanner from "../components/BlogBanner";
import BlogCards from "../components/BlogCards";
import BlogBrand from "../components/BlogBrand";
import ProductBlog from "../components/ProductBlog";
import Footer from "../components/Footer";

const BlogPage = () => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    axios
      .get("https://lohamandi-3.onrender.com/api/seo/blog")
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO for /blog not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title || "Our Blog"}</title>
        <meta
          name="description"
          content={seo?.description || "Default blog description"}
        />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:image" content={seo?.ogImage || ""} />
        <link rel="canonical" href={seo?.canonical || window.location.href} />
      </Helmet>

      <BlogBanner />
      <BlogCards />
      <BlogBrand />
      <ProductBlog />
      <Footer />
    </>
  );
};

export default BlogPage;
