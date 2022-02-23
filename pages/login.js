import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import nookies from "nookies";
import Head from "next/head";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);

  if (cookies.token) {
    return {
      redirect: {
        destination: "/shop",
      },
    };
  }

  return {
    props: {},
  };
}

function Login() {
  const [field, setField] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const doLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = await fetch(process.env.NEXT_PUBLIC_APIURL + "/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    const res = await req.json();
    if (res.statusCode > 299) {
      setError(true);
    }
    if (res.jwt) {
      nookies.set(null, "token", JSON.stringify(res.jwt));
      nookies.set(null, "user", JSON.stringify(res.user));
      setField({});
      console.log("success");
      e.target.reset();
      router.push("/shop");
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>wefootwear | Login</title>
      </Head>
      <div className="w-full min-h-screen relative bg-cusgray pb-10 flex justify-center place-items-center">
        {loading && (
          <div className="w-full h-screen flex justify-center place-items-center absolute top-0 right-0 bg-white backdrop-blur-sm bg-opacity-20">
            <img
              src="https://i.ibb.co/8jP3GyP/Dual-Ball-1-1s-200px.gif"
              className="w-20"
              alt=""
            />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-5 max-w-md bg-white flex flex-col place-items-center shadow-lg rounded-xl mx-2"
        >
          <Link href="/shop">
            <img
              className="w-20 cursor-pointer"
              src="https://i.ibb.co/gvgWg23/modern-sports-shoes-logo-vector-illustration-213560119-Convert-Image.jpg"
              alt=""
            />
          </Link>
          <h1 className="text-center text-xl font-bold text-cusblack leading-6 my-5">
            YOUR ACCOUNT FOR
            <br />
            EVERYTHING
          </h1>
          <form onSubmit={doLogin}>
            {error && (
              <div className="text-xs text-light text-center text-red-500">
                Invalid email or password, check your input again
              </div>
            )}
            <input
              onChange={handleChange}
              type="text"
              name="identifier"
              placeholder="Email address"
              className="my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              className="my-2 border rounded-sm border-gray-300 w-full px-4 py-3 text-sm"
            />

            <p className="text-xs text-gray-400 my-2 text-center px-6">
              By logging in, you agree to shop's{" "}
              <span className="underline">Privacy Policy</span> and{" "}
              <span className="underline">Terms of Use</span>.
            </p>
            <button
              type="submit"
              className="bg-cusblack rounded-sm w-full text-white py-2 mt-3"
            >
              SIGN IN
            </button>
          </form>
          <div className="text-xs text-gray-400 mt-5">
            Not a member?{" "}
            <Link href="/register">
              <a className="underline">Join Us</a>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
