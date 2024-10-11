import React, { useState } from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from "@/public/icon/chevron.png";
import RoomCard from "./roomCard";
import Location from "@/app/json-data/locations.json";
import { useSearchContext } from "@/app/context/searchLocation";
// Dynamic import for Map to prevent SSR issues
const Map = dynamic(() => import("./map"), { ssr: false });

function Hero() {
  const [isChevron, setChevron] = useState(false);
  const { setSearchLocation } = useSearchContext();
  // Slider settings
  const handleChevron = () => {
    setChevron(!isChevron);
  };
  const handleFilter = (name: string) => {
    console.log(name);
    const position = Location.locations.filter(
      (place) => place.name == name
    )[0];
    if (position)
      setSearchLocation({
        latitude: position.latitude,
        longitude: position.longitude,
      });
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
          (isChevron ? " -mt-4 md:-mt-0 " : " mt-[40vh] md:mt-0 rounded-t-3xl ")
        }
      >
        <div
          className="chevron center md:hidden "
          onClick={() => {
            handleChevron();
          }}
        >
          <Image
            src={Chevron}
            alt="chevron-icon"
            width={20}
            height={20}
            className={"mt-2 " + (isChevron ? " rotate-0" : "rotate-180")}
          />
        </div>
        {/* Locations Slider */}
        <div className="locations md:mx-0 mx-4">
          <Slider {...settings} className="flex h-full bg-transparent m-2">
            {Location.locations.map((loc, key) => (
              <div
                key={key}
                className="location h-8 px-4 cursor-pointer rounded-3xl bg-white shadow-md"
                defaultValue={loc.name}
                onClick={() => handleFilter(loc.name)}
              >
                <span className="center w-full h-full">{loc.name}</span>
              </div>
            ))}
          </Slider>
        </div>

        {/* Rooms and Blogs */}
        <div className="rooms-blogs h-[62vh] overflow-y-scroll mt-4 mx-4 md:mx-0">
          <RoomCard />
        </div>
      </div>

      {/* Right Portion - Desktop Map */}
      <div
        className={
          "hero-right-portion md:flex  w-full md:w-[70%]  order-1 md:order-2 absolute md:relative  z-10 md:z-0 -mt-4 md:-mt-0"
        }
      >
        <Map />
      </div>
    </section>
  );
}

export default Hero;
