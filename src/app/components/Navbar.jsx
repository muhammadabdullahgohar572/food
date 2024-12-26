"use client";
import Image from "next/image";
import Logo from "../img/Navbar/logo.png";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [show, heddin] = useState(false);
  return (
    <>
      <div className="flex w-full justify-between items-center p-4 bg-black fixed top-0 left-0 z-50 shadow-lg">
        {/* Logo */}
        <Link href="/">
          <div>
            <Image src={Logo} width={100} alt="Logo" />
          </div>
        </Link>

        <div className="lg:flex hidden space-x-4 items-center ">
          {/* Phone Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              <i className="fa-solid fa-phone-volume mr-2"></i>0313038410
            </div>
          </button>

          {/* Submit Complaint Button */}
          <button className="relative w-36 h-14 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-bold">
              Submit your complaint
            </div>
          </button>

          {/* Location Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              <i className="fa-solid fa-location-dot mr-2"></i>Your Location
            </div>
          </button>
          <Link href="../page/About">
            <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
              <div className="relative z-10 flex items-center justify-center font-extrabold">
                Contact Us
              </div>
            </button>
          </Link>
          <Link href="../page/contactus">
            {/* About Us Button */}
            <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
              <div className="relative z-10 flex items-center justify-center font-extrabold">
                About Us
              </div>
            </button>
          </Link>

          {/* Cart Button */}
          <div className="relative">
            <div className="relative w-12 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="absolute left-7 bottom-4 top-0 text-sm font-extrabold text-white p-1 bg-red-600 rounded-full">
              0
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <label
            htmlFor="menu-icon"
            className="menu-icon flex flex-col justify-around items-center w-16 h-12 bg-black p-2 cursor-pointer"
          >
            <input
              onClick={() => heddin(!show)}
              id="menu-icon"
              type="checkbox"
              className="hidden peer"
            />

            <span className="block h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out peer-checked:rotate-45 peer-checked:bg-red-500 peer-checked:mb-1.5"></span>

            <span className="block h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out peer-checked:opacity-0 peer-checked:bg-red-500"></span>

            <span className="block h-0.5 w-full bg-white rounded-lg transition-all duration-300 ease-in-out peer-checked:-rotate-45 peer-checked:bg-red-500 peer-checked:mb-1.5"></span>
          </label>
        </div>

        {/* Mobile Menu */}
      </div>
      {show ? (
        <div
          className={`flex top-0 h-full left-0 z-50 bg-red-600 w-8/12 sm:w-6/12 absolute lg:hidden flex-col space-y-4 items-center ${
            show ? "translate-x-0" : "-translate-x-full "
          } transition-transform duration-500 ease-in-out`}
        >
          <br />
          <br />
          <br />

          {/* Phone Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              <i className="fa-solid fa-phone-volume mr-2"></i>0313038410
            </div>
          </button>

          {/* Submit Complaint Button */}
          <button className="relative w-36 h-14 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-bold">
              Submit your complaint
            </div>
          </button>

          {/* Location Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              <i className="fa-solid fa-location-dot mr-2"></i>Your Location
            </div>
          </button>

          {/* Contact Us Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              Contact Us
            </div>
          </button>

          {/* About Us Button */}
          <button className="relative w-36 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl">
            <span className="absolute inset-1 bg-black opacity-60 rounded-lg"></span>
            <div className="relative z-10 flex items-center justify-center font-extrabold">
              About Us
            </div>
          </button>

          {/* Cart Button */}
          <div className="relative">
            <div className="relative w-12 h-12 text-white bg-gradient-to-br from-yellow-500 to-pink-600 rounded-lg cursor-pointer transform transition-all duration-2000 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="absolute left-7 bottom-4 top-0 text-sm font-extrabold text-white p-1 bg-red-600 rounded-full">
              0
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
