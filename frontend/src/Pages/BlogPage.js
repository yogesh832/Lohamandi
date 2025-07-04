import React from 'react'


import BlogBrand from '../components/BlogBrand';

import Footer from "../components/Footer";
import ProductBlog from '../components/ProductBlog';
import BlogBanner from '../components/BlogBanner';
import BlogCards from '../components/BlogCards';

const BlogPage = () => {
  return (
    <>
      <BlogBanner/>
      <BlogCards/>
       
       <BlogBrand/>
    <ProductBlog/>
       <Footer/>
       

    </>
  )
}

export default BlogPage;