import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { selectWishItems } from "../slices/wishlistSlice";
import MenuNav from "./menunav";
import nookies from "nookies";
import { useRouter } from "next/dist/client/router";
import { destroyCookie } from "nookies";

function Header() {
  const router = useRouter();
  const data = useSelector(selectItems);
  const [items, setItems] = useState([]);
  const dataWish = useSelector(selectWishItems);
  const [wish, setWish] = useState([]);
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    const dataCookie = nookies.get();
    try {
      setItems(data);
      setWish(dataWish);
      setCookie(JSON.parse(dataCookie.user));
    } catch (err) {
      setCookie(dataCookie.user);
    }
  }, [data, dataWish]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const signOut = () => {
    destroyCookie(null, "token");
    destroyCookie(null, "user");
    router.replace("/login");
  };
  return (
    <nav className="w-full mx-auto fixed bg-cusgray z-30 py-2 md:px-0 duration-200">
      <div className="px-2 navtop relative max-w-6xl mx-auto flex justify-between place-items-center py-1.5">
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
          <h3 className="hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack">
            wefootwear
          </h3>
        </div>
        <div className="profile flex items-center place-items-center">
          <Link href="/shop">
            <div className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </Link>
          <div
            onClick={() => router.push("/basket")}
            className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
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
            {items.length > 0 ? (
              <div
                className={`flex
                } absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`}
              >
                {items.reduce((a, item) => a + item.quantity, 0)}
              </div>
            ) : (
              ""
            )}
          </div>
          <Link href="/wishlist">
            <div className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
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
              {wish.length > 0 ? (
                <div
                  className={`flex
                absolute text-xs font-light justify-center text-white text-center w-4 h-4 bg-cusblack rounded-full bottom-0 right-0`}
                >
                  {wish.length}
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>

          {cookie && (
            <div
              onClick={() => router.push("/orders")}
              className="w-8 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
            >
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="w-8 relative flex items-center h-8 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {open && (
              <div className="p-3 bg-white absolute top-11 leading-relaxed right-0 rounded-lg shadow-lg text-xs text-cusblack">
                {cookie && (
                  <div className="bg-cusblack text-white p-3 rounded-lg">
                    <ul className="text-left w-28">
                      <li className="line-clamp-1">{cookie.username}</li>
                      <li className="line-clamp-1">{cookie.email}</li>
                    </ul>
                  </div>
                )}
                {cookie && (
                  <div
                    onClick={signOut}
                    className="hover:underline mt-2 flex place-items-center justify-end"
                  >
                    <span>
                      <svg
                        className="w-6 h-6 text-cusblack"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    Sign out
                  </div>
                )}
                {!cookie && (
                  <Link href="/login">
                    <div className="hover:underline flex place-items-center">
                      <span>
                        <svg
                          className="w-6 h-6 text-cusblack"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                      </span>{" "}
                      Sign In
                    </div>
                  </Link>
                )}
              </div>
            )}
          </button>
        </div>
      </div>

      <MenuNav handleOpen={handleOpen} isOpen={isOpen} />
    </nav>
  );
}

export default Header;
