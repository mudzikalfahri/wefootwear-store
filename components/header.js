import React from "react";

function Header() {
  return (
    <nav className="w-full mx-auto fixed bg-cusgray z-30 py-2 px-2 md:px-0">
      <div className=" navtop max-w-6xl mx-auto flex justify-between place-items-center py-1.5">
        <div className="burger flex items-center">
          <svg
            className="w-7 h-7 text-cusblack"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-md mr-2 font-semibold ml-3 text-cusblack">
            Shop
          </h3>
        </div>
        <div className="profile flex items-center place-items-center">
          <div className="w-8 flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
            <svg
              className="w-6 h-6 text-cusblack m-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <div className="w-8 flex items-center h-8 mr-2 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
            <svg
              className="w-6 m-auto h-6 text-cusblack"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="w-8 h-8">
            <img
              className="object-contain rounded-md"
              src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="navbot overflow-x-auto max-w-6xl mx-auto flex place-items-center py-2">
        <div className="category flex place-items-center">
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
        <div className="flex ml-40 justify-between pr-4 place-items-center flex-grow pl-2 h-full w-auto rounded-3xl overflow-hidden bg-white">
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
      </div> */}
    </nav>
  );
}

export default Header;
