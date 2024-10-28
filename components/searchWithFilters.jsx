import React, { useState } from "react";
import SearchIcon from "@/public/icon/search.png";
import Image from "next/image";
import mapLocationData from "@/app/json-data/mapLocation.json";
import { useSearchContext } from "@/app/context/searchLocation";
import Filter from "./filter";
function SearchAndFilter() {
  const { setSearchLocation } = useSearchContext();
  const [searchedValue, setSearchedValue] = useState("kathmandu");

  // navigate the location on seached

  // handle serach input
  const handleSearch = () => {
    const data = mapLocationData.locations?.filter(
      (elem) => elem.name == searchedValue
    );

    setSearchLocation(data[0]);
  };
  // filter the content on selected filter parameter
  // const filter=()=>{
  //logic for data fetching according to filter component
  // }
  //handle filter icon click event

  return (
    <div className="search-bar sticky top-[10vh] md:top-0  md:flex justify-center items-center md:justify-between z-40   mx-2 md:my-6 my-4 ">
      <div className="searchBar center box-shadow h-12 md:w-[30%]   rounded-3xl bg-white">
        <input
          type="text"
          placeholder="Enter address, city, zip code"
          className="input-field w-[80%] h-[70%] outline-none"
          value={searchedValue}
          onChange={(e) => {
            setSearchedValue(e.target.value);
          }}
        />
        <div className="search-icon rounded-full bg-blue-950 center h-8 w-8">
          <Image
            src={SearchIcon}
            alt="search-icon"
            width={30}
            height={30}
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="filter md:block hidden">
        <Filter />
      </div>
    </div>
  );
}

export default SearchAndFilter;
