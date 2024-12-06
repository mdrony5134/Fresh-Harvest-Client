import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-grey-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Logo Section */}
          <div className="flex gap-2">
            <img
              src="/images/Logo-1.png"
              alt="Fresh Harvest Logo"
              className="h-10 mb-4"
            />
            <h1 className="text-xl font-bold text-grey-100">Fresh Harvests</h1>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-lg font-semibold text-grey-100 mb-4">
              Quick Links 1
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Detail Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-lg font-semibold text-grey-100 mb-4">
              Quick Links 2
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Favorites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-grey-100 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>📞 1234 5678 90</li>
              <li>✉️ freshharvests@gmail.com</li>
              <li>📍 Tanjung Sari Street, Pontianak, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Download and Payment Section */}
        <div className="flex flex-col sm:flex-row md:items-center items-start justify-between py-6">
          {/* Download Section */}
          <div className="">
            <h4 className="text-sm font-medium text-grey-100">Download App:</h4>
            <div className="flex md:items-center flex-col md:flex-row items-start gap-6 mt-4">
            <img src="/images/appstore.png" alt="app store image" />
            <img src="/images/googleplay.png" alt="google play sore" />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-4">
            <h4 className="text-sm font-medium text-grey-100">
              Accepted Payment Methods:
            </h4>
           <div className="flex items-center gap-6 mt-4">
           <img src="/images/Visa.png" alt="Visa" className="h-8" />
            <img src="/images/Paypal.png" alt="PayPal" className="h-8" />
            <img src="/images/ApplePay.png" alt="Apple Pay" className="h-8" />
           </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-6 mt-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between">
          <p>
            © {new Date().getFullYear()} Fresh Harvests. All Rights Reserved by
            Banana Studio.
          </p>
          <div className="flex space-x-4 pb-2 pt-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
