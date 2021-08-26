import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen relative bg-cusgray pb-10 flex justify-center place-items-center">
      <div className="p-5 w-1/3 bg-white flex flex-col place-items-center shadow-lg rounded-xl">
        <img
          className="w-20"
          src="https://i.ibb.co/gvgWg23/modern-sports-shoes-logo-vector-illustration-213560119-Convert-Image.jpg"
          alt=""
        />
        <h1 className="text-center text-xl font-bold text-cusblack leading-6 my-5">
          YOUR ACCOUNT FOR
          <br />
          EVERYTHING
        </h1>
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
          By logging in, you agree to shop's{" "}
          <span className="underline">Privacy Policy</span> and{" "}
          <span className="underline">Terms of Use</span>.
        </p>
        <button className="bg-cusblack rounded-sm w-full text-white py-2 mt-3">
          SIGN IN
        </button>
        <div className="text-xs text-gray-400 mt-5">
          Not a member?{" "}
          <Link href="/register">
            <a className="underline">Join Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
