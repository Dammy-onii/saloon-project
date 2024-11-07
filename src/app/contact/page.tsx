import CustomNavHeader from "@/components/CustomNavHeader";
import React from "react";
import Image from "next/image";

import contactImg from "../../assets/img/contact1.jpg";
import makeUp from "../../assets/img/makeup.jpg";
import Layout from "@/components/Layout/Layout";

function page() {
  return (
    <Layout>
      <div>
        <CustomNavHeader NavHeader="Contact" NavLinks="Home / Contact" />
        <div className=" relative px-10 lg:px-28 flex py-20 flex-col lg:flex-row gap-10 justify-start items-start ">
          <div className=" lg:w-2/4  flex flex-row relative ">
            <Image src={contactImg} alt="De Blessing Salon" />
            <Image
              src={makeUp}
              className=" absolute right-0 top-32 w-72 rounded-br-[60%]  "
              alt="De Blessing Salon"
            />
          </div>
          <div className=" lg:w-2/4 mt-80 lg:mt-0 lg:py-10 flex flex-col gap-8 ">
            <h1 className=" text-5xl ">Get in touch with us</h1>
            <h2 className=" text-xl font-light tracking-wide lg:w-3/4 ">
              AdeBlessing is always available to help and answer any questions
              you may have so you can choose wisely when it comes to starting
              your salon experience with us.
            </h2>

            <div className=" flex flex-row justify-start gap-5 ">
              <span className="material-symbols-outlined text-4xl">
                pin_drop
              </span>
              <div className=" flex flex-col gap-5 ">
                <h1 className=" text-2xl font-light ">Address</h1>
                <h2 className=" text-xl font-extralight w-3/4 ">
                  35A dalry Road, <b>Edinburgh</b> EH11 2BU
                </h2>
                <h2 className=" text-xl font-extralight w-3/4 ">
                  59-60 Victoria Road, <b>Aberdeen</b> AB11 9LT
                </h2>
              </div>
            </div>

            <div className=" flex flex-row justify-start gap-5 ">
              <span className="material-symbols-outlined text-4xl">call</span>
              <div className=" flex flex-col gap-5 ">
                <h1 className=" text-2xl font-light ">Call Us</h1>
                <h2 className=" text-xl font-extralight w-3/4 ">
                  Mobile: +(44) 751 1622 801
                </h2>
              </div>
            </div>

            <div className=" flex flex-row justify-start gap-5 ">
              <span className="material-symbols-outlined text-4xl">
                mark_email_unread
              </span>
              <div className=" flex flex-col gap-5 ">
                <h1 className=" text-2xl font-light ">Email</h1>
                <h2 className=" text-xl font-extralight w-3/4 ">
                  info@adeblessing.co.uk
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
