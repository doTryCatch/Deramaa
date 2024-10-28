"use client";

import React, { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";

function LoginPage() {
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleLoginMethodChange = (method: string) => {
    setLoginMethod(method);
    setEmail("");
    setPassword("");
    setPhone("");
    setOtp("");
    setOtpSent(false);
  };

  const handleSendOtp = () => {
    if (phone) {
      setOtpSent(true);
      console.log("Sending OTP to", phone);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginMethod === "email") {
      console.log("Logging in with Email:", email, password);
    } else if (loginMethod === "phone") {
      console.log("Logging in with Phone:", phone, otp);
    }
    // Uncomment this code when using the actual API
    /*
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      console.log("Login successful");
      // route.push("/"); // Use the router to navigate
    } else {
      alert("Invalid credentials");
    }
    */
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Logo and Slogan */}
      <div className="w-full md:w-1/2 bg-blue-500 flex flex-col justify-center items-center p-8 text-white">
        <h1 className="text-5xl font-bold">Your Domain</h1>
        <p className="mt-4 text-2xl">
          Welcome to our platform. Login to continue!
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center">Login</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => handleLoginMethodChange("email")}
              className={`px-4 py-2 rounded-lg ${
                loginMethod === "email"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Email
            </button>
            <button
              onClick={() => handleLoginMethodChange("phone")}
              className={`px-4 py-2 rounded-lg ${
                loginMethod === "phone"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Phone
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {loginMethod === "email" ? (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                {otpSent && (
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                    required
                  />
                )}
                {!otpSent && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Send OTP
                  </button>
                )}
              </>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
            >
              {loginMethod === "email" ? "Login with Email" : "Login with OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
