import React, { useState } from "react";
import MenuNav from "./menunav";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full mx-auto fixed bg-cusgray z-30 py-2 px-2 md:px-0">
      <div className=" navtop max-w-6xl mx-auto flex justify-between place-items-center py-1.5">
        <div className="burger flex items-center">
          <button onClick={handleOpen}>
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
          </button>
          <h3 className="text-md mr-2 font-semibold ml-3 text-cusblack">
            OrcaShoes
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

      <MenuNav handleOpen={handleOpen} isOpen={isOpen} />
    </nav>
  );
}

export default Header;
