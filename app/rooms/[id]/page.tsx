// pages/room.js
"use client";
import React, { useState } from "react";
import Area from "@/public/area.svg";
import Bed from "@/public/bedRoom.svg";
import Attached from "@/public/Attached.svg";
import Slider from "@/components/slidler";
import Room from "@/public/Room.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
import ImageCard from "@/components/imageSlider";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

// Mocked data (Replace this with real API call or props data)
const roomData = {
  id: "1",
  title: "Room for rent near Pulchowk Campus - For Students",
  price: 6000,
  tags: ["Room", "Rent"],
  favorite: false,
  verified: true,
  landlord: {
    name: "This Landlord Name",
    profile_image:
      "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
  },
  overview: [
    "Text about room features will go here. This is an example.",
    "Additional room details can be listed here.",
    "Proximity to landmarks or amenities may be described.",
    "Any other relevant details regarding the room.",
  ],
  facts_and_features: [
    "Spacious and well-lit room.",
    "Includes essential furniture.",
    "Wi-Fi and utilities included.",
    "Close to public transport.",
  ],
  neighborhood_images: [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ],
  key_features: {
    area: 50,
    unit: "m²",
    type: "Room",
    bedrooms: 2,
    bathrooms: 2,
    bathroom_type: "Attached",
  },
  contact_options: {
    post_demand: true,
    sign_in_required: true,
  },
  images: {
    main: "https://th.bing.com/th/id/OIP.GsLteSmcCJ0aKfVFqk9UzQHaE7?w=276&h=184&c=7&r=0&o=5&pid=1.7",
    gallery: [
      "https://th.bing.com/th/id/OIP.0TDBdU5WfRmDonxl-pCZPQAAAA?w=267&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.CrjVmMFLy0zcqFAR-5L6pgHaFj?w=205&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.hLEuFn6w0comL7pqIf2JBQHaE5?w=268&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.3Yr7dsM_iMRxeGowyjpzdwFEDA?w=297&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.tsZCXe8mirRmYlpSwFuyhQHaE7?w=242&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.eBDPhZtVRD8msGk_ysNjJwAAAA?w=241&h=180&c=7&r=0&o=5&pid=1.7",
    ],
  },
  location: {
    latitude: 27.6735,
    longitude: 85.3247,
  },
};

const RoomDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>();
  const [isImageCardOpen, setImageCardStatus] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 mx-3">
      {/* Image Gallery Section */}

      <div className="w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          {/* Main Image */}
          <div className="lg:col-span-2 bg-gray-300 rounded-lg h-[60vh] relative">
            <Image
              src={roomData.images.main}
              alt="Main room image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              onClick={() => {
                setCurrentImageIndex(0);
                setImageCardStatus(true);
              }}
            />
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-2 gap-2 lg:col-span-2">
            {roomData.images.gallery.slice(0, 4).map((img, index) => (
              <div
                key={index}
                className="bg-gray-300 rounded-lg h-[29vh] relative cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  onClick={() => {
                    setCurrentImageIndex(index + 1);

                    setImageCardStatus(true);
                  }}
                />
                {/* Overlay for extra images */}
                {index === 3 && roomData.images.gallery.length > 4 && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg select-none"
                    onClick={() => {
                      setCurrentImageIndex(index + 1);
                      setImageCardStatus(true);
                    }}
                  >
                    <span className="text-white text-xl font-bold ">
                      +{roomData.images.gallery.length - 4} more
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageCard
        images={roomData.images}
        currentImageIndex={currentImageIndex}
        state={isImageCardOpen}
      />
      {/* Main Content */}
      <div className="justify-between">
        <div className="flex-1">
          {/* Room Tags */}
          <div className="flex justify-between mb-4 w-full">
            <div className="flex gap-4">
              {roomData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-300 text-blue-900 px-8 py-1 rounded-2xl"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <span className="center gap-2 text-[12px]">
                <span className="material-symbols-outlined">favorite</span>
                {roomData.favorite ? "Added to Favourite" : "Add To Favourite"}
              </span>
              <span className="center gap-2 text-[12px]">
                <span className="material-symbols-outlined">new_releases</span>
                {roomData.verified
                  ? "Verified Property"
                  : "Unverified Property"}
              </span>
            </div>
          </div>

          {/* Room Title and Landlord */}
          <h1 className="text-2xl font-bold mb-2">{roomData.title}</h1>
          <div className="owner flex gap-2 items-center">
            <img
              src={roomData.landlord.profile_image}
              alt="Landlord profile"
              className="w-10 h-10 rounded-full overflow-hidden"
            />
            <div className="name center">
              <p className="text-gray-500 text-[12px]">
                Posted by:{" "}
                <span className="ml-1">{roomData.landlord.name}</span>
              </p>
            </div>
          </div>

          {/* Overview & Facts & Features Accordion */}
          <div className="flex">
            <div className="w-[67%]">
              <div className="h-auto">
                <details className="rounded-lg p-4">
                  <summary className="cursor-pointer">
                    <div className="head flex justify-between text-[21px]">
                      Overview
                      <span className="material-symbols-outlined rotate-90 select-none">
                        arrow_back_ios
                      </span>
                    </div>
                    <hr />
                  </summary>
                  <div className="mt-2 text-gray-700 text-[12px] mx-4">
                    {roomData.overview.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </details>

                <details className="rounded-lg p-4">
                  <summary className="cursor-pointer">
                    <div className="head flex justify-between text-[21px]">
                      Facts & Features
                      <span className="material-symbols-outlined rotate-90 select-none">
                        arrow_back_ios
                      </span>
                    </div>
                    <hr />
                  </summary>
                  <div className="mt-2 text-gray-700 text-[12px] mx-4">
                    {roomData.facts_and_features.map((feature, index) => (
                      <p key={index}>{feature}</p>
                    ))}
                  </div>
                </details>
              </div>

              {/* Neighborhood Tags */}
              <div className="m-4 space-y-4">
                <span className="text-[21px]">Neighborhood</span>
                <hr />
                <Slider slide_number={6} />
                <Map />
              </div>
            </div>

            {/* Right Side Card */}
            <div className="w-[32%] h-[140vh]">
              <div className="container sticky top-64 bg-white p-10 rounded-lg shadow-lg">
                {/* Price Section */}
                <div className="text-blue-900 center text-[28px] font-bold mb-6 text-right">
                  NRP. {roomData.price}
                </div>

                {/* Key Features Section */}
                <div className="mb-6">
                  <h1>Key Features</h1>
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center justify-between mt-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Area />
                        <span>
                          {roomData.key_features.area}{" "}
                          {roomData.key_features.unit}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Room />
                        <span>{roomData.key_features.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Bed />
                        <span>{roomData.key_features.bedrooms}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Attached />
                        <span>
                          {roomData.key_features.bathrooms}-
                          {roomData.key_features.bathroom_type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact and Book Buttons */}
                <div className="center">
                  <div className="btn-container flex gap-10">
                    {roomData.contact_options.post_demand && (
                      <button className="navbar-post-btn text-black border-[#00B7CB] border-solid border-2 hover:bg-[#00B7CB] hover:text-blue-950 px-6 py-1 rounded-md">
                        Post Demand
                      </button>
                    )}
                    {roomData.contact_options.sign_in_required && (
                      <button className="navbar-signin-btn bg-blue-900 hover:bg-white hover:text-blue-950 border-2 border-solid border-blue-950 text-white px-8 py-1 rounded-md">
                        Sign In
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
