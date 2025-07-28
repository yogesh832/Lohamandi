import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

// Import your components
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import Homeblog from "../components/Homeblog";
import BlogReview from "../components/BlogReview";
import BlogContent from "../components/BlogContent";
import TextSection from "../components/TextSection";
import BlogBrand from "../components/BlogBrand";
import BlogLatest from "../components/BlogLatest";
import BlogQuestion from "../components/BlogQuestion";
import BlogContact from "../components/BlogContact";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [seo, setSeo] = useState({});

  useEffect(() => {
    axios
      .get(`https://lohamandi.com/api/seo/home`)
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{"Lohamandi"}</title>
        <meta
          name="description"
          content={seo?.description || "Default description"}
        />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:title" content={seo?.title} />
        <meta property="og:description" content={seo?.description} />
        <meta property="og:image" content={seo?.ogImage || "/default.png"} />
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
