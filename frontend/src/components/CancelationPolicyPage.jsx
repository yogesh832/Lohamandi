import React from "react";

const CancellationPolicy = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFFDFD] to-[#FFFFFF] py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A01F16] mb-6 text-center">
          Lohamandi.com Cancellation Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          This cancellation policy applies to all orders placed through
          Lohamandi.com online platform as well as our offline retail locations.
        </p>

        {/* Section 1 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          Customer-Initiated Cancellations
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Orders may be cancelled by customers by contacting our customer support
          team at <span className="font-semibold text-[#A01F16]">+91-9910025184</span> 
          only before the materials have been shipped from our supplier's warehouse. 
          Any cancellation requests submitted after dispatch will not be entertained, 
          and customers will be required to accept delivery of the ordered materials.
        </p>
        <p className="text-red-600 font-medium bg-[#FEF2F2] px-4 py-2 rounded mb-4">
          <strong>Special Note for CTL (Cut-to-Length) Services:</strong> For orders requiring 
          custom CTL processing, cancellation requests must be submitted before the commencement 
          of the cutting process. Once cutting has commenced, cancellation will not be possible 
          as the materials are customized and cannot be resold.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          When a cancellation request is approved and processed, the refund amount will be credited 
          to the customer's original payment method within <strong>10 business days</strong> of 
          cancellation confirmation.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          Company-Reserved Cancellation Rights
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Please be aware that certain orders may be subject to cancellation due to operational 
          or technical constraints. Lohamandi.com reserves the complete authority to decline or 
          cancel any order at our discretion for various reasons, including but not limited to 
          inventory unavailability, pricing errors, or verification issues.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          In the event of order cancellation, we will promptly notify you via phone or email. 
          If your order requires cancellation after payment processing, or if additional details 
          are needed to fulfill your order, our team will reach out to you directly.
        </p>

        {/* Section 3 */}
        <h2 className="text-lg sm:text-xl font-semibold text-[#A01F16] mb-3">
          Payment Reversals
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-6">
          Refunds for approved cancellations will be reversed to the original payment method 
          used during the purchase. Please allow up to 10 business days for the payment 
          reversal to reflect in your account depending on your bank or payment provider.
        </p>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center">
          Last updated on: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default CancellationPolicy;
