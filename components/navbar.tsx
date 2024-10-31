"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DeramaaLogo from "@/public/Deramaa.svg";
function Navbar() {
  const [isNav, setNav] = useState(false);
  const handleNavIconClick = () => {
    setNav(!isNav);
    console.log(isNav);
  };

  return (
    <section className="navbar-container  sticky top-0  z-50  bg-white">
      <div className="container">
        <nav className="navbar flex items-center text-black justify-between h-auto  w-full">
          <div className="navbar-logo center space-x-2 md:flex-grow md:h-[10vh] h-[6vh] ml-6 md:ml-0 md:w-[20rem] w-auto p-3">
            <DeramaaLogo />
            <span className="deramaa mt-3">Deramaa</span>
          </div>
          <div className="md:flex-grow mr-6 md:mr-0">
            <div className="navToggle md:hidden">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
                alt="navbar-icon"
                width={20}
                height={20}
                onClick={handleNavIconClick}
              />
            </div>
            <ul className="navbar-menu md:flex space-x-8 hidden">
              <Link
                href="/"
                className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
              >
                Find Rentals
              </Link>
              <Link
                href="/propertyDetails"
                className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
              >
                Property Deals
              </Link>
              <Link
                href="/agents"
                className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
              >
                Become Agent
              </Link>
              <Link
                href="/about"
                className="navbar-item flex-row cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
              >
                About Us
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
        <div
          className={`navElementForMobile m-4 text-center w-[100%] ${isNav ? "block" : "hidden"}`}
        >
          <ul className="space-y-4 my-4 w-full flex-col ">
            <hr />
            <Link
              href="/"
              className="navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
            >
              <p>Find Rentals</p>
            </Link>
            <Link
              href="/propertyDetails"
              className="navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
            >
              <p>Property Deals</p>
            </Link>
            <Link
              href="/agents"
              className="navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
            >
              <p>Become Agent</p>
            </Link>
            <Link
              href="/about"
              className="navbar-item cursor-pointer hover:scale-110 transition-all ease-in-out duration-75"
            >
              <p>About Us</p>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
