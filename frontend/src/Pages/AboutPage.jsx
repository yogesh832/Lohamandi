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
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/seo/about")
      .then((res) => {
        setSeo(res.data);
        console.log("SEO Loaded:", res.data);
      })
      .catch((err) => {
        console.warn("SEO for /about not found:", err);
        setSeo(null);
      });
  }, []);

  if (!seo) {
    return (
      <>
        <Helmet>
          <title>About | Default Title</title>
          <meta name="description" content="Default About description" />
        </Helmet>
        <p className="text-center py-10">Loading...</p>
      </>
    );
  }

  // ✅ Move log outside JSX
  console.log("Helmet rendered...");

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content={seo.robots || "index,follow"} />
        <meta property="og:image" content={seo.ogImage} />
        <link rel="canonical" href={seo.canonical || window.location.href} />
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
