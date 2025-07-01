import React from "react";

const Footer = () => {
  return (
 <footer className="bg-[#0B0C17] text-white py-12">
  <div className="mx-auto max-w-[1200px] px-8 sm:px-16 lg:px-32 grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-10 text-left">
    
    {/* COMPANY */}
    <div>
      <h3 className="font-bold text-lg mb-3">COMPANY</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="/about" className="hover:text-white">About Us</a></li>
        <li><a href="/career" className="hover:text-white">Career</a></li>
      </ul>
    </div>

    {/* PURCHASE */}
    <div>
      <h3 className="font-bold text-lg mb-3">PURCHASE</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="/track-orders" className="hover:text-white">Track Orders</a></li>
        <li><a href="/shipping" className="hover:text-white">Shipping</a></li>
        <li><a href="/bulk-enquiry" className="hover:text-white">Bulk Enquiry</a></li>
        <li><a href="/sell" className="hover:text-white">Sell At Steeloncall</a></li>
      </ul>
    </div>

    {/* SUPPORT */}
    <div>
      <h3 className="font-bold text-lg mb-3">SUPPORT</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
        <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="/returns" className="hover:text-white">Returns</a></li>
        <li><a href="/cancellations" className="hover:text-white">Cancellations</a></li>
      </ul>
    </div>

  </div>
</footer>

  );
};

export default Footer;
