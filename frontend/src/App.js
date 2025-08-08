import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./Layout";
import AdminLayout from "./layout/AdminLayout";
import UserData from "./components/UserData";
import ProductForm from "./components/ProductForm";
import CategoryPage from "./Pages/CategoryPage";

// Lazy-loaded Public Pages
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const ProductsPage = lazy(() => import("./Pages/ProductsPage"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const EnquirePage = lazy(() => import("./Pages/EnquirePage"));
const MoreProducts = lazy(() => import("./components/MoreProducts"));
const ProductEnquiry = lazy(() => import("./components/EnquireForm"));
const IndividualContent = lazy(() => import("./components/IndividualContent"));

// Lazy-loaded Admin Pages
const AdminDashboard = lazy(() => import("./Pages/AdminDashboard"));
const Dashboard = lazy(() => import("./Pages/dashboard/dashboard"));
const MessageList = lazy(() => import("./components/MessageList"));
const SeoList = lazy(() => import("./components/SeoList"));

// Not lazy-loaded: stays in memory for immediate access
const ProtectedRoute = lazy(() => import("./Pages/ProtectedRoute"));
function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
            <img
              src="/enquire.png"
              alt="Loading..."
              className="w-20 h-20 animate-spin"
            />
          </div>
        }
      >
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
                    <Route path="/:categorySlug" element={<CategoryPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog/:id" element={<IndividualContent />} />
            <Route path="/enquiry" element={<EnquirePage />} />
            <Route path="/moreproducts" element={<MoreProducts />} />
            <Route path="/productenquiry" element={<ProductEnquiry />} />
          </Route>

          {/* Admin Routes */}
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
            path="/admin/data"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <UserData />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/product"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <ProductForm />
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
      </Suspense>
    </Router>
  );
}

export default App;
