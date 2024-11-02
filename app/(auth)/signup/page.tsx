"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DeramaaLogo from "@/public/Deramaa.svg";
import Link from "next/link";

const Registration: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>("");

  const [errors, setErrors] = useState<{
    identifier?: string;
    password?: string;
  }>({});
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegistration = (): void => {
    const currentErrors: { identifier?: string; password?: string } = {};

    if (!identifier) {
      currentErrors.identifier = "This field cannot be empty.";
    } else if (/^\d+$/.test(identifier)) {
      if (identifier.length != 10) {
        currentErrors.identifier =
          "Phone number should be at least 10 digits !";
      }
    } else if (!validateEmail(identifier)) {
      currentErrors.identifier = "Please enter a valid emai !";
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      console.log("Form submitted:", { identifier });
      router.push("/signup/phase1"); // Navigate to signin/phase1
    }
  };

  return (
    <div className="signup m-6 w-[100%] center">
      {showPopup && (
        <div className="alert-box fixed top-24 right-10 border bg-white z-50 rounded-lg shadow-md flex items-center px-6 py-3 space-x-4">
          <div className="parent-circle w-7 h-7 center rounded-full bg-red-700">
            <div className="child-circle w-4 h-4 rounded-full bg-white center">
              <strong className="text-[10px]">!</strong>
            </div>
          </div>
          <span className="text-red-700 font-bold text-[14px]">
            {errors.identifier || errors.password}
          </span>
        </div>
      )}

      <div className="container mr-[85px]">
        <div className="heading-container flex center">
          <h1 className="mt-4 flex space-x-2">
            <p className="join mt-1 text-[38px]">Join</p>
            <DeramaaLogo />
          </h1>
          <h1 className="deramaa mt-8 ml-3  ">Deramaa</h1>
        </div>
        <div className="center mt-2 mb-6">
          <h1>Get Started Now</h1>
        </div>
        <span className="slogan my-2 center text-[24px] ">
          Enter Credentials{" "}
        </span>

        <div className="input-container space-y-4">
          <div className="center">
            <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[70%]">
              <legend>Email or Phone</legend>
              <input
                type="text"
                placeholder="Enter your email or phone number"
                value={identifier}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIdentifier(e.target.value)
                }
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="button center">
            <button
              onClick={handleRegistration}
              className="w-[70%] bg-blue-900 p-3 rounded-md text-white"
            >
              Request OTP
            </button>
          </div>
        </div>

        <span className="center mt-4">
          Already have an account?
          <Link href="/signin" className="ml-1 underline text-blue-500">
            SignIn
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;
