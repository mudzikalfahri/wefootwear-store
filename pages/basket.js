import React from "react";
import { useSelector } from "react-redux";
import BasketProduct from "../components/basketproduct";
import Header from "../components/header";
import { selectItems } from "../slices/basketSlice";

function Basket() {
  const items = useSelector(selectItems);
  return (
    <div className="w-full min-h-screen relative bg-cusgray pb-10">
      <Header />
      <div className="max-w-6xl mx-auto pt-20 px-5 border border-black">
        <div className="border border-black w-full grid grid-cols-3 gap-x-4">
          <div className="col-span-2 md:mr-5">
            <div className="">
              <div className="shadow-lg rounded-xl bg-cusblack text-white px-5 py-3">
                <h1 className="font-semibold text-xl mb-1">
                  GET FREE SHIPPING WITH MEMBER+ ON EVERY ORDER
                </h1>
                <p className="text-xs mb-1">
                  Non member receive free-shipping for purchases Rp 1,500,000 or
                  more
                </p>
              </div>
              <div className="rounded-xl bg-white px-5 pt-5 mt-5 shadow-lg">
                <p>Your Basket (2)</p>
                <div className="pt-5 pb-2">
                  {items.length > 0 ? (
                    items.map((item, idx) => (
                      <BasketProduct key={item.slug} item={item} />
                    ))
                  ) : (
                    <p>no items</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="rounded-xl bg-white shadow-lg py-6 px-5">
              <h1 className="text-cusblack font-bold text-md">SUMMARY</h1>
              <div className="px-4 py-3 text-xs font-medium flex place-items-center text-gray-400 border border-gray-200 rounded-md my-4">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                  />
                </svg>
                DO YOU HAVE PROMO CODE?
              </div>

              <div className="text-sm pt-1 font-semibold pb-2 border-b border-cusblack flex justify-between place-items-center">
                <p className="">SUBTOTAL</p>
                <p>Rp 1,200,000</p>
              </div>

              <div className="my-3 border-b border-cusblack pb-2">
                <div className="flex justify-between place-items-center text-sm mb-1">
                  <p>Adidas Superstar 20s</p>
                  <p>Rp 1,200,000</p>
                </div>
                <div className="flex justify-between place-items-center text-sm mb-1">
                  <p>Adidas Jacket Black</p>
                  <p>Rp 200,000</p>
                </div>
                <div className="flex justify-between place-items-center text-sm mb-1">
                  <p>TAX</p>
                  <p>Rp 20,000</p>
                </div>
              </div>

              <div className="flex justify-between place-items-center font-semibold">
                <p>TOTAL</p>
                <p>Rp 1,420,000</p>
              </div>

              <button className="py-2 px-3 text-white w-full mt-6 rounded-lg bg-cusblack">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
