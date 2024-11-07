import GridGallery from "@/components/about/GridGallery";
import CustomNavHeader from "@/components/CustomNavHeader";
import Layout from "@/components/Layout/Layout";
import React from "react";

function page() {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      imageHeader: "Men Haircut",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544894079-4184d7a29169?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageHeader: "Women Hair Stylist",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547322895-5137a4f40af6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageHeader: "Face & Body Makeup",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544894079-4184d7a29169?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageHeader: "Logistic Services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547322895-5137a4f40af6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageHeader: "Shipping Services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
