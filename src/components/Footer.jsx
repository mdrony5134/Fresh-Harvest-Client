import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full bg-grey-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2  sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          {/* Logo Section */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0 flex items-center  gap-1">
            <img src="/images/Logo-1.png" alt="logo image" />
            <h1 className="text-[35px] font-bold text-black">Fresh harvest</h1>
          </div>

          {/* Add additional footer sections */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Quick Links One
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Quic Links Two
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Contact Us
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Repeat similar sections */}
        </div>

        {/* Footer bottom section */}
        <div className="border-t pt-6 mt-8 text-center font-bold pb-6 text-sm text-gray-600 flex items-center justify-between">
          © {new Date().getFullYear()} PageDone. All rights reserved.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-[32px] h-[32px] rounded-full bg-black flex items-center justify-center">
            <FaTwitter className="text-white" />
            </div>
            <div className="w-[32px] h-[32px] rounded-full bg-black flex items-center justify-center">
            <FaFacebookF className="text-white" />
            </div>
            <div className="w-[32px] h-[32px] rounded-full bg-black flex items-center justify-center">
            <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
