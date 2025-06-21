import React from 'react'

import HomeProducts from "../components/HomeProducts";
import ProductBanner from '../components/ProductBanner';

import TextSection from '../components/TextSection';
import BlogBrand from '../components/BlogBrand';
import BlogLatest from '../components/BlogLatest';
import BlogReview from '../components/BlogReview';

import BlogQuestion from '../components/BlogQuestion';
import Footer from "../components/Footer";
import ProductBlog from '../components/ProductBlog';

const ProductsPage = () => {
  return (
    <>
     <ProductBanner/>
      <HomeProducts/>
  <BlogBrand/>
       
       <BlogReview/>
    
       <TextSection/>
     
       <BlogLatest/>
       <BlogQuestion/>
    <ProductBlog/>
       <Footer/>
       

    </>
  )
}

export default ProductsPage