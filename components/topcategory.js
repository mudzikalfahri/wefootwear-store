import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function TopCategory({ categories }) {
  const { asPath } = useRouter();
  useEffect(() => {
    setIsActive(asPath);
  }, [asPath]);

  const [isActive, setIsActive] = useState("/shop");
  return (
    <div className="navbot bg-cusgray z-30 w-full">
      <div className=" mx-auto md:flex place-items-center max-w-6xl">
        <div className="category overflow-x-auto flex flex-wrap place-items-center py-2">
          <Link key="all" href={`/shop`}>
            <button
              className={`${
                isActive == `/shop`
                  ? `bg-cusblack text-white shadow-lg `
                  : `bg-white text-cusblack`
              } py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`}
            >
              All items
            </button>
          </Link>
          {categories.map((cat, idx) => (
            <Link key={cat.slug} href={`/shop/${cat.slug}`}>
              <button
                className={`${
                  isActive == `/shop/${cat.slug}`
                    ? `bg-cusblack text-white shadow-lg `
                    : `bg-white text-cusblack`
                } py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`}
              >
                {cat.name}
              </button>
            </Link>
          ))}
        </div>
        <div className="flex md:ml-auto justify-between pr-4 place-items-center flex-grow pl-2 h-full rounded-3xl overflow-hidden bg-white">
          <input
            className="text-xs p-2.5 focus:outline-none w-full"
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
    </div>
  );
}

export default TopCategory;
