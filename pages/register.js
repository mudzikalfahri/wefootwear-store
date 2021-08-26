import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div className="w-full min-h-screen relative bg-cusgray pb-10 flex justify-center place-items-center">
      <div className="p-5 w-1/3 bg-white flex flex-col place-items-center shadow-lg rounded-xl">
        <h1 className="text-center text-xl font-bold text-cusblack leading-6 my-5">
          BECOME A MEMBER
        </h1>
        <p className="text-sm font-medium text-gray-400 mb-4 text-center px-6">
          Create your Shop Member profile and get first access to the very best
          of products, inspiration and community.
        </p>
        <input
          type="text"
          placeholder="Username"
          className="my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"
        />
        <input
          type="text"
          placeholder="Email address"
          className="my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"
        />

        <p className="text-xs text-gray-400 my-2 text-center px-6">
          By register, you agree to shop's{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use</span>.
        </p>
        <button className="bg-cusblack rounded-sm w-full text-white py-2 mt-3">
          JOIN US
        </button>
        <div className="text-xs text-gray-400 mt-5">
          Already have?{" "}
          <Link href="/login">
            <a className="underline">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
