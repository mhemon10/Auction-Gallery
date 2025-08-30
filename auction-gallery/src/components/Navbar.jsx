import React, { useState } from 'react';
import { FaBell, FaSearch, FaChevronDown, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-white shadow-sm px-6 py-3">
      {/* Left Logo */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-blue-600">
          Auction<span className="text-yellow-500">Gallery</span>
        </a>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
          <FaBars />
        </button>
      </div>

      {/* Center Menu for Desktop */}
      <div className="hidden md:flex gap-6 items-center text-base font-medium text-gray-700 justify-center flex-1">
        <a className="hover:text-blue-500 cursor-pointer">Home</a>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="hover:text-blue-500 cursor-pointer flex items-center gap-1">
            Auctions <FaChevronDown className="text-xs" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-10">
            <li><a>Live Auctions</a></li>
            <li><a>Upcoming</a></li>
          </ul>
        </div>
        <a className="hover:text-blue-500 cursor-pointer">Categories</a>
        <a className="hover:text-blue-500 cursor-pointer">How to works</a>
      </div>

      {/* Right Icons (search, bell, avatar) */}
      <div className="hidden md:flex items-center gap-4 ml-6">
        <FaSearch className="text-gray-600 cursor-pointer" />
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600" />
          <span className="badge badge-xs bg-purple-600 text-white absolute -top-2 -right-2">1</span>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className="avatar w-10 rounded-full ring ring-primary ring-offset-2 cursor-pointer overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-40 z-10 mt-4">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[64px] left-0 w-full bg-white z-50 shadow-md px-6 py-4 space-y-3 text-gray-700 font-medium">
          <a className="block">Home</a>
          <div className="dropdown">
            <label tabIndex={0} className="flex items-center gap-1">
              Auctions <FaChevronDown className="text-xs" />
            </label>
            <ul tabIndex={0} className="menu pl-4">
              <li><a>Live Auctions</a></li>
              <li><a>Upcoming</a></li>
            </ul>
          </div>
          <a className="block">Categories</a>
          <a className="block">How to works</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
