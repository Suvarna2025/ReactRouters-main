import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 bg-black text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
      {/* Left side - Logo and Navigation Links */}
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <div className="flex items-center space-x-2">
  
      <Link
          to={"/"}
          className="text-white text-lg font-semibold hover:text-red-600"
        >
          <span className="text-2xl font-semibold text-white-800">NSK Shopify</span>
        </Link>
</div>

      </div>

      {/* Centered Navigation Links */}
      <div className="flex space-x-8">
        <Link
          to={"/"}
          className="text-white text-lg font-semibold hover:text-red-600"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-white text-lg font-semibold hover:text-red-600"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="text-white text-lg font-semibold hover:text-red-600"
        >
          Contact
        </Link>
        <Link
          to={"/product"}
          className="text-white text-lg font-semibold hover:text-red-600"
        >
          Products
        </Link>
      </div>

      {/* Cart Button */}
      <button
        onClick={onCartClick}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
