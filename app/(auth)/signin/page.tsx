"use client";
import React, { useState } from "react";
import DeramaaLogo from "@/public/Deramaa.svg";
import Link from "next/link";

type LoginMethod = "email" | "phone";

const Login: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("email");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phone?: string;
  }>({});
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = (): void => {
    const currentErrors: { email?: string; password?: string; phone?: string } =
      {};

    if (loginMethod === "email") {
      if (!email || !validateEmail(email)) {
        currentErrors.email = "Incorrect Email";
      }
      if (!password) {
        currentErrors.password = "Password cannot be empty.";
      }
    } else if (loginMethod === "phone") {
      if (phone.length < 10) {
        currentErrors.phone = "Incorrect Number";
      }
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      console.log("Form submitted:", { email, password, phone });
    }
  };

  return (
    <div className="register-phase-1 m-6 w-[100%] center">
      {showPopup && (
        <div className=" alert-box fixed top-24 right-10  border bg-white z-50 rounded-lg  shadow-md flex items-center px-6 py-3 space-x-4">
          <div className="parent-circle w-7 h-7 center rounded-full bg-red-700">
            <div className="child-circle w-4 h-4 rounded-full bg-white center">
              <strong className="text-[10px] ">!</strong>
            </div>
          </div>

          <span className="text-red-700 font-bold text-[14px]">
            {errors.email || errors.password || errors.phone}
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
        <div className="slogan center">
          <h1>Get Started Now</h1>
        </div>
        <h1 className="my-2 center">Login</h1>

        {/* Toggle between Email and Phone login */}
        <div className="toggle-login-method center space-x-4 mb-4">
          <button
            onClick={() => setLoginMethod("email")}
            className={`p-2 rounded ${loginMethod === "email" ? "bg-blue-900 text-white" : "bg-gray-200"}`}
          >
            Login with Email
          </button>
          <button
            onClick={() => setLoginMethod("phone")}
            className={`p-2 rounded ${loginMethod === "phone" ? "bg-blue-900 text-white" : "bg-gray-200"}`}
          >
            Login with Phone
          </button>
        </div>

        {/* Email Login Form */}
        {loginMethod === "email" && (
          <div className="input-container space-y-4">
            <div className="center">
              <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[70%]">
                <legend>Email</legend>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="h-[90%] w-full border-none outline-none"
                />
              </fieldset>
            </div>
            <div className="center">
              <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[70%]">
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
            <div className="button center">
              <button
                onClick={handleLogin}
                className="w-[70%] bg-blue-900 p-3 rounded-md text-white"
              >
                Sign In
              </button>
            </div>
          </div>
        )}

        {/* Phone Login Form */}
        {loginMethod === "phone" && (
          <div className="input-container space-y-4">
            <div className="center">
              <fieldset className="border border-solid border-gray-600 px-4 rounded-md h-[9vh] w-[70%]">
                <legend>Phone No.</legend>
                <div className="ml-2 text-gray-600 flex  ">
                  <span className="mt-[2px]"> +977</span>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                    className="h-[100%] w-full border-none outline-none bg-transparent ml-2 mt-1"
                  />
                </div>
              </fieldset>
            </div>
            <div className="button center">
              <button
                onClick={handleLogin}
                className="w-[70%] bg-blue-900 p-3 rounded-md text-white"
              >
                Request OTP
              </button>
            </div>
          </div>
        )}

        <span className="center mt-4">
          Don't have an account?
          <Link href="/signup" className="ml-1 underline text-blue-500">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
