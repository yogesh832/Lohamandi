// import React from "react";


// import AboutBanner from "../components/AboutBanner";
// import AboutText from "../components/AboutText";
// import BlogBrand from "../components/BlogBrand";
// import AboutQuality from "../components/AboutQuality";
// import AboutJourney from "../components/AboutJourney";
// import TextSection from "../components/TextSection";
// import ProductBlog from "../components/ProductBlog";
// import Footer from "../components/Footer";

// const AboutPage = () => {


//   return (
//     <>


//       <AboutBanner />
//       <AboutText />
//       <BlogBrand />
//       <AboutQuality />
//       <AboutJourney />
//       <TextSection />
//       <ProductBlog />
//       <Footer />
//     </>
//   );
// };

// export default AboutPage;

















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
      .get("https://lohamandi-3.onrender.com/api/seo/about")
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
  <meta name="robots" content={seo.robots || "index, follow"} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.ogImage} />
  <meta property="og:url" content={seo.canonical || window.location.href} />
  <link rel="canonical" href={seo.canonical || window.location.href} />

  {/* ✅ Add this line */}
  <meta name="theme-color" content="#000000" />
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
