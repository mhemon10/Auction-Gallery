// src/components/Footer.jsx
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-15">
      {/* Logo */}
      <h1 className="text-2xl font-semibold">
        <span className="text-indigo-700">Auction</span>
        <span className="text-yellow-500">Gallery</span>
      </h1>

      {/* Subtitle */}
      <p className="font-bold mt-2">Bid. Win. Own.</p>

      {/* Nav Links */}
      <nav className="flex justify-center gap-6 mt-4 text-base font-medium text-gray-700">
        <a className="hover:text-blue-500 cursor-pointer">Home</a>

        {/* Dropdown */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="hover:text-blue-500 cursor-pointer flex items-center gap-1">
            Auctions <FaChevronDown className="text-xs mt-1" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-10"
          >
            <li><a>Live Auctions</a></li>
            <li><a>Upcoming</a></li>
          </ul>
        </div>

        <a className="hover:text-blue-500 cursor-pointer">Categories</a>
        <a className="hover:text-blue-500 cursor-pointer">How to works</a>
      </nav>

      {/* Copyright */}
      <p className="text-xs text-black mt-6">
        Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
