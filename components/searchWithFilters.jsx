import React from "react";
import filters from "@/app/json-data/filters.json";
import SearchIcon from "@/public/icon/search.png";
import Image from "next/image";
function SearchAndFilter() {
  return (
    <div className="search-bar center mx-2 my-6 space-x-10">
      <div className="searchBar center box-shadow h-12 w-[30%]   rounded-3xl bg-white">
        <input
          type="text"
          placeholder="Enter address, city, zip code"
          className="input-field w-[80%] h-[70%] outline-none"
        />
        <div className="search-icon rounded-full bg-blue-950 center h-8 w-8">
          <Image src={SearchIcon} alt="search-icon" width={30} height={30} />
        </div>
      </div>
      <div className="filter-container flex space-x-4  w-[70%]">
        {filters.Items.map((filter) => (
          <div
            key={filter.id}
            className={`${filter.id}-filter filters flex flex-grow items-center h-10 px-4 rounded-3xl bg-white text-[15px] w-auto`}
          >
            <label className="filter-label">{filter.label}:</label>
            <select className="filter-dropdown border-none outline-none w-auto ">
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchAndFilter;
