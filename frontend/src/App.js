import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import AdminLayout from "./layout/AdminLayout";

// Public Pages
import LandingPage from "./Pages/LandingPage";
import ContactPage from "./Pages/ContactPage";
import ProductsPage from "./Pages/ProductsPage";
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage";
import EnquirePage from "./Pages/EnquirePage";
import MoreProducts from "./components/MoreProducts";
import ProductEnquiry from "./components/EnquireForm";

// Admin Pages
import ProtectedRoute from "./Pages/ProtectedRoute";
import AdminDashboard from "./Pages/AdminDashboard"; // Blog Management
import MessageList from "./components/MessageList";
import SeoList from "./components/SeoList";
import Dashboard from "./Pages/dashboard/dashboard";
import IndividualContent from "./components/IndividualContent";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Website */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:id" element={<IndividualContent />} />
          <Route path="/enquiry" element={<EnquirePage />} />
          <Route path="/moreproducts" element={<MoreProducts />} />
          <Route path="/productenquiry" element={<ProductEnquiry />} />
        </Route>

        {/* Admin Routes - All behind AdminLayout & ProtectedRoute */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <MessageList />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/seo"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <SeoList />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
