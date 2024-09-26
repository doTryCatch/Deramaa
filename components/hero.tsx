import React from "react";
import Map from "./map";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomCard from "./roomCard";
import location from "@/app/json-data/locations.json";
function Hero() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    draggable: true,
    adaptiveHeight: true, // Adjusts height to fit the content
  };
  return (
    <section className="hero m-2 flex gap-6">
      <div className="hero-left-portion w-[30%]">
        <div className="locations  ">
          <Slider {...settings} className="flex h-full  bg-transparent m-2">
            {location.locations.map((location) => (
              <div
                key={location.id}
                className=" h-8 location px-4  cursor-pointer  rounded-3xl  bg-white box-shadow-2 "
              >
                <span className="center w-full h-full"> {location.name}</span>
              </div>
            ))}
          </Slider>
        </div>
        <div className="rooms-blogs">
          <RoomCard />
        </div>
      </div>
      <div className="hero-right-portion w-[70%] my-8">
        <Map />
      </div>
    </section>
  );
}

export default Hero;
