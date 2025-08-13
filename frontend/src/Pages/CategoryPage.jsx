import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet"; // ✅ Add Helmet
import { FaCheckCircle } from "react-icons/fa";
import { BsShieldCheck, BsChatDots } from "react-icons/bs";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import HomeProducts from "../components/HomeProducts";
import TmtCalculator from "../components/TmtCalculator";
import Footer from "../components/Footer";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `https://lohamandi.com/api/products/${categorySlug}`
        );
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching category products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllProducts = async () => {
      try {
        const res = await axios.get(`https://lohamandi.com/api/products`);
        setAllProducts(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (err) {
        console.error("Error fetching all products:", err);
        setError(true);
      }
    };

    fetchCategoryProducts();
    fetchAllProducts();
  }, [categorySlug]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contact || !/^[6-9]\d{9}$/.test(contact)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await axios.post("https://lohamandi.com/api/quicklead", {
        phone: contact,
      });

      if (
        response?.data?.success ||
        response.status === 200 ||
        response.status === 201
      ) {
        setShowPopup(true);
        setContact("");

        setTimeout(() => setShowPopup(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting mobile number:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 py-10">Category not found.</p>
    );

  const formattedCategory = categorySlug.replace(/-/g, " ");
  const product = products[0] || {};

  const relatedProducts = Array.isArray(allProducts)
    ? allProducts.filter((p) => p.slug !== categorySlug)
    : [];

  return (
    <>
      {/* ✅ Helmet for Meta Tags */}
      <Helmet>
        <title>{product.metaTitle || formattedCategory}</title>
        <meta
          name="description"
          content={
            product.metaDescription || `${formattedCategory} at best prices`
          }
        />
        <meta
          name="keywords"
          content={
            product.metaKeywords || `${formattedCategory}, steel, materials`
          }
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:underline text-blue-600">
              Home
            </Link>{" "}
            /{" "}
            <span className="text-gray-700 font-medium capitalize">
              {formattedCategory}
            </span>
          </nav>

          {/* Main Product Card */}
          <div className="bg-[#F9FAFB] rounded-lg shadow p-6 flex flex-col sm:flex-row gap-6">
            {product?.image && (
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-80 h-48 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <h1 className="text-3xl font-bold capitalize text-gray-800">
                {product?.title || formattedCategory}
              </h1>
              {product?.additional && (
                <div
                  className="text-gray-700 mt-2 text-lg"
                  dangerouslySetInnerHTML={{ __html: product.additional }}
                />
              )}
              {product?.price && (
                <p className="mt-3 font-semibold text-gray-900 text-xl">
                  Starts from{" "}
                  <span className="text-black">
                    ₹{product.price.toLocaleString()}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Product Content */}
          {product?.content?.trim() &&
            product?.content?.trim() !== "<p><br></p>" && (
              <div className="bg-[#F9FAFB] p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Data Content
                </h2>
                <div
                  className="text-gray-700 text-base"
                  dangerouslySetInnerHTML={{ __html: product.content }}
                />
              </div>
            )}

          {/* HomeProducts + Calculator (TMT) */}
          {categorySlug === "tmt-bar" && (
            <div className="flex px-8">
              <HomeProducts />
              <TmtCalculator />
            </div>
          )}

          {/* Related + Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex gap-6">
              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Related Products
                  </h2>
                  <div className="flex w-[850px]  flex-wrap gap-2 ">
                    {relatedProducts.map((prod) => (
                      <a
                        key={prod._id}
                        href={`/${prod.slug}`}
                        className="w-[300px] sm:w-1/2 lg:w-1/3"
                      >
                        <div className="border transition-transform duration-300 hover:scale-105 rounded-lg p-4 shadow-sm bg-[#F9FAFB] flex flex-col">
                          {prod.image ? (
                            <img
                              src={prod.image}
                              alt={prod.title}
                              className="w-full h-40 object-cover rounded mb-3"
                            />
                          ) : (
                            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded mb-3">
                              <span className="text-gray-500">No Image</span>
                            </div>
                          )}
                          <h3 className="text-lg font-bold">{prod.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {prod.slug}
                          </p>
                          <div
                            className="text-sm text-gray-800"
                            dangerouslySetInnerHTML={{
                              __html: (prod.content || "").slice(0, 100),
                            }}
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-[#F9FAFB] p-6 rounded-lg shadow space-y-3">
              <h4 className="font-semibold text-gray-800 text-2xl">
                Talk to a Steel Expert
              </h4>
              <p className="text-gray-600 text-lg">
                For today's price and discount
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="border w-full px-3 py-4 my-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 w-full rounded-lg"
                >
                  Request a Call Back
                </button>
              </form>

              <p className="text-center text-sm my-4 text-gray-500">or</p>

              <a href="https://wa.me/919910025184">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>

          {/* Guide + Why Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categorySlug === "tmt-bar" && (
              <div className="bg-[#F9FAFB] p-6 rounded-lg shadow space-y-4">
                <h2 className="text-xl font-semibold text-blue-600">
                  📘 Guide to Choosing Lohamandi TMT Bars
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Understand Needs:</strong> Choose size & grade based
                    on your project.
                  </li>
                  <li>
                    <strong>Pick the Right Grade:</strong> Fe415, Fe500, Fe550
                    available.
                  </li>
                  <li>
                    <strong>Check Certification:</strong> BIS-certified for
                    quality.
                  </li>
                  <li>
                    <strong>Corrosion Resistance:</strong> For humid areas.
                  </li>
                  <li>
                    <strong>Bendability & Weldability:</strong> No strength
                    loss.
                  </li>
                </ul>
              </div>
            )}

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Why Lohamandi.com
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" /> Lowest Pricing
                </li>
                <li className="flex items-center gap-2">
                  <BsShieldCheck className="text-blue-500" /> Verified Suppliers
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineLocalShipping className="text-blue-500" /> Fastest
                  Shipping
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-500" /> Quality Delivery
                </li>
                <li className="flex items-center gap-2">
                  <MdPayment className="text-blue-500" /> Multiple Payment
                  Options
                </li>
                <li className="flex items-center gap-2">
                  <BsChatDots className="text-blue-500" /> Instant Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CategoryPage;
