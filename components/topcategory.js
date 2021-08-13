import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function TopCategory() {
  const { asPath } = useRouter();
  useEffect(() => {
    setIsActive(asPath);
  }, [asPath]);

  const categories = [
    { name: "All items", slug: "/shop" },
    { name: "Nike product", slug: "/shop/nike-product" },
    { name: "Adidas", slug: "/shop/adidas" },
    { name: "Puma", slug: "/shop/puma" },
    { name: "Best seller", slug: "/shop/best-seller" },
    { name: "New releases", slug: "/shop/new-releases" },
  ];

  const [isActive, setIsActive] = useState("/shop");
  return (
    <div className="navbot max-w-6xl mx-auto md:flex place-items-center bg-cusgray z-30 w-full">
      <div className="category overflow-x-auto flex overflow-y-visible place-items-center py-2">
        {categories.map((cat, idx) => (
          <Link key={cat.slug} href={`http://localhost:3000${cat.slug}`}>
            <button
              onClick={() => {
                setIsActive(cat.name);
              }}
              className={`${
                isActive === cat.slug
                  ? `bg-cusblack text-white  shadow-lg `
                  : `bg-white text-cusblack`
              } py-2.5 px-6 rounded-3xl text-xs mr-3 duration-200`}
            >
              {cat.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex md:ml-auto mt-4 md:mt-0 justify-between pr-4 place-items-center flex-grow pl-2 h-full rounded-3xl overflow-hidden bg-white">
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
