import React from 'react'
import ContactHeader from '../components/ContactHeader';

import TextSection from '../components/TextSection';

import BlogBrand from '../components/BlogBrand';


import BlogContact from '../components/BlogContact';

import Footer from "../components/Footer";
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
    <ContactHeader/>
     <ContactForm/>
      
        <BlogBrand/>
         <TextSection/>
         <BlogContact/>
       <Footer/>
       

    </>
  )
}

export default ContactPage