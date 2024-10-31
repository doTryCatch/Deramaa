// components/SignIn.tsx
import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <h1 className="text-2xl mb-8 text-white">Easy Sign Log In</h1>
      <button className="flex items-center gap-2 justify-center w-64 p-3 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
        <FaGoogle />
        Sign In with Google
      </button>
      <button className="flex gap-2 items-center justify-center w-64 p-3 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 mb-4">
        <FaFacebook />
        Sign In with Facebook
      </button>
    </div>
  );
};

export default SignIn;
