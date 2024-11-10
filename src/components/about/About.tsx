import React from "react";
import SlideshowBanner from "./SlideshowBanner";
import Image from "next/image";

import GridGallery from "./GridGallery";
import AboutIntro from "../AboutIntro";

import menHair from "../../assets/img/men_haircut.jpeg";
import womenHair from "../../assets/img/lady_hair.jpg";
import shipping from "../../assets/img/shipping.jpg";
import currency from "../../assets/img/currency-exchange.jpg";
import serviceBanner from "../../assets/img/chris-knight--ucnC7PMDqE-unsplash.jpg";
import men_1 from "../../assets/img/men_1.jpg";
import happyfinegirl from "../../assets/img/happyFineGirl.png";
import hair_1 from "../../assets/img/hair_1.png";
import makeup from "../../assets/img/makeup.jpg";

function About() {
  const slides = [
    {
      image: "/sliders/slider1.jpg",
      title: "The Story of modern stylish Salon",
      description:
        "The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.",
      buttonText: "SHOP NOW",
      buttonLink: "/about",
    },
    {
      image: "/sliders/slider2.jpg",
      title: "The Story of modern stylish Salon",
      description:
        "The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.",
      buttonText: "SHOP NOW",
      buttonLink: "/shop",
    },
    {
      image: "/sliders/3.jpg",
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
      image: hair_1,
      title: "Cosmetology",
      description:
        "At Ade Blessing Salon, our expert stylists provide personalized haircuts and vibrant coloring services. Enhance your look with our professional hair care",
    },
    {
      image: men_1,
      title: "hair & coloring",
      description:
        "Welcome to the Hair salon. A modern beauty salon helps realize a person's natural desire to look good, to remain beautiful and desirable.",
    },
    {
      image: shipping,
      title: "Cosmetology",
      description:
        "At Ade Blessing Salon, our expert stylists provide personalized haircuts and vibrant coloring services. Enhance your look with our professional hair care",
    },
    {
      image: happyfinegirl,
      title: "Body Lift",
      description:
        "personalized haircuts and vibrant coloring services. Enhance your look with our professional hair care in Edinburgh & Aberdeen…",
    },
    {
      image: currency,
      title: "Cosmetology",
      description:
        "At Ade Blessing Salon, our expert stylists provide personalized haircuts and vibrant coloring services. Enhance your look with our professional hair care",
    },
    {
      image: makeup,
      title: "Breast Augmentation",
      description:
        "At Ade Blessing Salon, our expert stylists provide personalized haircuts and vibrant coloring services. Enhance your look with our professional hair care",
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
            src={menHair}
            className=" absolute bottom-20 lg:right-[-30%] w-72  self-end rounded-br-[50%] "
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
          className={`bg-none px-8 py-4 transition-all hover:bg-orange-800 hover:border-orange-800 border-2 font-semibold text-sm text-black hover:text-white my-4 `}
        >
          VIEW THE GALLERY
        </button>
      </div>
    </div>
  );
}

export default About;
