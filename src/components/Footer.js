import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white h-[45vh] text- flex flex-col justify-between px-6 py-10 md:px-16">
      <div className="flex flex-row md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Logo & Address */}
        <div className="flex flex-row space-x 6 gap-8">
               <div><img src="/logo.png" alt="Lohamandi Logo" className="w-40" /></div>
       <div>
         <p>Office No - 305, C 102. RDC Raj Nagar Ghaziabad</p>
          <p>📞 +91 9811795184</p>
          <p>✉ info@Lohamandi.com</p>
       </div>
      </div>   
        

        {/* Pages */}
        <div>
          <h2 className="mb-3">Pages</h2>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full md:w-1/3">
          <h3 className="mb-3">Subscribe</h3>
          <p className="mb-2 text-sm font-normal">We offer newsletter subscription services.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 w-full text-black rounded-l-md"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-md">
              Register
            </button>
          </div>
          <p className="text-xs mt-2 font-normal">
            By clicking Register, you acknowledge that you have read and accepted our
            <span className="underline"> Terms and Conditions</span>.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 flex justify-between text-sm">
        <p>© 2025 Lohamandi Services, All rights reserved.</p>
        <div className="space-x-4">
          <span>🔗</span><span>▶</span><span>📘</span><span>📸</span><span>🎵</span>
        </div>
      </div>
      
    </footer>
  );
}
