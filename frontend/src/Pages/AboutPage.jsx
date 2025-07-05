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
    console.log("SEO Loaded:", seo);
  }, [seo]);

  useEffect(() => {
    axios
      .get("https://lohamandi-3.onrender.com/api/seo/about")
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO for /about not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title || "Default Page Title"}</title>
        <meta
          name="description"
          content={seo?.description || "Default description"}
        />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:image" content={seo?.ogImage || ""} />
        <meta
          name="description"
          content={seo?.description || "Default Description"}
        />

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
