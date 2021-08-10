import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/3 z-20 flex flex-col place-items-center w-full">
        <h1 className="text-5xl font-semibold text-white">SneakersKuy</h1>
        <Link href="/shop">
          <p className="flex place-items-center text-white underline mt-8 text-sm font-normal cursor-pointer">
            Shop Now
            <span>
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </Link>
      </div>
      <div className="w-full h-screen bg-gray-500 bg-opacity-30 absolute top-0 z-10 pointer-events-none"></div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        transitionTime={500}
        interval={4000}
      >
        <div>
          <img
            className="h-screen object-cover w-full"
            loading="lazy"
            src="https://i.ibb.co/XYTqhK5/Panduan-Sneakers-Pria-Terfavorit-1-1-1536x768.jpg"
          />
        </div>
        <div>
          <img
            className="h-screen object-cover w-full"
            loading="lazy"
            src="https://i.ibb.co/7pYdrb6/whitesneakers-2048px-0427.jpg"
          />
        </div>
        <div>
          <img
            className="h-screen object-cover w-full"
            loading="lazy"
            src="https://i.ibb.co/x13KLK0/compass-gazelle-matcha-sneaker.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}
