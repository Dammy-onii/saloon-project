"use client"
import React, { useState } from "react";

import logo from "../assets/img/logo_light.png";
import Image from "next/image";
import NavLink from "./NavLink";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  return (
    <nav className="w-full h-24 bg-white flex items-center px-6 lg:px-20 justify-between z-50 shadow-md">
      
      <div className="flex items-center gap-10">
        <Image src={logo} alt="De Blessing Salon" className="w-36 lg:w-56" />

        <div className="hidden lg:flex gap-5">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <h2>+(44) 751 1622 801</h2>
        <button className="bg-black px-8 py-2 hover:bg-orange-800 font-semibold text-sm text-white">
          BOOK ONLINE
        </button>
      </div>

      <span
        className="lg:hidden material-symbols-outlined cursor-pointer text-xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "close" : "menu"}
      </span>

      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-4 py-6 lg:hidden">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
          <h2 className="mt-4">+(44) 751 1622 801</h2>
          <button className="bg-black w-4/5 py-2 hover:bg-orange-800 font-semibold text-sm text-white">
            BOOK ONLINE
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
