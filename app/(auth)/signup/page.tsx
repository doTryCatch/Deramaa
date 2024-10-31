"use client";
import React, { useState } from "react";
import DeramaaLogo from "@/public/Deramaa.svg";
import Link from "next/link";

type Errors = {
  name?: string;
  emailOrPhone?: string;
  password?: string;
  confirmPassword?: string;
};

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [emailOrPhone, setEmailOrPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const validateEmailOrPhone = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,}$/;
    return emailRegex.test(input) || phoneRegex.test(input);
  };

  const handleRegister = () => {
    const currentErrors: Errors = {};

    if (!name) currentErrors.name = "Name is required.";
    if (!emailOrPhone || !validateEmailOrPhone(emailOrPhone))
      currentErrors.emailOrPhone = "Enter a valid phone number or email.";
    if (!password) currentErrors.password = "Password is required.";
    if (password !== confirmPassword)
      currentErrors.confirmPassword = "Passwords do not match.";

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      console.log("Form submitted:", { name, emailOrPhone, password });
    }
  };

  return (
    <div className="register-phase-1 m-6 w-[100%] center">
      {showPopup && (
        <div className=" alert-box fixed top-[12vh] right-10  border bg-white z-50 rounded-lg  shadow-md flex items-center px-6 py-3 space-x-4">
          <div className="parent-circle w-7 h-7 center rounded-full bg-red-700">
            <div className="child-circle w-4 h-4 rounded-full bg-white center">
              <strong className="text-[10px] ">!</strong>
            </div>
          </div>

          <span className="text-red-700 font-bold text-[14px]">
            {errors.name ||
              errors.emailOrPhone ||
              errors.password ||
              errors.confirmPassword}
          </span>
        </div>
      )}

      <div className="container">
        <div className="heading-container flex center">
          <h1 className="mt-4 flex space-x-2">
            <p className="join mt-1 text-[38px]">Join</p>
            <DeramaaLogo />
          </h1>
          <h1 className="deramaa mt-8 ml-3">Deramaa</h1>
        </div>
        <div className="slogan center mt-2">
          <h1>Get Started Now</h1>
        </div>
        <h1 className="my-2 center text-[24px]">Register</h1>

        <div className="input-container space-y-4">
          <div className="center">
            <fieldset className="border border-solid px-4 rounded-md h-[9vh] w-[70%]">
              <legend>Name</legend>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="center">
            <fieldset className="border border-solid  px-4 rounded-md h-[9vh] w-[70%]">
              <legend>Phone No. / Email</legend>
              <input
                type="text"
                placeholder="Enter your phone or email"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="center">
            <fieldset className="border border-solid  px-4 rounded-md h-[9vh] w-[70%]">
              <legend>Password</legend>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="center">
            <fieldset className="border border-solid  px-4 rounded-md h-[9vh] w-[70%]">
              <legend>Re-enter Password</legend>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-[90%] w-full border-none outline-none"
              />
            </fieldset>
          </div>

          <div className="button center">
            <button
              onClick={handleRegister}
              className="w-[70%] bg-blue-900 p-3 rounded-md text-white"
            >
              Register
            </button>
          </div>

          <span className="center">
            Already have an account?
            <Link href="/signin" className="ml-1 underline text-blue-500">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
