"use client";
import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosSearch, IoMdContact } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5"; // Import cart icon
import { MdMenu, MdClose } from "react-icons/md";

export default function HeaderTop() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div>
      {/* Delivery Notification */}
      <div className="w-full h-[41px] flex justify-center items-center bg-[#2A254B] text-white px-4">
        <CiDeliveryTruck className="text-2xl mr-2" />
        <h1 className="text-sm sm:text-base text-center">
          Free delivery on all orders over £50 with code EASTER at checkout
        </h1>
      </div>

      {/* Header Section */}
      <div className="flex w-full items-center justify-between px-4 sm:px-8 py-4 relative border-b">
        {/* Logo */}
        <h1 className="text-lg font-bold">Avion</h1>

        {/* Toggle Button (Mobile) */}
        <button
          className="sm:hidden text-2xl bg-transparent border-none focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row items-center sm:gap-6 gap-4 absolute sm:static top-[64px] left-0 right-0 bg-[#2A254B] sm:bg-transparent text-white sm:text-black sm:w-auto w-full px-4 sm:px-0 py-4 sm:py-0 z-50`}
        >
          {/* Menu Links */}
          <ul className="flex flex-col sm:flex-row sm:gap-6 gap-4 text-sm sm:text-base">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact</li>
            <li className="cursor-pointer hover:underline">Blog</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 text-xl">
            <IoIosSearch className="cursor-pointer hover:text-gray-500" />
            <IoCartOutline className="cursor-pointer hover:text-gray-500" />
            <IoMdContact className="cursor-pointer hover:text-gray-500" />
          </div>
        </nav>
      </div>
    </div>
  );
}
