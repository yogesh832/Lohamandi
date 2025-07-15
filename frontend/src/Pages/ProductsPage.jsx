import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import HomeProducts from "../components/HomeProducts";
import ProductBanner from "../components/ProductBanner";
import TextSection from "../components/TextSection";
import BlogBrand from "../components/BlogBrand";
import BlogLatest from "../components/BlogLatest";
import BlogReview from "../components/BlogReview";
import BlogQuestion from "../components/BlogQuestion";
import Footer from "../components/Footer";
import ProductBlog from "../components/ProductBlog";

const ProductsPage = () => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/seo/product")
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO for /product not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title || "Our Products"}</title>
        <meta name="description" content={seo?.description || "Default product description"} />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:image" content={seo?.ogImage || ""} />
        <link rel="canonical" href={seo?.canonical || window.location.href} />
      </Helmet>

      <ProductBanner />
      <HomeProducts />
      <BlogBrand />
      <BlogReview />
      <TextSection />
      <BlogLatest />
      <BlogQuestion />
      <ProductBlog />
      <Footer />
    </>
  );
};

export default ProductsPage;
