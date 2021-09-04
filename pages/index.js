import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/header";
import Head from "next/head";

export default function Home() {
  const line = "wefootwear";

  const sentence = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    initial: {
      opacity: 0,
      y: 400,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>wefootwear | Home</title>
      </Head>
      <div className="w-full h-screen relative">
        <Header />
        <div className="absolute top-1/3 z-20 flex flex-col place-items-center w-full">
          <div className="">
            <motion.div
              variants={sentence}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-4xl md:text-6xl font-semibold text-white  overflow-hidden"
            >
              <div className="flex overflow-hidden">
                {line.split("").map((char, idx) => {
                  return (
                    <motion.div key={char + "-" + idx} variants={letter}>
                      {char}
                    </motion.div>
                  );
                })}
              </div>
              <Link href="/shop/">
                <motion.p
                  variants={letter}
                  className="flex justify-center w-full place-items-center text-white underline mt-5 text-sm font-normal cursor-pointer"
                >
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
                </motion.p>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ y: -1000 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
          animate={{ y: 0 }}
          className="relative"
        >
          <div className="w-full h-screen bg-gray-500 bg-opacity-30 absolute top-0 z-10 pointer-events-none"></div>
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            transitionTime={500}
            interval={3000}
            stopOnHover={false}
            swipeable={false}
          >
            <div>
              <img
                className="h-screen object-cover w-full"
                loading="lazy"
                src="https://i.ibb.co/pffTtVv/https-hypebeast-com-image-2018-12-these-are-the-best-sneakers-of-2018-005.jpg"
              />
            </div>
            <div>
              <img
                className="h-screen object-cover w-full"
                loading="lazy"
                src="https://i.ibb.co/4YskC1T/c095795f992f84b92b16c65b93ecb5f5.jpg"
              />
            </div>
            <div>
              <img
                className="h-screen object-cover w-full"
                loading="lazy"
                src="https://i.ibb.co/bvvFBPt/R.jpg"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </>
  );
}
