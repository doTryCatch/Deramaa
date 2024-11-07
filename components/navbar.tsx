"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DeramaaLogo from "@/public/Deramaa.svg";

function Navbar() {
  const [isNav, setNav] = useState(false);
  const pathname = usePathname(); // Hook to get the current path

  const handleNavIconClick = () => {
    setNav(!isNav);
  };

  // Close the navbar on route change
  useEffect(() => {
    setNav(false); // Close the navigation whenever the route changes
  }, [pathname]);

  return (
    <section className="navbar-container sticky top-0 z-50 bg-white">
      <div className="container">
        <nav className="navbar flex items-center text-black justify-between md:h-auto h-[8vh] w-full">
          <div className="navbar-logo center space-x-2 md:flex-grow md:h-[10vh] h-[6vh] ml-6 md:ml-0 md:w-[20rem] w-auto p-3">
            <DeramaaLogo />
            <span className="deramaa mt-3">Deramaa</span>
          </div>
          <div className="md:flex-grow mr-6 md:mr-0 mt-3 md:mt-0">
            <div className="navToggle md:hidden">
              {isNav ? (
                <span
                  className="material-symbols-outlined text-[34px]"
                  onClick={handleNavIconClick}
                >
                  close
                </span>
              ) : (
                <span
                  className="material-symbols-outlined text-[34px]"
                  onClick={handleNavIconClick}
                >
                  menu
                </span>
              )}
            </div>
            <ul className="navbar-menu md:flex space-x-8 hidden">
              <Link href="/">
                <span className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Find Rentals
                </span>
              </Link>
              <Link href="/propertyDetails">
                <span className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Property Deals
                </span>
              </Link>
              <Link href="/agents">
                <span className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Become Agent
                </span>
              </Link>
              <Link href="/about">
                <span className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  About Us
                </span>
              </Link>
            </ul>
          </div>

          <div className="navbar-buttons md:flex justify-end flex-grow space-x-6 mx-4 hidden">
            <button className="navbar-post-btn text-black border-[#00B7CB] border-solid border-2 hover:bg-[#00B7CB] hover:text-blue-950 px-6 py-1 flex-row-reverse rounded-full">
              Post Demand
            </button>
            <button className="navbar-signin-btn bg-blue-900 hover:bg-white hover:text-blue-950 border-2 border-solid border-blue-950 text-white px-8 py-1 flex-row-reverse rounded-full">
              <Link href={"/signin"}>Sign In</Link>
            </button>
          </div>
        </nav>

        {/* hamburger nav elements and their UI */}
        <div
          className={`navElementForMobile h-[90vh] bg-white absolute w-full ${
            isNav ? "block" : "hidden"
          }`}
        >
          <hr />
          <div className="flex flex-col justify-between h-full">
            <ul className="space-y-4 my-2 p-6 w-full flex-col">
              <Link href="/">
                <p className="ham-navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Find Rentals
                </p>
              </Link>
              <Link href="/propertyDetails">
                <p className="ham-navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Property Deals
                </p>
              </Link>
              <Link href="/agents">
                <p className="ham-navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  Become Agent
                </p>
              </Link>
              <Link href="/about">
                <p className="ham-navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75">
                  About Us
                </p>
              </Link>
            </ul>
            <div className="ham-navbar-buttons space-y-6 flex flex-col mx-6 mb-14">
              <button
                className="navbar-post-btn text-black border-[#00B7CB] border-solid border-2 hover:bg-[#00B7CB] hover:text-blue-950 px-6 py-1 rounded-lg"
                onClick={handleNavIconClick}
              >
                Post Demand
              </button>
              <button
                className="ham-navbar-signin-btn bg-blue-900 hover:bg-white hover:text-blue-950 border-2 border-solid border-blue-950 text-white px-6 py-1 rounded-lg"
                onClick={handleNavIconClick}
              >
                <Link href={"/signin"}>Sign In</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
