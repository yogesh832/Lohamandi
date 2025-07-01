import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: ["About Us", "Career"],
    },
    {
      title: "PURCHASE",
      links: ["Track Orders", "Shipping", "Bulk Enquiry", "Sell At Lohamandi"],
    },
    {
      title: "SUPPORT",
      links: ["FAQs", "Privacy Policy", "Returns", "Cancellations"],
    },
    {
      title: "DOWNLOAD APP",
      links: [],
      custom: (
        <div className="space-y-2">
          <img src="/qr.png" alt="QR Code" className="h-24" />
          <img src="/googleplay.png" alt="Google Play" className="h-10" />
          <img src="/appstore.png" alt="App Store" className="h-10" />
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-[#060814] text-white pt-10 pb-4 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Grid for Desktop/Tablet */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Lohamandi Services Pvt. Ltd.</h4>
            <p className="text-sm text-gray-300">
              India’s trusted online steel marketplace
            </p>
            <p className="text-sm text-gray-400 mt-2">
              4th Floor, Metro Plaza, New Delhi
              <br />
              GSTIN: 07AAXXX1234X1Z1
            </p>
          </div>

          {footerSections.slice(0, 3).map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-3 text-white text-base">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Custom App Section */}
          <div>
            <h4 className="font-semibold mb-3 text-white text-base">
              {footerSections[3].title}
            </h4>
            {footerSections[3].custom}
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="block sm:hidden mt-4">
          <Swiper spaceBetween={10} slidesPerView={1.2}>
            {footerSections.map((section, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-[#12151d] rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-white text-sm">
                    {section.title}
                  </h4>
                  {section.custom ? (
                    section.custom
                  ) : (
                    <ul className="space-y-1 text-xs text-gray-300">
                      {section.links.map((link, i) => (
                        <li key={i}>{link}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Social and Payment */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6">
          <div className="flex space-x-4 text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <div className="flex gap-2">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/rupay.png" alt="RuPay" className="h-6" />
            <img src="/cash.png" alt="Cash" className="h-6" />
            <img src="/banktransfer.png" alt="Bank Transfer" className="h-6" />
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Lohamandi Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

