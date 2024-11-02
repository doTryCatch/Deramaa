"use client";

import React, { useState, useRef, useEffect } from "react";
import DeramaaLogo from "@/public/Deramaa.svg";
import { useRouter } from "next/navigation";

export default function OTP() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [errors, setErrors] = useState<{ OTP?: string }>({});
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(60); // Timer in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (index === otp.length - 1 && value === "") {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length < 6) {
      setErrors({ OTP: "Please enter a complete OTP." });
      setShowPopup(true);

      // Hide the popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return;
    }
    // submit opt logic will be here
    console.log("Submitted OTP:", otpString);
    router.push("/signup/phase2");
  };

  const handleResendOtp = () => {
    setResendTimer(60);
    setOtp(Array(6).fill("")); // Clear OTP inputs
    inputRefs.current[0]?.focus(); // Focus on the first input
    setErrors({});
    setShowPopup(false);
  };

  return (
    <div className="signup m-6 w-[100%] center">
      {showPopup && (
        <div className="alert-box fixed top-[12vh] right-10 border bg-white z-50 rounded-lg shadow-md flex items-center px-6 py-3 space-x-4">
          <div className="parent-circle w-7 h-7 center rounded-full bg-red-700">
            <div className="child-circle w-4 h-4 rounded-full bg-white center">
              <strong className="text-[10px]">!</strong>
            </div>
          </div>
          <span className="text-red-700 font-bold text-[14px]">
            {errors.OTP}
          </span>
        </div>
      )}

      <div className="container mr-[85px]">
        <div className="heading-container flex center">
          <h1 className="mt-4 flex space-x-2">
            <p className="join mt-1 text-[38px]">Join</p>
            <DeramaaLogo />
          </h1>
          <h1 className="deramaa mt-8 ml-3">Deramaa</h1>
        </div>
        <div className="center mt-2 mb-6">
          <h1>Get Started Now</h1>
        </div>
        <h1 className="slogan my-2 center text-[24px] ">Enter OTP</h1>
        <div className="otp-area center my-6">
          <div className="center gap-2 w-[70%]">
            {otp.map((digit, index) => (
              <div key={index} className="border border-solid border-black">
                <input
                  type="text"
                  maxLength={1}
                  className="h-14 w-14 text-center outline-none"
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onKeyPress={handleKeyPress}
                  inputMode="numeric"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="button center">
          <button
            onClick={handleSubmit}
            className="w-[70%] bg-blue-900 p-3 rounded-md text-white"
          >
            Continue
          </button>
        </div>

        <div className="center">
          Didn't Receive OTP? Resend OTP in{" "}
          {resendTimer > 0 ? (
            <span className="ml-1 underline text-blue-500">
              {resendTimer} sec
            </span>
          ) : (
            <span
              onClick={handleResendOtp}
              className="cursor-pointer text-blue-500 ml-1 underline"
            >
              Resend
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
