"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick"; // Use the default export as Slider
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the type for the slider ref
import { Settings } from "react-slick";

interface SliderProps {
  images: { main: string; gallery: string[] };
  currentImageIndex: number | undefined;
  state: boolean;
}

export default function ImageSlider({
  images,
  currentImageIndex,
  state,
}: SliderProps) {
  const imageCollection = [images.main, ...images.gallery];
  const [isImageCardOpen, setImageCardStatus] = useState<boolean>(state);
  const sliderRef = useRef<Slider | null>(null); // Use the Slider type directly

  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 0, // Set speed to 0 for instant transition
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear", // Set cssEase to linear
  };

  // Update slider state when props change
  useEffect(() => {
    setImageCardStatus(state);
    if (sliderRef.current && currentImageIndex !== undefined) {
      sliderRef.current.slickGoTo(currentImageIndex); // Navigate to the specific slide
    }
  }, [state, currentImageIndex]);

  return (
    <div
      className={`image-pop-up w-full h-full top-0 left-0 bottom-0 right-0 z-0 md:z-50 ${isImageCardOpen ? "absolute" : "hidden"}`}
    >
      <span
        className="material-symbols-outlined absolute right-48 top-14 bg-white bg-opacity-100 cursor-pointer"
        onClick={() => setImageCardStatus(false)}
      >
        close
      </span>
      <div className="image-card center space-x-10 text-white h-full bg-black bg-opacity-85">
        <Slider
          {...settings}
          ref={sliderRef} // Attach the ref to the slider
          className="h-[70vh] w-[70vh] bg-black bg-opacity-100"
        >
          {imageCollection.map((image, index) => (
            <div
              key={index}
              className="relative h-[70vh] text-white cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
        <div className="Reviews h-[60vh] w-[40vh] bg-purple-700 flex items-center justify-center p-4 text-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold">Reviews</h1>
        </div>
      </div>
    </div>
  );
}
