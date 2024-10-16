import React from "react";
import room from "@/app/json-data/rooms.json";
import Link from "next/link";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const RoomCard = () => {
  return (
    <div className="rooms-container md:p-2 space-y-8 ">
      {room.rooms.map((room, key) => (
        <Link href={"/rooms/" + key}>
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

              <div className="text-xs text-gray-600">
                <Box
                  sx={{ "& > legend": { mt: 2 } }}
                  className="flex justify-between "
                >
                  <div className="rating center text-lg space-x-2">
                    <span>{room.card.ratings.averageRating}</span>
                    <Rating
                      name="read-only"
                      value={room.card.ratings.averageRating}
                      readOnly
                      precision={0.2}
                    />
                  </div>
                  <span className="flex justify-between">
                    ({room.card.ratings.totalReviews} reviews)
                  </span>
                </Box>

                <p>Amenities: {room.details.amenities.join(", ")}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RoomCard;
