import React, { useState } from "react";
import dynamic from "next/dynamic";

import Image from "next/image";
import Slider from "@/components/slidler";
import Chevron from "@/public/icon/chevron.png";
import RoomCard from "./roomCard";

import Filter from "./filter";
// Dynamic import for Map to prevent SSR issues
const Map = dynamic(() => import("./map"), { ssr: false });

function Hero() {
  const [isChevron, setChevron] = useState(false);

  // Slider settings
  const handleChevron = () => {
    setChevron(!isChevron);
  };

  return (
    <section className="hero md:m-2 flex  flex-col md:flex md:flex-row   gap-6 ">
      {/* Left Portion */}
      <div
        className={
          "hero-left-portion   transition-all duration-700 md:w-[30%]  -my-4 order-2 md:order-1  md:bg-none z-40 md:z-0 bg-white " +
          (isChevron
            ? " mt-[5vh] md:-mt-0 "
            : " mt-[63vh] md:mt-0 rounded-t-3xl ")
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
            className={"my-4  " + (isChevron ? " rotate-0" : "rotate-180")}
          />
        </div>
        <div className="filter md:hidden -mt-2">
          <Filter />
        </div>
        {/* Locations Slider */}
        <Slider slide_number={3} />

        {/* Rooms and Blogs */}
        <div className="rooms-blogs h-[65vh] overflow-y-scroll mt-4 mx-4 md:mx-0 ">
          <RoomCard />
        </div>
      </div>

      {/* Right Portion - Desktop Map */}
      <div
        className={
          "hero-right-portion md:flex  w-full md:w-[70%]  order-1 md:order-2 fixed md:relative  md:-mt-2 top-0  z-20 md:z-0 "
        }
      >
        <Map />
      </div>
    </section>
  );
}

export default Hero;
