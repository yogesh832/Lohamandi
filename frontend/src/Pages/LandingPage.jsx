import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import Homeblog from "../components/Homeblog";
import TextSection from "../components/TextSection";
import BlogContent from "../components/BlogContent";
import BlogBrand from "../components/BlogBrand";
import BlogLatest from "../components/BlogLatest";
import BlogReview from "../components/BlogReview";
import BlogContact from "../components/BlogContact";
import BlogQuestion from "../components/BlogQuestion";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [seo, setSeo] = useState({});

  useEffect(() => {
    axios
      .get("https://lohamandi-3.onrender.com/api/seo/home") // fetching SEO for /home
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO not found:", err));
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

      <HomeBanner />
      <HomeAbout />
      <HomeProducts />
      <Homeblog />
      <BlogReview />
      <BlogContent />
      <TextSection />
      <BlogBrand />
      <BlogLatest />
      <BlogQuestion />
      <BlogContact />
      <Footer />
    </>
  );
};

export default LandingPage;
