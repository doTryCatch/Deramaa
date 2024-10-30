"use client";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Location from "@/app/json-data/locations.json";
import { useSearchContext } from "@/app/context/searchLocation";
export default function Slider(props: { slide_number: number }) {
  const { setSearchLocation } = useSearchContext();
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
    slidesToShow: props.slide_number,
    slidesToScroll: 1,
    draggable: true,
    adaptiveHeight: true,
  };
  return (
    <div className="locations md:mx-0 mx-4  ">
      <Sliders {...settings} className="flex h-full bg-transparent ">
        {Location.locations.map((loc, key) => (
          <div
            key={key}
            className="location h-8 px-4  cursor-pointer rounded-3xl bg-white shadow-md"
            defaultValue={loc.name}
            onClick={() => handleFilter(loc.name)}
          >
            <span className="center h-full w-full  ">{loc.name}</span>
          </div>
        ))}
      </Sliders>
    </div>
  );
}
