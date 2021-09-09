import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Header from "../components/header";
import Head from "next/head";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../slices/basketSlice";

function Success() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteFromBasket());
  }, []);
  return (
    <>
      <Head>
        <title>Payment Success</title>
      </Head>
      <div className="w-full min-h-screen bg-cusgray ">
        <Header />
        <div className="flex min-h-screen place-items-center justify-center">
          <div className="max-w-3xl mx-auto pb-10 w-10/12 md:w-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl overflow-hidden bg-white shadow-lg p-5 flex place-items-center justify-center"
            >
              <div className="flex flex-col place-items-center text-center text-cusblack">
                <svg
                  className="w-28 h-28 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <h1 className="my-2 text-2xl font font-semibold">
                  Thanks for your order
                </h1>
                <p className="text-sm my-2 md:w-2/3 leading-relaxed">
                  Your order is being processed by our delivery team and you
                  should receive a confirmation from us shortly. Click the
                  button below to see your orders
                </p>
                <button
                  onClick={() => Router.push("/orders")}
                  className="py-2 px-4 text-xs hover:bg-white hover:text-cusblack duration-200 hover:border-cusblack border rounded-lg my-2 bg-cusblack text-white"
                >
                  See My Orders
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
