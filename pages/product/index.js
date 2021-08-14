import React from "react";
import { useRouter } from "next/dist/client/router";
import Header from "../../components/header";

function Product() {
  const { asPath } = useRouter();
  const sizes = [39, 40, 41, 42];
  return (
    <div className="bg-cusgray min-h-screen">
      <Header />
      <div className="max-w-3xl mx-auto h-screen pt-16">
        <div className="flex justify-between place-items-center py-4 px-1 mb-4">
          <div className="w-9 h-9 shadow-lg bg-white text-cusblack hover:bg-cusblack hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
            <svg
              className="w-4 h-4 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <h4 className="text-cusblack text-md">Detailed Product</h4>
          <div className="w-8"></div>
        </div>
        <div className="w-full bg-white rounded-2xl shadow-lg py-8 px-10 flex">
          <div className="photo w-1/3">
            <img
              className="w-full h-auto object-contain rounded-2xl"
              src="https://i.ibb.co/5vBY1FM/Superstar-Shoes-Black-EG4959-01-standard.jpg"
              alt=""
            />
          </div>
          <div className="detail ml-6 py-2">
            <p className="flex place-items-center text-sm text-gray-400">
              Shoes
              <span className="mx-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Adidas
            </p>
            <h1 className="text-3xl text-cusblack font-medium my-3">
              Adidas Superstar 20s
            </h1>
            <p className="text-sm text-gray-400">Black / White</p>
            <p className="my-3 font-semibold text-lg text-cusblack">
              Rp 1.200.000
            </p>
            <div className="sizes text-sm text-gray-400">
              <p className="mb-2">Select size</p>
              <div className="flex">
                {sizes.map((size, idx) => (
                  <div
                    key={idx}
                    className="border mr-2 duration-200 border-cusblack text-cusblack flex place-items-center justify-center rounded-full w-12 h-12 cursor-pointer hover:bg-cusblack hover:text-white"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
