import React from 'react'
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProducts from "../components/HomeProducts";
import Homeblog from "../components/Homeblog";
import TextSection from '../components/TextSection';
import BlogContent from '../components/BlogContent';
import BlogBrand from '../components/BlogBrand';
import BlogLatest from '../components/BlogLatest';
import BlogReview from '../components/BlogReview';
import BlogContact from '../components/BlogContact';
import BlogQuestion from '../components/BlogQuestion';
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <HomeBanner/>
      <HomeAbout/>
      <HomeProducts/>

       <Homeblog/>
       <BlogReview/>
      <BlogContent/>
       <TextSection/>
       <BlogBrand/>
       <BlogLatest/>
       <BlogQuestion/>
       <BlogContact/>
       <Footer/>
       

    </>
  )
}

export default LandingPage