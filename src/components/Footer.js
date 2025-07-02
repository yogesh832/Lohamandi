import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Footer = () => {
  return (
    <footer className="bg-[#060814] text-white pt-10 pb-6 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Desktop/Tablet View */}
        <div className="hidden sm:grid grid-cols-3 gap-10">
          {/* Column 1: Address */}
          <div>
            <h4 className="font-bold text-lg mb-3">Lohamandi Services Pvt. Ltd.</h4>
            <p className="text-sm text-gray-300">India’s trusted online steel marketplace</p>
            <p className="text-sm text-gray-400 mt-2">
              4th Floor, Metro Plaza, New Delhi<br />
              GSTIN: 07AAXXX1234X1Z1
            </p>
            <h5 className="text-sm text-white font-semibold mt-4 mb-1">Registered Office</h5>
            <p className="text-sm text-gray-400">
              123 Industrial Area, Sector 21,<br />
              Gurgaon, Haryana - 122001
            </p>
          </div>

          {/* Column 2: QR, Apps, Social */}
          <div className="space-y-3">
            <div className="space-y-2">
              <img src="/qr.png" alt="QR Code" className="h-24" />
              <img src="/googleplay.png" alt="Google Play" className="h-10" />
              <img src="/appstore.png" alt="App Store" className="h-10" />
            </div>
            <h5 className="text-sm text-white font-semibold mt-4">Follow Us</h5>
            <div className="flex space-x-3 pt-2">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* Column 3: Links and Payments */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-base mb-2">COMPANY</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>About Us</li>
                  <li>Career</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base mb-2">PURCHASE</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>Bulk Enquiry</li>
                  <li>Sell At Lohamandi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-base mb-2">SUPPORT</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Returns</li>
                  <li>Cancellations</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-2">PAYMENT OPTIONS</h4>
              <div className="flex flex-wrap gap-2">
                <img src="/visa.jpg" alt="Visa" className="h-6" />
                <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="/rupay.png" alt="RuPay" className="h-6" />
            
                <img src="/banktransfer.png" alt="Bank Transfer" className="h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Swiper with Custom Next Button */}
        <div className="sm:hidden block relative">
          <Swiper
            spaceBetween={12}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next" }}
          >
            {/* Slide 1: Address */}
            <SwiperSlide>
              <div className="bg-[#12151d] rounded-lg p-4">
                <h4 className="font-bold text-white mb-2 text-sm">Address</h4>
                <p className="text-xs text-gray-300">
                  4th Floor, Metro Plaza, New Delhi<br />
                  GSTIN: 07AAXXX1234X1Z1
                </p>
                <h5 className="text-sm text-white font-semibold mt-3 mb-1">Registered Office</h5>
                <p className="text-xs text-gray-300">
                  123 Industrial Area, Sector 21,<br />
                  Gurgaon, Haryana - 122001
                </p>
              </div>
            </SwiperSlide>

            {/* Slide 2: Apps + Social */}
            <SwiperSlide>
              <div className="bg-[#12151d] rounded-lg p-4 space-y-2">
                <img src="/qr.png" alt="QR Code" className="h-24 mx-auto" />
                <img src="/googleplay.png" alt="Google Play" className="h-10 mx-auto" />
                <img src="/appstore.png" alt="App Store" className="h-10 mx-auto" />
                <h5 className="text-sm text-white font-semibold text-center pt-2">Follow Us</h5>
                <div className="flex justify-center space-x-3 pt-2">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaYoutube />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: Links */}
            <SwiperSlide>
              <div className="bg-[#12151d] rounded-lg p-4 space-y-4">
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm">Company</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>About Us</li>
                    <li>Career</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm">Purchase</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>Track Orders</li>
                    <li>Shipping</li>
                    <li>Bulk Enquiry</li>
                    <li>Sell At Lohamandi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-white text-sm">Support</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Returns</li>
                    <li>Cancellations</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4: Payment */}
            <SwiperSlide>
              <div className="bg-[#12151d] rounded-lg p-4">
                <h4 className="font-bold mb-2 text-white text-sm">Payment Options</h4>
                <div className="flex gap-2">
                  <img src="/visa.jpg" alt="Visa" className="h-6" />
                  <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                  <img src="/rupay.png" alt="RuPay" className="h-6" />
                  <img src="/banktransfer.png" alt="Bank Transfer" className="h-6" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Final Row - Why Lohamandi */}
        <div className="pt-6 border-t border-gray-700">
          <h4 className="font-semibold text-white text-base mb-2">WHY LOHAMANDI?</h4>
          <p className="text-sm text-gray-400">
            Lohamandi is your one-stop steel solution provider. Our platform bridges the gap between suppliers and buyers by delivering high-quality steel products efficiently and transparently across India.
          </p>
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Lohamandi Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
