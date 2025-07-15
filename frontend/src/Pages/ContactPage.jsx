import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import ContactHeader from "../components/ContactHeader";
import ContactForm from "../components/ContactForm";
import BlogBrand from "../components/BlogBrand";
import TextSection from "../components/TextSection";
import BlogContact from "../components/BlogContact";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    axios
      .get("https://lohamandi-3.onrender.com/api/seo/contact")
      .then((res) => setSeo(res.data))
      .catch((err) => console.warn("SEO for /contact not found:", err));
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo?.title || "Contact Us"}</title>
        <meta
          name="description"
          content={seo?.description || "Default contact page description"}
        />
        <meta name="keywords" content={seo?.keywords || ""} />
        <meta name="robots" content={seo?.robots || "index,follow"} />
        <meta property="og:image" content={seo?.ogImage || ""} />
        <link rel="canonical" href={seo?.canonical || window.location.href} />
      </Helmet>

      <ContactHeader />
      <ContactForm />
      <BlogBrand />
      <TextSection />
      <BlogContact />
      <Footer />
    </>
  );
};

export default ContactPage;
