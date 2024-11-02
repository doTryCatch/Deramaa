import React, { useState } from "react";
import Filters from "@/app/json-data/filters.json";
import Image from "next/image";
import { useSearchContext } from "@/app/context/searchLocation";
type FiltersType = {
  SortBy: string;
  Type: string;
  Nearby: string;
  Price: string;
  Room: string;
};

// Define the shape of the data event
type DataEvent = {
  key: keyof FiltersType; // Restricts keys to valid filter keys
  value: string;
};

function Filter() {
  const [isFilterClicked, setFilterClicked] = useState(false);
  const { filters, setFilters } = useSearchContext();
  if (!filters)
    setFilters({
      SortBy: "",
      Type: "",
      Nearby: "",
      Price: "",
      Room: "",
    } as FiltersType); // set default filter for the page

  const handleFilter = () => {
    setFilterClicked((prevState) => !prevState);
  };

  //handle filter options clicked
  const handleInput = (data: DataEvent) => {
    if (filters) {
      filters[data.key] = data.value; // Create a new filters object
      setFilters(filters);
    }

    console.log(filters);
  };
  return (
    <div className="filter-container ">
      <div className="filter-icon flex justify-end md:hidden absolute -mt-10 right-2 ">
        <Image
          src={"https://cdn-icons-png.flaticon.com/128/9702/9702724.png"}
          alt="filter"
          width={20}
          height={20}
          onClick={handleFilter}
          className="mr-4 py-2 "
        />
      </div>
      <div
        className={
          "filter-container md:flex  md:w-[70%]  md:space-x-6" +
          (isFilterClicked ? " grid grid-cols-2 gap-4" : " hidden")
        }
      >
        {Filters.Items.map((filter) => (
          <div
            key={filter.id}
            className={`${filter.id}-filter filters md:flex md:flex-grow items-center md:h-10 px-4 md:rounded-3xl md:bg-white text-[15px] w-auto`}
          >
            <label className="filter-label">{filter.label}:</label>
            <select
              className="filter-dropdown md:flex border-none outline-none w-auto hidden "
              name={filter.label}
              onChange={(e) =>
                handleInput({
                  value: e.target.value,
                  key: e.target.name as keyof FiltersType,
                })
              }
            >
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>

            <div
              className={
                "options-container ml-5 m-2 bg-yellow-400 " +
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
                    onChange={(e) =>
                      handleInput({
                        value: e.target.value,
                        key: e.target.name as keyof FiltersType,
                      })
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

export default Filter;
