import React, { useState } from "react";
import filters from "@/app/json-data/filters.json";
import SearchIcon from "@/public/icon/search.png";
import Image from "next/image";
import mapLocationData from "@/app/json-data/mapLocation.json";

import { useSearchContext } from "@/app/context/searchLocation";

function SearchAndFilter() {
  const [isFilterClicked, setFilterClicked] = useState(false);
  const { setSearchLocation } = useSearchContext();
  const [searchedValue, setSearchedValue] = useState("kathmandu");
  const [filterVal, setFilterVal] = useState({
    SortBy: "",
    Type: "",
    Nearby: "",
    Price: "",
    Room: "",
  });
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
  const handleFilter = () => {
    // console.log(isFilterClicked);
    setFilterClicked(isFilterClicked ? false : true);
  };
  //handle filter options clicked
  const handleInput = (data) => {
    filterVal[data.key] = data.value;
    setFilterVal(filterVal);
    // console.log(filterVal);
  };
  return (
    <div className="search-bar md:flex justify-center items-center  mx-2 md:my-6 my-4 md:space-x-10">
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
      <div className="filter-icon flex justify-end md:hidden ">
        <Image
          src={"https://cdn-icons-png.flaticon.com/128/9702/9702724.png"}
          alt="filter"
          width={20}
          height={20}
          onClick={() => {
            handleFilter();
          }}
          className="mr-4 py-2"
        />
      </div>
      <div
        className={
          "filter-container md:flex md:space-x-4  md:w-[70%] " +
          (isFilterClicked ? "grid grid-cols-2 gap-4" : "hidden")
        }
      >
        {filters.Items.map((filter) => (
          <div
            key={filter.id}
            className={`${filter.id}-filter filters md:flex md:flex-grow items-center md:h-10 px-4 md:rounded-3xl md:bg-white text-[15px] w-auto`}
          >
            <label className="filter-label">{filter.label}:</label>
            <select className="filter-dropdown md:flex border-none outline-none w-auto hidden ">
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
            <div
              className={
                "options-container ml-5 m-2 " +
                (isFilterClicked ? "block" : "hidden")
              }
            >
              {filter.options.map((option, id) => (
                <div className="input" key={id}>
                  {/* <span class="checkmark"></span> */}
                  <input
                    type="radio"
                    name={filter.label}
                    value={option.value}
                    onClick={(e) =>
                      handleInput({ value: e.target.value, key: e.target.name })
                    }
                  />

                  {option.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchAndFilter;
