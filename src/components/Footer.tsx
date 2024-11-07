import React from "react";

import logo from "../assets/img/logo_light.png"
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className=" w-full h-full lg:h-[70vh] px-10 lg:px-28 flex flex-col lg:flex-row border-t border-b items-center ">
        <div className=" lg:w-1/3 h-full flex flex-col gap-4 py-10 lg:border-r px-10 ">
          <h1 className=" my-4 text-xl ">Quick Links</h1>
          <h2 className=" cursor-pointer font-light hover:text-orange-900 ">
            Home
          </h2>
          <h2 className=" cursor-pointer font-light hover:text-orange-900 ">
            Cosmetic Surgery
          </h2>
          <h2 className=" cursor-pointer font-light hover:text-orange-900 ">
            Skincare Menu
          </h2>
          <h2 className=" cursor-pointer font-light hover:text-orange-900 ">
            About Us
          </h2>
          <h2 className=" cursor-pointer font-light hover:text-orange-900 ">
            Testimonials
          </h2>
        </div>

        <div className=" lg:w-1/3 h-full flex flex-col lg:px-10 py-10 lg:border-r text-center gap-4 ">
          <Image src={logo} alt="De Blessing Salon"  className="w-60 my-4 m-auto" />
          <h2 className=" text-justify font-light tracking-wide ">
            Our beauty technicians do high-quality work, and we are proud of it
            at AdeBlessing Salon. In addition to offering our clients the
            greatest services and competitive pricing, we also maintain the
            highest standards of professionalism and hygiene.
          </h2>
          <h1 className=" my-4 text-2xl text-orange-900 ">
            +(44) 751 1622 801
          </h1>
        </div>

        <div className=" lg:w-1/3 h-full flex flex-col px-10 py-10 gap-4 ">
          <h1 className=" my-4 text-xl ">Contact Us</h1>
          <h2 className=" cursor-pointer font-light ">
            35A dalry Road, <b>Edinburgh</b>
            EH11 2BU
          </h2>
          <h2 className=" cursor-pointer font-light ">
            59-60 Victoria Road, <b>Aberdeen</b>
            AB11 9LT
          </h2>
          <h2>info@adeblessing.co.uk</h2>
          <h1 className=" my-4 text-xl ">Working Hours</h1>
          <h2 className=" cursor-pointer font-light ">
            Monday – Saturday: 9am – 6pm
          </h2>
          <h2 className=" cursor-pointer font-light ">Sunday: Closed</h2>
        </div>
      </div>
      <h2 className=" py-10 text-center  ">
        © Copyright 2024 whycespace. All rights reserved.
      </h2>
    </div>
  );
}

export default Footer;
