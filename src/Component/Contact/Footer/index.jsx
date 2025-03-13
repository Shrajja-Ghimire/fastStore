// src/components/Footer.js
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-500 px-7 fixed bottom-0 left-0 w-full shadow-lg z-50 ">
      <div className="md:flex md:justify-center gap-10 p-5">
        {/* Contact Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p>Email: support@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <ul>
            <li className="flex gap-5 items-center">
              <FaFacebook />
              <p>Facebook</p>
            </li>
            <li className="flex gap-5 items-center">
              <FaInstagramSquare />
              <p>Instagram</p>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} FAST STORES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
