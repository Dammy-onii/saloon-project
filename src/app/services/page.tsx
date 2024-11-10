import GridGallery from "@/components/about/GridGallery";
import CustomNavHeader from "@/components/CustomNavHeader";
import Layout from "@/components/Layout/Layout";
import React from "react";

import men_1 from "../../assets/img/men_1.jpg";
import happyfinegirl from "../../assets/img/happyFineGirl.png";
import logistics from "../../assets/img/logistics.jpg";
import makeup from "../../assets/img/makeup.jpg";

import shipping from "../../assets/img/shipping.jpg";
import currency from "../../assets/img/currency-exchange.jpg";

function page() {
  const galleryItems = [
    {
      image: men_1,
      imageHeader: "Men Haircut",
    },
    {
      image: happyfinegirl,
      imageHeader: "Women Hair Stylist",
    },
    {
      image: makeup,
      imageHeader: "Face & Body Makeup",
    },
    {
      image: logistics,
      imageHeader: "Logistic Services",
    },
    {
      image: shipping,
      imageHeader: "Shipping Services",
    },
    {
      image: currency,
      imageHeader: "Money Exchange",
    },
  ];

  return (
    <Layout>
      <div>
        <CustomNavHeader
          NavHeader="Our Services"
          NavLinks="Home / Our Services"
        />
        <div className=" lg:w-2/4 flex flex-col items-center m-auto px-10 py-20 gap-8 ">
          <h2 className=" text-orange-900 font-semibold  ">OUR SERVICES</h2>
          <h1 className=" text-5xl lg:w-2/4 text-center m-auto ">
            Your Satisfaction Is Our Priority
          </h1>
          <p className=" font-light text-lg tracking-wide text-center ">
            We at AdeBlessing are dedicated to giving you exceptional services
            that go above and beyond. With our knowledgeable staff,
            individualised care, and dedication to quality, we aim to be your
            one-stop shop for all of your medical, grooming, and cosmetic needs.
            Make an appointment right now to see the differences for yourself!
          </p>
        </div>

        <div className=" px-10 lg:px-28 py-10 ">
          <GridGallery items={galleryItems} />
        </div>
      </div>
    </Layout>
  );
}

export default page;
