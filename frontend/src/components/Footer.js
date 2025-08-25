import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#060814] text-white pt-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Contact Info */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
  {/* Requirement Info */}
  <div>
    <h5 className="font-semibold text-sm uppercase">Tell Us Your Requirements</h5>
    <p className="text-sm text-gray-400">Discuss it with our steel expert</p>
  </div>

  {/* Call Us */}
  <div>
    <h5 className="font-semibold text-sm uppercase mb-2">Call Us</h5>
    <div className="flex flex-col gap-2">
      <p
        className="text-sm text-gray-400 hover:text-white cursor-pointer transition"
        onClick={() => window.location.href = "tel:+919910025184"}
        title="Call +91 9910025184"
      >
        +91 9910025184
      </p>
      <p
        className="text-sm text-gray-400 hover:text-white cursor-pointer transition"
        onClick={() => window.location.href = "tel:+919319039145"}
        title="Call +91 9319039145"
      >
        +91 9319039145
      </p>
    </div>
  </div>

  {/* WhatsApp */}
  <div>
    <h5 className="font-semibold text-sm uppercase mb-2">WhatsApp Us</h5>
    <p
      className="text-sm text-gray-400 hover:text-white cursor-pointer transition"
      onClick={() => window.open("https://wa.me/919910025184", "_blank")}
      title="Chat on WhatsApp"
    >
      +91 9910025184
    </p>
  </div>

  {/* Email */}
  <div>
    <h5 className="font-semibold text-sm uppercase mb-2">Email Us</h5>
    <p
      className="text-sm text-gray-400 hover:text-white cursor-pointer transition"
      onClick={() => window.location.href = "mailto:info@lohamandi.com"}
      title="Send Email"
    >
      info@lohamandi.com
    </p>
  </div>
</div>

        {/* Steel Categories */}
        <div className="text-sm text-gray-300 space-y-4 border-b border-gray-700 pb-6">
          <div>
            <span className="font-semibold text-white">CONSTRUCTION STEEL</span>
            : TMT Bars | Binding Wire | Stirrups
          </div>
          <div>
            <span className="font-semibold text-white">FABRICATION STEEL</span>
            : Coming Soon..
          </div>
          <div>
            <span className="font-semibold text-white">SPECIAL STEEL</span>
            : Coming Soon..
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Company Info */}
          <div className="w-full lg:w-[30%]">
            <img
              src="/lohamandi_original.png"
              alt="Lohamandi Logo"
              className="h-10 sm:h-[120px] w-[200px] object-contain"
            />
            <p className="text-sm font-semibold">D Y Lohakart Pvt. Ltd.</p>
            <p className="text-sm text-gray-400">
              India’s trusted online steel marketplace
            </p>
            <p className="text-sm font-semibold mt-3">Registered Office</p>
            <p className="text-sm mb-2 text-gray-400">
              305, C-102, RDC, Raj Nagar,
              <br />
              Ghaziabad
            </p>
            <p className="text-sm font-semibold mt-3">Warehouse Address</p>
            <p className="text-sm mb-4 text-gray-400">
              Plot No - A4, Block-A, Zone B,
              <br />
              Jaipuria Sunrise Greens,
              <br />
              Village - Bamheta, 201001
            </p>
            <p className="text-sm text-gray-400">
              CIN: U12345DL2020PTC123456
              <br />
              GSTIN: 07AAXXX1234X1Z1
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} D Y Lohakart Pvt. Ltd.


              rights reserved.
            </p>
          </div>

          {/* Links + Payment + Social */}
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row justify-between gap-8">
            {/* Quick Links */}
            <div className="w-full flex flex-wrap items-start justify-start gap-6 sm:gap-10 lg:gap-4">
              <div className="min-w-[130px]">
                <h4 className="font-semibold text-sm mb-2">COMPANY</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/about">About Us</a></li>
                  <li>Career</li>
                </ul>
              </div>

              <div className="min-w-[160px]">
                <h4 className="font-semibold text-sm mb-2">PURCHASE</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>Bulk Enquiry</li>
                  <li>Sell At Lohamandi</li>
                </ul>
              </div>

              <div className="min-w-[160px]">
                <h4 className="font-semibold text-sm mb-2">SUPPORT</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                 <a href="/return"> <li>Returns</li></a>
                 <a href="/cancellation"> <li>Cancellations</li></a>
                </ul>
              </div>
            </div>

            {/* Payment & Social */}
            <div className="w-full sm:w-auto flex flex-col gap-6 mt-6 sm:mt-0">
              <div>
                <h4 className="font-semibold text-sm mb-2">PAYMENT OPTIONS</h4>
                <div className="flex gap-3">
                  <img src="/visalogo.png" alt="Visa" className="h-6" />
                  <img src="/mastercardlogo.png" alt="Mastercard" className="h-6" />
                  <img src="/americanExp.png" alt="Amex" className="h-6" />
                  <img src="/rupaylogo.png" alt="RuPay" className="h-6" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">FOLLOW US</h4>
                <div className="flex gap-3 text-xl">
                         <a
                           href="https://www.facebook.com/"
                           className="hover:text-[#1877F2] hover:scale-110 transition duration-300"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <FaFacebookF />
                         </a>
                         <a
                           href="https://www.youtube.com/"
                           className="hover:text-[#FF0000] hover:scale-110 transition duration-300"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <FaYoutube />
                         </a>
                         <a
                           href="https://www.instagram.com/lohamandicom?igsh=MWRzZmVvNDRhYTd4bg=="
                           className="hover:text-[#E1306C] hover:scale-110 transition duration-300"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <FaInstagram />
                         </a>
                         <a
                           href="https://www.linkedin.com/company/lohamandicom/"
                           className="hover:text-[#0077B5] hover:scale-110 transition duration-300"
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <FaLinkedinIn />
                         </a>
                         <a
                           href="mailto:info@lohamandi.com"
                           className="hover:text-[#EA4335] hover:scale-110 transition duration-300"
                         >
                           <FaEnvelope />
                         </a>
                       </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Lohamandi */}
        <div className="border-t border-gray-700 py-6">
          <h4 className="font-semibold text-white text-base mb-2">WHY LOHAMANDI?</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lohamandi is India’s leading online steel marketplace, breaking the
            traditional barriers of buying and selling steel. It connects
            manufacturers, suppliers, and buyers across a unified platform. We
            simplify the procurement process by offering competitive pricing,
            verified suppliers, and secure delivery, making steel sourcing more
            efficient and reliable. Lohamandi also empowers local sellers to
            become verified suppliers after meeting strict product quality
            standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
