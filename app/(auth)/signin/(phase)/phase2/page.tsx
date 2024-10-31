"use client";
import React, { useRef } from "react";
import DeramaaLogo from "@/public/Deramaa.svg";

function OTP() {
  // Array of refs for each input
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      // Move focus to the next input
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && e.currentTarget.value === "") {
      // Move focus to the previous input on backspace
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Prevent any non-numeric input
    }
  };

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
        <h1 className="my-6 center text-[24px]">
          <strong>Enter OTP</strong>
        </h1>
        <div className="input-container space-y-4 ">
          <div className="center space-x-4 my-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="border border-solid p-1 border-black rounded-md"
              >
                <input
                  type="text"
                  max={1}
                  className="h-12 w-12 text-center outline-none bg-transparent"
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onKeyPress={handleKeyPress}
                  inputMode="numeric"
                />
              </div>
            ))}
          </div>
          <div className="button center">
            <button className="w-[70%]   bg-blue-900 p-3 rounded-md text-white">
              Continue
            </button>
          </div>
          <span className="center">
            Don't Received OTP ? Resend OTP in
            <p className="text-blue-400 ml-2">0.56 sec</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OTP;
