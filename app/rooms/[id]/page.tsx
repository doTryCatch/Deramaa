// pages/room.js
import React from "react";

const RoomDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div className="   bg-gray-50 m-6 ">
      {/* Image Gallery Section */}
      {"Property id: " + params.id}
      <div className="w-full mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="lg:col-span-2 bg-gray-300 rounded-lg h-[60vh]"></div>
          <div className="grid grid-cols-2 gap-2 lg:col-span-2">
            <div className="bg-gray-300 rounded-lg h-[29vh] "></div>
            <div className="bg-gray-300 rounded-lg h-[29vh] "></div>
            <div className="bg-gray-300 rounded-lg h-[29vh] "></div>
            <div className="bg-gray-300 rounded-lg h-[29vh] "></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between">
        <div className="flex-1 lg:max-w-2xl">
          {/* Room Tags */}
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
              Room
            </span>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
              Rent
            </span>
          </div>

          {/* Room Title and Landlord */}
          <h1 className="text-2xl font-bold mb-2">
            Room for rent near Pulchowk Campus - For Students
          </h1>
          <p className="text-gray-500 mb-4 flex items-center">
            <img
              src="/path/to/landlord-profile.jpg"
              alt="Landlord profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            Posted by:{" "}
            <span className="font-medium ml-1">This Landlord Name</span>
          </p>

          {/* Overview & Facts & Features Accordion */}
          <div className="mb-6">
            <details className="mb-4 bg-white rounded-lg p-4 shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Overview
              </summary>
              <p className="mt-2 text-gray-700">
                Lorem ipsum text will be displayed here. This is an example
                text.
              </p>
            </details>
            <details className="mb-4 bg-white rounded-lg p-4 shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Facts & Features
              </summary>
              <p className="mt-2 text-gray-700">
                Text about room features will go here. This is an example.
              </p>
            </details>
          </div>

          {/* Neighborhood Tags */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Neighborhood</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Baghbazar",
                "Baneshwor",
                "Patan",
                "Lakeside",
                "Bharatpur",
                "Satdobato",
              ].map((place) => (
                <span
                  key={place}
                  className="bg-gray-200 px-4 py-1 rounded-full text-gray-700"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-96 bg-white p-6 rounded-lg shadow-lg">
          {/* Price Section */}
          <div className="text-blue-700 text-2xl font-bold mb-6 text-right">
            NRP. 6000
          </div>

          {/* Key Features Section */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Key Features</h4>
            <div className="flex items-center space-x-2 text-gray-700 mb-1">
              <span className="text-xl">📏</span>
              <span>62 m²</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mb-1">
              <span className="text-xl">🏠</span>
              <span>Room</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 mb-1">
              <span className="text-xl">🛁</span>
              <span>1 - Attached</span>
            </div>
          </div>

          {/* Contact and Book Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 border border-blue-700 text-blue-700 py-2 rounded-lg hover:bg-blue-50">
              Contact Agent
            </button>
            <button className="flex-1 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
