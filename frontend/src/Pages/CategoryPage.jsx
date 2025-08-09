import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet"; // ✅ Add Helmet
import { FaCheckCircle } from "react-icons/fa";
import { BsShieldCheck, BsChatDots } from "react-icons/bs";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import HomeProducts from "../components/HomeProducts";

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
      const response = await axios.post(
        "https://lohamandi.com/api/quicklead",
        {
          phone: contact,
        }
      );

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

  // Show all products except current slug
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

      <div className="bg-gray-50 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500">
              <Link to="/" className="hover:underline text-blue-600">
                Home
              </Link>{" "}
              /
              <Link
                to="/category"
                className="mx-1 hover:underline text-blue-600"
              >
                Materials
              </Link>{" "}
              /
              <span className="text-gray-700 font-medium capitalize">
                {formattedCategory}
              </span>
            </nav>

            {/* Main Product Card */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row gap-6 items-start">
              {product?.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-80 h-48 object-cover rounded"
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

            {/* Product HTML Content */}
            {product?.content?.trim() &&
              product?.content?.trim() !== "<p><br></p>" && (
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Data Content
                  </h2>
                  <div
                    className="text-gray-700 text-base"
                    dangerouslySetInnerHTML={{ __html: product.content }}
                  />
                </div>
              )}

            {/* HomeProducts only for tmt-bar */}
            {categorySlug === "tmt-bar" && <HomeProducts />}

            {/* Guide + Related Products + Why Section */}
            <div className="flex gap-6">
              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Related Products
                  </h2>
                  <div className="flex flex-wrap gap-6 ">
                    {relatedProducts.map((prod) => (
                      <a
                        href={`/${prod.slug}`}
                        className="w-full sm:w-1/2 lg:w-1/3"
                      >
                        <div
                          key={prod._id}
                          className="border transition-transform duration-300 hover:scale-105 rounded-lg p-4 shadow-sm bg-white flex flex-col"
                        >
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

              {/* Why Lohamandi Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Why Lohamandi.com
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" /> Lowest Pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <BsShieldCheck className="text-blue-500" /> Verified
                    Suppliers
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineLocalShipping className="text-blue-500" /> Fastest
                    Shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" /> Quality Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <MdPayment className="text-blue-500" /> Payment Options
                  </li>
                  <li className="flex items-center gap-2">
                    <BsChatDots className="text-blue-500" /> Instant Customer
                    Support
                  </li>
                </ul>

                <a href="/enquiry">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 px-6 mt-2 w-full rounded-lg"
                  >
                    Get Steel at Best Price
                  </button>
                </a>

                <a href="https://wa.me/919910025184">
                  <button className="mt-2 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                    >
                      <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.8 5.5 2.3 7.9L0 32l8.4-2.8c2.3 1.3 4.9 2 7.6 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-5 1.7 1.7-4.9-.3-.5c-1.2-2-1.9-4.4-1.9-6.8 0-7.3 6-13.3 13.3-13.3S29.3 8.7 29.3 16 23.3 28.5 16 28.5zm7.4-10.8c-.4-.2-2.4-1.2-2.8-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.6.2-.2.3-.5.4-.8.1-.3 0-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.8-1.1-.8h-.9c-.3 0-.8.1-1.3.6-.4.4-1.7 1.7-1.7 4.1s1.8 4.7 2.1 5c.3.4 3.5 5.4 8.5 7.6 1.2.5 2.1.8 2.8 1.1 1.2.4 2.2.3 3-.2.9-.6 1.4-2.1 1.6-2.5.1-.4 0-.7-.2-.9z" />
                    </svg>
                    Connect on WhatsApp
                  </button>
                </a>
              </div>
            </div>

            <div className="flex flex-row w-full gap-10 items-center justify-center">
              {categorySlug === "tmt-bar" && (
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow space-y-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    📘 Guide to Choosing TMT Bars for Construction
                  </h2>
                  <ul className="space-y-4 text-gray-700 list-disc pl-6">
                    <li>
                      <strong>Understand Your Project Needs:</strong> Assess
                      project-specific requirements...
                    </li>
                    <li>
                      <strong>Choose the Right TMT Grade:</strong> Fe415, Fe500,
                      Fe550 – choose based on application...
                    </li>
                    <li>
                      <strong>Verify IS Certification:</strong> Ensure
                      BIS-certified (IS 1786:2008)...
                    </li>
                    <li>
                      <strong>Consider Corrosion Resistance:</strong> Especially
                      for coastal/humid environments...
                    </li>
                    <li>
                      <strong>Check Bendability and Weldability:</strong>{" "}
                      Especially for intricate structures...
                    </li>
                    <li>
                      <strong>Conclusion:</strong> Choosing the right TMT is
                      critical for longevity and safety...
                    </li>
                  </ul>
                </div>
              )}

              {/* Call Back Section */}
              <div className="bg-white p-6 rounded-lg shadow space-y-3 w-full max-w-xl mx-auto">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800">
                    Talk to a Steel Expert
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  For today's price and discount
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="border w-full px-3 py-2 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-3 w-full px-6 mt-2 rounded-lg"
                  >
                    Request a Call Back
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500">or</p>
                <a href="https://wa.me/919910025184">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="..." />
                    </svg>
                    Message us on WhatsApp
                  </button>
                </a>
              </div>

              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
                  <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn">
                    <div className="flex justify-center mb-4">
                      <svg
                        className="w-14 h-14 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Thank You!
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Your contact has been submitted successfully. <br /> We'll
                      get back to you shortly.
                    </p>
                    <button
                      onClick={() => setShowPopup(false)}
                      className="mt-6 bg-gradient-to-r from-[#F17556] to-[#D61349] text-white py-2 px-6 rounded-lg hover:opacity-90 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default CategoryPage;
