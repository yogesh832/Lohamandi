import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white min-h-[45vh] px-6 py-10 md:px-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
        {/* Logo & Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 full md:w-1/4 items-center">
            <img src="/logo.png" alt="Lohamandi Logo" className="w-32" />
          <div className="text-sm">
            <p>Office No - 305, C 102, RDC Raj Nagar, Ghaziabad</p>
            <p>📞 +91 9811795184</p>
            <p>✉ info@Lohamandi.com</p>
          </div>
        </div>

        {/* Pages */}
        <div className="w-full md:w-1/4">
          <h2 className="mb-3 font-semibold text-lg">Pages</h2>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full md:w-1/3">
          <h3 className="mb-3 font-semibold text-lg">Subscribe</h3>
          <p className="mb-2 text-sm font-normal">
            We offer newsletter subscription services.
          </p>
          <div className="flex flex-col sm:flex-row w-full">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 text-black rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-auto"
            />
            <button className="bg-white text-black px-4 py-2 mt-2 sm:mt-0 sm:rounded-r-md sm:rounded-l-none rounded-md">
              Register
            </button>
          </div>
          <p className="text-xs mt-2 font-normal">
            By clicking Register, you accept our
            <span className="underline ml-1">Terms and Conditions</span>.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between text-sm gap-2">
        <p>© 2025 Lohamandi Services, All rights reserved.</p>
        <div className="flex gap-4">
          <span>🔗</span>
          <span>▶</span>
          <span>📘</span>
          <span>📸</span>
          <span>🎵</span>
        </div>
      </div>
    </footer>
  );
}
