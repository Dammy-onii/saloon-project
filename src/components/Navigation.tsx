"use client";
import React, { useState } from "react";
import Image from "next/image";

import logo from "../assets/img/logo_light.png";
import NavLink from "./NavLink";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<boolean>(false);

  return (
    <nav className="w-full h-24 bg-none flex items-center px-6 lg:px-20 justify-between z-50 shadow-md border-b">
      <div className="flex items-center gap-10">
        <Image src={logo} alt="De Blessing Salon" className="w-36 mr-10" />

        <div className="hidden lg:flex gap-5">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/contact" label="Contact" />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <h2>+(44) 751 1622 801</h2>
        <button className="bg-none border border-black text-black px-8 py-2 hover:bg-orange-800 font-semibold text-sm ">
          BOOK ONLINE
        </button>
        <button
          onClick={() => setIsSidePanelOpen(true)}
          className="text-black px-4 py-2 rounded hover:text-orange-800"
        >
          <span className="material-symbols-outlined cursor-pointer text-3xl">
            menu
          </span>
        </button>
      </div>

      <div className="flex items-center lg:hidden gap-4">
        <span
          className="material-symbols-outlined cursor-pointer text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-transparent shadow-lg z-50 flex flex-col items-center gap-4 py-6 lg:hidden">
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

      {isSidePanelOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsSidePanelOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 w-[30vw] h-full bg-white shadow-lg z-50 p-6 flex flex-col">
            <button
              onClick={() => setIsSidePanelOpen(false)}
              className="text-gray-500 hover:text-gray-800 self-end"
            >
              <span className="material-symbols-outlined cursor-pointer text-3xl">
                close
              </span>
            </button>
            <div className="mt-4 flex flex-col px-5 gap-8">
              <Image
                src={logo}
                alt="De Blessing Salon"
                className="w-36 lg:w-56"
              />

              <h1 className=" text-4xl ">Men and Women Beauty Salon</h1>

              <div className=" flex flex-row justify-start gap-5 ">
                <span className="material-symbols-outlined text-2xl text-orange-600">
                  call
                </span>
                <div className=" flex flex-col gap-5 ">
                  <h2 className="  font-extralight w-full ">
                    +(44) 751 1622 801
                  </h2>
                  <h2 className="  font-extralight ">
                    35A dalry Road, <b>Edinburgh</b> EH11 2BU
                  </h2>
                </div>
              </div>

              <div className=" flex flex-row justify-start gap-5 ">
                <span className="material-symbols-outlined text-2xl text-orange-600">
                  pin_drop
                </span>
                <div className=" flex flex-col gap-5 ">
                  <h2 className="  font-extralight ">
                    59-60 Victoria Road, <b>Aberdeen</b> <br /> AB11 9LT
                  </h2>
                </div>
              </div>

              <div className=" flex flex-row justify-start gap-5 ">
                <span className="material-symbols-outlined text-2xl text-orange-600">
                  mark_email_unread
                </span>
                <div className=" flex flex-col gap-5 ">
                  <h2 className=" font-extralight ">info@adeblessing.co.uk</h2>
                </div>
              </div>

              <div className="flex flex-row items-center gap-5">
                <div className=" w-11 h-11 bg-gray-100 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-orange-600 hover:border-black hover:mt-[-20px] transition-all ">
                  <i className="fa fa-facebook text-lg text-gray-700"></i>
                </div>
                <div className=" w-11 h-11 bg-gray-100 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-orange-600 hover:border-black hover:mt-[-20px] transition-all ">
                  <i className="fa fa-twitter text-lg text-gray-700"></i>
                </div>
                <div className=" w-11 h-11 bg-gray-100 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-orange-600 hover:border-black hover:mt-[-20px] transition-all ">
                  <i className="fa fa-instagram text-lg text-gray-700"></i>
                </div>
                <div className=" w-11 h-11 bg-gray-100 rounded-full border-2 flex items-center justify-center hover:bg-black hover:text-orange-600 hover:border-black hover:mt-[-20px] transition-all ">
                  <i className="fa fa-pinterest text-lg text-gray-700"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navigation;
