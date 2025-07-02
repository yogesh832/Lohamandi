// components/MobileStickyCTA.jsx
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-300 shadow-xl">
      <div className="text-center py-2 px-3">
        <h2 className="text-base font-semibold text-black leading-tight">TMT Bars for Construction</h2>
        <p className="text-[#A01F16] text-sm font-semibold mt-1">Get free lowest price quote today!</p>
      </div>
      <div className="flex justify-between px-3 pb-3 gap-2">
        <button className="flex items-center justify-center gap-1 bg-[#0AC1F5] 
          text-white text-sm font-semibold px-3 py-2 rounded-md w-1/2">
          <FaPhoneAlt className="text-lg" /> Call
        </button>
        <button className="flex items-center justify-center gap-1 bg-[#25D366] 
          text-white text-sm font-semibold px-3 py-2 rounded-md w-1/2">
          <FaWhatsapp className="text-lg" /> WhatsApp
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
