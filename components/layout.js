import React, { useState } from "react";
import Header from "./header";
import ShopCarousel from "./shopcarousel";
import SideCategory from "./sidecategory";
import TopCategory from "./topcategory";

function Layout({ children, categories, types }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-cusgray">
      <Header />
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-white fixed z-30 drop-shadow-2xl lg:hidden flex justify-center place-items-center bottom-0 left-0 m-5"
      >
        <svg
          className="w-6 text-cusblack h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>
      <div className="max-w-6xl mx-auto pt-14 md:px-0">
        <TopCategory categories={categories} />
        <div className="grid grid-cols-4 gap-x-6">
          <div
            onClick={() => setOpen(!open)}
            className={`${
              open ? `fixed` : `hidden`
            } lg:static lg:inline bg-gray-400 lg:bg-cusgray h-screen bg-opacity-30 z-30 flex w-full justify-center place-items-center top-0 lg:p-4`}
          >
            <SideCategory typesData={types} />
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-3 flex flex-col py-4 mx-2 md:mx-0">
            <ShopCarousel />
            <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 p-5">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
