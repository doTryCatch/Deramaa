import React from "react";
import DeramaaLogo from "@/public/Deramaa.svg";
import Link from "next/link";
function EnterNumber() {
  return (
    <div className="register-phase-1 m-6 w-[100%]  center ">
      <div className="container ">
        <div className="heading-container flex  center">
          <h1 className=" mt-4 flex space-x-2 ">
            <p className=" join  mt-1 text-[38px]"> Join </p>
            <DeramaaLogo />
          </h1>

          <h1 className="deramaa mt-8 ml-3">Deramaa</h1>
        </div>
        <div className="slogan center ">
          <h1>Get Started Now</h1>
        </div>
        <h1 className="my-2 center">Login</h1>
        <div className="input-container space-y-4 ">
          <div className="center">
            <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[70%] ">
              <legend>Phone No. / Email</legend>
              <input
                type="text"
                placeholder="Input "
                className="h-[90%] w-full border-none outline-none "
              />
            </fieldset>{" "}
          </div>
          <div className="button center">
            <button className="w-[70%]   bg-blue-900 p-3 rounded-md text-white">
              Request OTP
            </button>
          </div>
          <span className="center">
            Don't Have an Account?
            <Link href="/signup" className=" ml-1 underline text-blue-500 ">
              signup
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default EnterNumber;
