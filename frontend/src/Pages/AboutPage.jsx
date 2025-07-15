// --- Example: AboutPage.jsx ---
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import AboutBanner from "../components/AboutBanner";
import AboutText from "../components/AboutText";
import BlogBrand from "../components/BlogBrand";
import AboutQuality from "../components/AboutQuality";
import AboutJourney from "../components/AboutJourney";
import TextSection from "../components/TextSection";
import ProductBlog from "../components/ProductBlog";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [seo, setSeo] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/seo/about")
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title || "About"}</title>
        <meta name="description" content={seo?.description || "About us page"} />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:title" content={seo?.title} />
        <meta property="og:description" content={seo?.description} />
        <meta property="og:image" content={seo?.ogImage || "/default.png"} />
        <link rel="canonical" href={seo?.canonical || window.location.href} />
      </Helmet>

      <AboutBanner />
      <AboutText />
      <BlogBrand />
      <AboutQuality />
      <AboutJourney />
      <TextSection />
      <ProductBlog />
      <Footer />
    </>
  );
};

export default AboutPage;
