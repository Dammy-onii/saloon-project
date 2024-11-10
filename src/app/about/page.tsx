import React from "react";

import AboutIntro from "@/components/AboutIntro";
import Layout from "@/components/Layout/Layout";
import CustomNavHeader from "@/components/CustomNavHeader";
import Image from "next/image";

import aboutBanner from "../../assets/img/h3-background02.png"
import fineBoy from "../../assets/img/happyFineBoy.jpeg";
import fineGirl from "../../assets/img/happyFineGirl.png";

function page() {
  return (
    <Layout>
      <div>
        <CustomNavHeader NavHeader="About Us" NavLinks="Home / About Us" />
        <AboutIntro
          bodyTitle="The outstanding calibre of work produced by our beauty technicians makes us at AdeBlessing Salon proud. We not only provide our customers with the best services at cheap prices, but we also uphold the strictest standards of hygiene and professionalism."
          body="@AdeBlessing Salon, we take pride in the quality of work that our nail technicians perform. We offer the highest levels of professionalism and sanitation for our clients while providing the best services and keeping our prices reasonable."
          display="hidden"
        />
        <Image
          src={aboutBanner}
          alt="AdeBlessing Salon"
          className=" w-full h-96 bg-gray-500 object-cover  "
        />
        <div className=" flex flex-col lg:flex-row px-10 lg:px-28 py-20 gap-10 justify-between items-center ">
          <div className=" w-full lg:w-2/4 h-full  ">
            <h2 className=" text-orange-900 font-semibold  ">
              Our Happy Clients
            </h2>
            <h1 className=" text-5xl m-auto ">
              Here&apos;s what our satisfied clients are saying
            </h1>
            <div className=" my-10 ">
              <h2 className=" font-light text-lg tracking-wide pl-20 ">
                “I was drawn to AdeBlessing because I wanted to explore other
                career paths. I wanted to demonstrate to them that you can
                pursue a career you love. fostering friendships, putting people
                at ease, and making them happy with their manicures!”
              </h2>
            </div>
          </div>
          <div className=" lg:w-2/4 h-full flex flex-col ">
            <Image
              src={fineBoy}
              alt="AdeBlessing Salon"
              className=" w-96 h-96 lg:w-96 lg:h-96 object-cover bg-gray-500 rounded-tl-[50%] mb-[-15%] z-10 "
            />
            <Image
              src={fineGirl}
              alt="AdeBlessing Salon"
              className=" w-96 h-96 lg:w-96 lg:h-96 object-cover bg-gray-200 rounded-br-[50%] mt-[-15%] self-end "
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
