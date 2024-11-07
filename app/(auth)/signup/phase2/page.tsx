"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DeramaaLogo from "@/public/Deramaa.svg";
import Link from "next/link";

const Registration: React.FC = () => {
  const identifier: { name: string; value: number } = {
    name: "Phone",
    value: 9821164640,
  };
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const router = useRouter();

  const handleRegistration = (): void => {
    const currentErrors: {
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!password) {
      currentErrors.password = "Password cannot be empty.";
    } else if (password.length < 6) {
      currentErrors.password = "Password must be at least 6 characters long.";
    }

    if (password !== confirmPassword) {
      currentErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      console.log("Registration successful:", { identifier, password });
      // Handle successful registration, e.g., API call
      router.push("/welcome"); // Navigate to a welcome page or dashboard
    }
  };

  return (
    <div className="signup md:m-6 w-[100%] center">
      {showPopup && (
        <div className="alert-box fixed top-24 right-10 border bg-white z-50 rounded-lg shadow-md flex items-center px-6 py-3 space-x-4">
          <div className="parent-circle w-7 h-7 center rounded-full bg-red-700">
            <div className="child-circle w-4 h-4 rounded-full bg-white center">
              <strong className="text-[10px]">!</strong>
            </div>
          </div>
          <span className="text-red-700 font-bold text-[14px]">
            {errors.password || errors.confirmPassword}
          </span>
        </div>
      )}

      <div className="container md:mr-[85px]">
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
        <span className="slogan my-2 center text-[24px] font-r">
          Set Your Password
        </span>

        <div className="input-container space-y-4 my-6">
          <div className="center">
            <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[90%] md:w-[70%]">
              <legend>{identifier.name}</legend>
              <input
                type="text"
                placeholder="Email or phone number"
                value={identifier.value}
                className="h-[90%] w-full border-none outline-none"
                readOnly // Assuming you want to keep this field read-only
              />
            </fieldset>
          </div>
          <div className="center ">
            <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[90%] md:w-[70%]">
              <legend>Password</legend>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>
          <div className="center ">
            <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[90%] md:w-[70%]">
              <legend>Re-enter Password</legend>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>
          <div className="button center">
            <button
              onClick={handleRegistration}
              className=" w-[90%] md:w-[70%] bg-blue-900 p-3 rounded-md text-white"
            >
              Register
            </button>
          </div>
        </div>

        <span className="center mt-4">
          Already have an account?
          <Link href="/signin" className="ml-1 underline text-blue-500">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Registration;
