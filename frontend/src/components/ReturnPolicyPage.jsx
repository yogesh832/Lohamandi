import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFFDFD] to-[#FFFFFF] py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A01F16] mb-6 text-center">
          Lohamandi.com Return Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          This return policy governs all products purchased through Lohamandi.com
          online platform as well as our offline retail locations, effective from
          the date of material dispatch by our authorized suppliers:
        </p>

        {/* Section 1 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          General Return Terms
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Once materials are delivered according to your order specifications,
          returns are typically not accepted. We implement stringent quality
          control measures throughout our supply chain to ensure premium
          material standards. Should any quality concerns arise, we will address
          them according to the procedures outlined below:
        </p>
        <p className="text-red-600 font-medium bg-[#FEF2F2] px-4 py-2 rounded mb-6">
          <strong>Important Note for CTL (Cut-to-Length) Services:</strong>{" "}
          Materials that have been custom cut to specific lengths as per customer
          requirements cannot be returned or exchanged under any circumstances,
          as these are customized products tailored to your project specifications.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          Product Replacement Guidelines
        </h2>
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-black">
              a. Incorrect Item Delivery
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Orders may be exchanged exclusively when the delivered materials do
              not match the originally ordered specifications. To initiate a
              replacement request, contact our customer support team at{" "}
              <span className="font-semibold text-[#A01F16]">
                +91-9910025184
              </span>
              . Material replacement is only possible when items are returned in
              their original delivery condition. Claims must be submitted
              immediately upon receipt, but no later than 48 hours after
              material delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black">
              b. Quality Assurance Issues
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              All materials are accompanied by relevant technical certificates
              upon delivery. For any quality-related concerns regarding the
              delivered materials, claims must be submitted via email or written
              communication within 72 hours of material receipt.
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2 space-y-1">
              <li>
                Natural color variations in materials are{" "}
                <strong>not considered quality defects</strong>.
              </li>
              <li>
                Complaints regarding rusted or corroded material conditions will
                be accepted for review.
              </li>
              <li>
                Materials that fail standard laboratory testing will be eligible
                for replacement claims.
              </li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed mt-2">
              In validated cases, we will replace defective materials with
              compliant products at no additional cost to the customer.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          Excess Material Buyback Program
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          When surplus materials remain unused after project completion,
          Lohamandi.com offers a buyback service subject to these conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2 mb-6">
          <li>
            Materials must remain in original, undamaged condition as initially
            delivered.
          </li>
          <li>
            The refund amount will be calculated after deducting transportation
            costs, current market price adjustments, and other expenses related
            to the return process. The final settlement will be processed within{" "}
            <strong>10 business days</strong> of material inspection and approval.
          </li>
        </ul>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center">
          Last updated on: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default ReturnPolicy;
