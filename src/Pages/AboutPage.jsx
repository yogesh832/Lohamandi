import React from 'react'


import AboutBanner from '../components/AboutBanner';

import TextSection from '../components/TextSection';
import BlogBrand from '../components/BlogBrand';

import Footer from "../components/Footer";
import ProductBlog from '../components/ProductBlog';
import AboutText from '../components/AboutText';
import AboutQuality from '../components/AboutQuality';
import AboutJourney from '../components/AboutJourney';

const AboutPage = () => {
  return (
    <>
     <AboutBanner/>
      <AboutText/>
        <BlogBrand/>
      <AboutQuality/>
      <AboutJourney/>

    
       <TextSection/>
      
    <ProductBlog/>
       <Footer/>
       

    </>
  )
}

export default AboutPage