import React from "react";

function TopCategory() {
  return (
    <div className="navbot max-w-6xl mx-auto md:flex place-items-center py-2 bg-cusgray z-30 w-full">
      <div className="category overflow-x-auto flex place-items-center">
        <div className="py-2.5 px-6 rounded-3xl bg-cusblack text-xs text-white mr-3 shadow-xl">
          All Items
        </div>
        <div className="py-2.5 px-6 rounded-3xl bg-white text-gray-500 text-xs mr-3">
          Nike product
        </div>
        <div className="py-2.5 px-6 rounded-3xl bg-white text-gray-500 text-xs mr-3">
          Adidas
        </div>
        <div className="py-2.5 px-6 rounded-3xl bg-white text-gray-500 text-xs mr-3">
          Puma
        </div>
        <div className="py-2.5 px-6 rounded-3xl bg-white text-gray-500 text-xs mr-3">
          Best seller
        </div>
        <div className="py-2.5 px-6 rounded-3xl bg-white text-gray-500 text-xs mr-3">
          New releases
        </div>
      </div>
      <div className="flex md:ml-40 mt-4 md:mt-0 justify-between pr-4 place-items-center flex-grow pl-2 h-full w-auto rounded-3xl overflow-hidden bg-white">
        <input
          className="text-xs p-2.5 focus:outline-none"
          type="text"
          placeholder="Search product"
        />
        <svg
          className="w-4 h-4 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopCategory;
