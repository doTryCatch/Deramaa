import React from "react";

function Navbar() {
  return (
    <section className="navbar-container bg-white">
      <nav className="navbar flex items-center text-black justify-between">
        <div className="navbar-logo flex justify-center items-center flex-grow h-[10vh] w-[20rem]  p-3">
          <img src="next.svg" alt="" style={{ width: "100%", height: "70%" }} />
        </div>
        <div className="flex-grow">
          <ul className="navbar-menu flex  space-x-8 ">
            <li className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
              Find Rentals
            </li>
            <li className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
              Property Deals
            </li>
            <li className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
              Become Agent
            </li>
            <li className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
              About Us
            </li>
          </ul>
        </div>

        <div className="navbar-buttons flex  justify-end flex-grow  space-x-6 mx-4 ">
          <button className="navbar-post-btn  text-black  border-[#00B7CB] border-solid border-2 hover:bg-[#00B7CB] hover:text-blue-950 px-6 py-1 flex-row-reverse rounded-full ">
            Post Demand
          </button>
          <button className="navbar-signin-btn bg-blue-900 hover:bg-white hover:text-blue-950 border-2 border-solid border-blue-950 text-white px-8 py-1 flex-row-reverse rounded-full ">
            Sign In
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
