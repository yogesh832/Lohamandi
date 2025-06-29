import React, { useState } from 'react';
import { Plus, X } from 'lucide-react'; // Make sure to install lucide-react or replace with your icons

const faqData = [
  {
    question: "Can I order small quantities?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Velit orci mi tristique tincidunt at ipsum. Vitae vestibulum amet suspendisse amet vitae natoque sem feugiat sed. Facilisis enim donec amet sit mi duis massa at. Sit adipiscing varius viverra malesuada orci arcu nunc sit viverra.",
  },
  { question: "Do you offer custom-length TMT bars?",  answer:
      "Lorem ipsum dolor sit amet consectetur. Velit orci mi tristique tincidunt at ipsum. Vitae vestibulum amet suspendisse amet vitae natoque sem feugiat sed. Facilisis enim donec amet sit mi duis massa at. Sit adipiscing varius viverra malesuada orci arcu nunc sit viverra.", },
  { question: "How long does delivery take?",  answer:
      "Lorem ipsum dolor sit amet consectetur. Velit orci mi tristique tincidunt at ipsum. Vitae vestibulum amet suspendisse amet vitae natoque sem feugiat sed. Facilisis enim donec amet sit mi duis massa at. Sit adipiscing varius viverra malesuada orci arcu nunc sit viverra.", },
  { question: "Is delivery available across India?", answer:
      "Lorem ipsum dolor sit amet consectetur. Velit orci mi tristique tincidunt at ipsum. Vitae vestibulum amet suspendisse amet vitae natoque sem feugiat sed. Facilisis enim donec amet sit mi duis massa at. Sit adipiscing varius viverra malesuada orci arcu nunc sit viverra.", },
  { question: "Are the products certified?", answer:
      "Lorem ipsum dolor sit amet consectetur. Velit orci mi tristique tincidunt at ipsum. Vitae vestibulum amet suspendisse amet vitae natoque sem feugiat sed. Facilisis enim donec amet sit mi duis massa at. Sit adipiscing varius viverra malesuada orci arcu nunc sit viverra.", },
];

export default function BlogQuestion() {
  const [openIndex, setOpenIndex] = useState(0); // default open first

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFF3F3] min-h-[120vh] text-lg py-16 px-4 sm:px-6 md:px-20">
      <h4 className="text-center text-xl font-semibold tracking-widest text-[#A01F16] mb-2">FAQ'S</h4>
      <h2 className="text-center text-3xl font-semibold text-black mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md px-6 py-6 border 
            border-black shadow-md transition-all"
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

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-white to-[#FFF3F3] shadow-md border border-black
      max-w-2xl mx-auto mt-12 rounded-md text-center px-6 py-8"  >
        <h3 className="font-semibold text-gray-800 mb-2">Cannot find your question</h3>
        <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <button className=" bg-gradient-to-r from-[#F17556] to-[#D61349] text-white px-5 py-2 rounded-md hover:bg-[#c2163f] transition">
         <a href="/enquiry">Request Quote</a>
        </button>
      </div>
    </div>
  );
}
