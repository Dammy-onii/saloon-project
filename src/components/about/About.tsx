import React from "react";
import SlideshowBanner from "./SlideshowBanner";
import Image from "next/image";

import aboutHair from "../../assets/img/hair_2.jpg";
import GridGallery from "./GridGallery";
import AboutIntro from "../AboutIntro";

import menHair from "../../assets/img/men_haircut.jpeg";
import womenHair from "../../assets/img/lady_hair.jpg";
import shipping from "../../assets/img/shipping.jpg";
import currency from "../../assets/img/currency-exchange.jpg";
import serviceBanner from "../../assets/img/chris-knight--ucnC7PMDqE-unsplash.jpg"

function About() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Story of modern stylish Salon",
      description:
        "The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.",
      buttonText: "SHOP NOW",
      buttonLink: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1546189513-0873093d4013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      title: "The Story of modern stylish Salon",
      description:
        "The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.",
      buttonText: "SHOP NOW",
      buttonLink: "/shop",
    },
    {
      image:
        "https://images.unsplash.com/photo-1709884732294-90379fee354c?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Join Our Community",
      description: "Become a part of our exclusive group",
      buttonText: "SHOP NOW",
      buttonLink: "/signup",
    },
  ];

  const servicesCheck = [
    {
      text: "Men Salon",
    },
    {
      text: "Women Salon",
    },
    { text: "Manicure / Pedicure" },
    { text: "Logistics" },
    { text: "Currency Exchange" },
  ];

  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountain Views",
      description: "Experience the beauty of mountain landscapes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544894079-4184d7a29169?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beach Paradise",
      description: "Relax by the serene beaches around the world.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547322895-5137a4f40af6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "City Lights",
      description: "Discover vibrant city life and nightlife.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544894079-4184d7a29169?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beach Paradise",
      description: "Relax by the serene beaches around the world.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547322895-5137a4f40af6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "City Lights",
      description: "Discover vibrant city life and nightlife.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountain Views",
      description: "Experience the beauty of mountain landscapes.",
    },
  ];

  const serviceImage = [
    { image: menHair, title: "Haircut", text: "Men's, Trend" },
    { image: womenHair, title: "Women Hair Stylist", text: "Women's, Trend" },
    { image: shipping, title: "Shipping Services", text: "Logistics, Trend" },
    { image: currency, title: "Currency Exchange", text: "Exchange, Trend" },
  ];

  return (
    <div className=" w-full h-full ">
      <div className=" h-screen w-full relative flex flex-col items-center -z-10 ">
        <SlideshowBanner slides={slides} interval={1000000} />
      </div>

      <AboutIntro
        bodyTitle="Innovative Salon Studio Offering Expert Services To Enhance Your
            Personality's Beauty"
        body=" The outstanding calibre of work produced by our beauty technicians
            makes us at AdeBlessing Salon proud. We not only provide our
            customers with the best services at cheap prices, but we also uphold
            the strictest standards of hygiene and professionalism."
        display="flex"
      />

      <div className="flex flex-col px-10 lg:px-28 py-20 gap-8 items-center ">
        <h2 className=" text-orange-900 font-semibold  ">Our Services</h2>
        <h1 className=" text-5xl lg:w-2/4 text-center m-auto ">
          A New Standard in Our Services
        </h1>

        <div className=" flex flex-row gap-8 ">
          {serviceImage.map((service, index) => (
            <div className=" flex flex-col gap-4 items-center " key={index}>
              <Image
                src={service.image}
                alt="De Blessing Salon"
                className=" w-44 h-48 lg:w-80 lg:h-96 rounded-[35%] bg-gray-500 "
              />
              <h1>{service.title}</h1>
              <h2 className=" text-sm font-light ">{service.text}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between items-center lg:h-screen ">
        <div className="lg:w-2/5 h-full relative">
          <Image
            src={serviceBanner}
            alt="De Blessing Salon"
            className=" w-screen lg:w-full h-screen lg:h-full object-cover bg-gray-400 "
          />
          <Image
            src={aboutHair}
            className=" absolute bottom-20 lg:right-[-20%] w-2/5  self-end rounded-br-[50%] "
            alt="De Blessing Salon"
          />
        </div>
        <div className=" lg:w-3/5 h-full px-10 lg:px-20 py-20 ">
          <div className="lg:w-4/5 text-left flex flex-col gap-4 ">
            <h2 className=" text-orange-900 font-semibold  ">
              FULL RANGE OF OUR SERVICES
            </h2>
            <h1 className=" text-5xl m-auto ">
              From Classic Trendy Men and Women Salon and More...
            </h1>
            <div className=" lg:w-2/4 m-auto flex flex-col gap-4 my-10 py-8 ">
              {servicesCheck.map((service, index) => (
                <div
                  className=" lg:w-4/5 flex flex-row items-center justify-between"
                  key={index}
                >
                  <div className=" flex flex-row gap-2 ">
                    <span className="material-symbols-outlined text-orange-600">
                      check
                    </span>
                    <h2 className=" text-left ">{service.text}</h2>
                  </div>
                  <span className="material-symbols-outlined text-orange-600">
                    check
                  </span>
                </div>
              ))}
              <button className="lg:w-3/5 bg-black px-8 py-4 hover:bg-orange-800 font-semibold text-sm text-white my-4">
                BOOK ONLINE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col px-10 lg:px-28 py-20 gap-8 items-center ">
        <h2 className=" text-orange-900 font-semibold  ">
          Explore Our Programs
        </h2>
        <h1 className=" text-5xl m-auto ">We are proud of our service</h1>
        <GridGallery items={galleryItems} />
        <button
          className={`bg-none px-8 py-4 hover:bg-orange-800 hover:border-orange-800 border-2 font-semibold text-sm text-black hover:text-white my-4 `}
        >
          MORE ABOUT US
        </button>
      </div>
    </div>
  );
}

export default About;
