import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    question: "Can I order small quantities of steel?",
    answer:
      "Absolutely. Lohamandi supports orders of all sizes, catering to individual builders as well as large contractors. Whether it's a single bundle or bulk tonnage, we deliver reliably.",
  },
  {
    question: "Do you offer custom-cut TMT bars?",
    answer:
      "Yes, we provide custom-length TMT bars to minimize on-site cutting and reduce wastage, helping streamline your construction process and save cost.",
  },
  {
    question: "How long does it take to deliver after placing an order?",
    answer:
      "Delivery typically happens within 24–72 hours based on location and quantity. We ensure prompt dispatch and live tracking so you’re always informed.",
  },
  {
    question: "Is your service available across all cities in India?",
    answer:
      "Currently, we serve across major metro cities and are rapidly expanding to tier-2 and tier-3 locations. Check availability for your pincode during checkout.",
  },
  {
    question: "Are the steel products certified for quality?",
    answer:
      "All products sold on Lohamandi are BIS/ISO certified and sourced from reputed brands. Certificates can be provided upon request.",
  },
];

export default function BlogQuestion() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFF3F3] min-h-[120vh] text-lg py-16 px-4 sm:px-6 md:px-20">
      <h4 className="text-center text-xl font-semibold tracking-widest text-[#A01F16] mb-2">FAQ'S</h4>
      <h2 className="text-center text-3xl font-semibold text-black mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md px-6 py-6 border border-black shadow-md transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="font-semibold">{item.question}</p>
              {openIndex === index ? <X size={20} /> : <Plus size={20} />}
            </div>
            {openIndex === index && item.answer && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-white to-[#FFF3F3] shadow-md border border-black max-w-4xl mx-auto mt-12 rounded-md text-center px-6 py-8">
        <h3 className="font-semibold text-gray-800 mb-2">Still have questions?</h3>
        <p className="text-gray-500 mb-4">Reach out to our steel experts for personalized support and pricing.</p>
        <button className="bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-5 py-2 rounded-md hover:bg-[#c2163f] transition">
          <a href="/enquiry">Request Quote</a>
        </button>
      </div>
    </div>
  );
}