// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';

import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';
import BlogPage from './Pages/BlogPage';
import AboutPage from './Pages/AboutPage';
import IndPage from './Pages/IndPage';
import EnquirePage from './Pages/EnquirePage';
import MoreProducts from './components/MoreProducts';
import ProductEnquiry from './components/EnquireForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ind" element={<IndPage />} />
          <Route path="/enquiry" element={<EnquirePage />} />
          <Route path="/moreproducts" element={<MoreProducts />} />
          <Route path="/productenquiry" element={<ProductEnquiry />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
