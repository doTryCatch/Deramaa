import React from "react";
import room from "@/app/json-data/rooms.json";
import Link from "next/link";
import Area from "@/public/area.svg";
import Bed from "@/public/bedRoom.svg";
import Attached from "@/public/Attached.svg";

import Room from "@/public/Room.svg";
const RoomCard = () => {
  return (
    <div className="rooms-container flex flex-col md:p-2 space-y-8  ">
      {room.rooms.map((room, key) => (
        <Link href={"/rooms/" + key} key={key}>
          <div
            className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden  w-full cursor-pointer"
            key={key}
          >
            <div className="relative h-48">
              <img
                src={room.card.image}
                alt={room.card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white bg-opacity-80 p-2 rounded-md font-bold">
                ${room.card.price} {room.card.currency}
              </div>
            </div>
            <div className="p-4 ">
              <div className="text-sm mb-2">{room.details.description}</div>
              <div className="mb-2 flex space-x-3 ">
                <p className="font-bold">{room.details.location.zipCode}</p>
                <p className="text-gray-500 text-xs center">
                  {room.details.location.city}
                </p>
              </div>

              <div className="text-sm text-gray-600 ">
                <div className="flex items-center justify-between mt-4  text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Area />
                    <span>{50} m²</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Room />
                    <span>{"Room"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed />
                    <span>{2}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Attached />
                    <span>{"2-Attached"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomCard;
