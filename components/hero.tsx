import React, { useState } from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomCard from "./roomCard";
import location from "@/app/json-data/locations.json";
import { SearchProvider } from "@/app/context/searchLocation";

// Dynamic import for Map to prevent SSR issues
const Map = dynamic(() => import("./map"), { ssr: false });

function Hero() {
  const [isToggle, setToggle] = useState(false);
  // Slider settings
  const handleToggle = () => {
    setToggle(!isToggle);
  };
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    adaptiveHeight: true,
  };

  return (
    <section className="hero md:m-2 flex flex-col md:flex-row  md:flex gap-6 h-full ">
      {/* Left Portion */}
      <div
        className={
          "hero-left-portion transition-all duration-150 md:w-[30%] -my-4 order-2 md:order-1 bg-white md:bg-none z-50 md:z-0 " +
          (isToggle ? " -mt-4 md:-mt-0 " : " mt-[40vh] md:mt-0 rounded-t-3xl ")
        }
      >
        <div
          className="verticalToggle center md:hidden"
          onClick={() => {
            handleToggle();
          }}
        >
          <strong>^</strong>
        </div>
        {/* Locations Slider */}
        <div className="locations md:mx-0 mx-4">
          <Slider {...settings} className="flex h-full bg-transparent m-2">
            {location.locations.map((loc) => (
              <div
                key={loc.id}
                className="location h-8 px-4 cursor-pointer rounded-3xl bg-white shadow-md"
              >
                <span className="center w-full h-full">{loc.name}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Rooms and Blogs */}
        <div className="rooms-blogs h-[64vh] overflow-y-scroll mt-4 mx-4 md:mx-0">
          <RoomCard />
        </div>
      </div>

      {/* Right Portion - Desktop Map */}
      <div
        className={
          "hero-right-portion md:flex  w-full md:w-[70%]  order-1 md:order-2 absolute md:relative  z-10 md:z-0 -mt-4 md:-mt-0"
        }
      >
        <SearchProvider>
          <Map />
        </SearchProvider>
      </div>
    </section>
  );
}

export default Hero;
