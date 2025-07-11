import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Phone, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#060814] text-white pt-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
          <div>
            <h5 className="font-semibold text-sm uppercase">
              Tell Us Your Requirements
            </h5>
            <p className="text-sm text-gray-400">
              Discuss it with our steel expert
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Phone className="text-white mt-1" size={18} />
            <div>
              <h5 className="font-semibold text-sm uppercase">Call Us</h5>
              <p className="text-sm text-gray-400">9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MessageSquare className="text-white mt-1" size={18} />
            <div>
              <h5 className="font-semibold text-sm uppercase">WhatsApp Us</h5>
              <p className="text-sm text-gray-400">9876543210</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="text-white mt-1" size={18} />
            <div>
              <h5 className="font-semibold text-sm uppercase">Email Us</h5>
              <p className="text-sm text-gray-400">support@lohamandi.com</p>
            </div>
          </div>
        </div>

        {/* Steel Categories */}
        <div className="text-sm text-gray-300 space-y-4 border-b border-gray-700 pb-6">
          <div>
            <span className="font-semibold text-white">CONSTRUCTION STEEL</span>
            :&nbsp; TMT Bars | Binding Wire | Stirrups
          </div>
          <div>
            <span className="font-semibold text-white">FABRICATION STEEL</span>
            :&nbsp; Coming Soon..
          </div>
          <div>
            <span className="font-semibold text-white">SPECIAL STEEL</span>
            :&nbsp; Coming Soon..
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Company Info */}
          <div className="w-full lg:w-[30%] ">
            <img
              src="/lohamandi_original.png"
              alt="Lohamandi Logo"
              className="h-10 sm:h-[120px] w-[200px] object-contain"
            />
            <p className="text-sm font-semibold">
              D Y Lohakart Pvt. Ltd.
            </p>
            <p className="text-sm text-gray-400">
              India’s trusted online steel marketplace
            </p>
            <p className="text-sm font-semibold mt-3">Registered Office</p>
            <p className="text-sm mb-2 text-gray-400">
              4th Floor, Metro Plaza,
              <br />
              New Delhi - 110001
            </p>
            <p className="text-sm font-semibold mt-3">WearHouse Address</p>
            <p className="text-sm mb-4 text-gray-400">
              4th Floor, Metro Plaza,
              <br />
              New Delhi - 110001
            </p>
            <p className="text-sm text-gray-400">
              CIN: U12345DL2020PTC123456
              <br />
              GSTIN: 07AAXXX1234X1Z1
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} Lohamandi Services Pvt. Ltd. All
              rights reserved.
            </p>
          </div>

          {/* Links + Payment + Social */}
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row justify-between gap-8">
            {/* Links */}
            <div className="w-full flex flex-wrap items-start justify-start gap-6 sm:gap-10 lg:gap-4">
              {/* COMPANY */}
              <div className="min-w-[130px] sm:w-auto">
                <h4 className="font-semibold text-sm mb-2">COMPANY</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <a href="/about">
                    {" "}
                    <li>About Us</li>
                  </a>
                  <li>Career</li>
                </ul>
              </div>

              {/* PURCHASE */}
              <div className="min-w-[160px] sm:w-auto">
                <h4 className="font-semibold text-sm mb-2">PURCHASE</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>Bulk Enquiry</li>
                  <li>Sell At Lohamandi</li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div className="min-w-[160px] sm:w-auto">
                <h4 className="font-semibold text-sm mb-2">SUPPORT</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Returns</li>
                  <li>Cancellations</li>
                </ul>
              </div>
            </div>

            {/* Payment & Social */}
            {/* Payment & Social */}
            <div className="w-full sm:w-auto flex flex-col gap-6 mt-6 sm:mt-0">
              {/* Payment Options */}
              <div>
                <h4 className="font-semibold text-sm mb-2">PAYMENT OPTIONS</h4>
                <div className="flex  gap-3 lg:justify-center">
                  <img src="/visalogo.png" alt="Visa" className="h-6" />
                  <img
                    src="/mastercardlogo.png"
                    alt="Mastercard"
                    className="h-6"
                  />
                  <img src="/americanExp.png" alt="Amex" className="h-6" />
                  <img src="/rupaylogo.png" alt="RuPay" className="h-6" />
                  {/* <img src="/banktransfer.png" alt="Bank Transfer" className="h-6" /> */}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="font-semibold text-sm mb-2">FOLLOW US</h4>
                <div className="flex space-x-3 text-gray-300 text-lg mt-1">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Lohamandi */}
        <div className="border-t border-gray-700 py-6">
          <h4 className="font-semibold text-white text-base mb-2">
            WHY LOHAMANDI?
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lohamandi is India’s leading online steel marketplace, breaking the
            traditional barriers of buying and selling steel. It connects
            manufacturers, suppliers, and buyers across a unified platform. We
            simplify the procurement process by offering competitive pricing,
            verified suppliers, and secure delivery,making steel sourcing more
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
