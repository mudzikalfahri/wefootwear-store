import React from "react";
import Header from "../components/header";
import Head from "next/head";

function OurStore() {
  return (
    <>
      <Head>
        <title>wefootwear | Store</title>
      </Head>
      <div className="w-full min-h-screen bg-cusgray ">
        <Header />
        <div className="max-w-5xl mx-auto pt-20 pb-10 md:px-0">
          <div className="md:rounded-2xl overflow-hidden bg-white shadow-lg grid grid-cols-1 md:grid-cols-2">
            <div className="grid relative grid-cols-2 grid-rows-2 overflow-hidden bg-gray-600 gap-0">
              <div className="absolute top-0 w-full h-full bg-gray-500 bg-opacity-30"></div>
              <div className="col-span-1 h-60">
                <img
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/6bry43z/wf2017232543p.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-1 h-60">
                <img
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/rZckbV2/IMG-4202-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-2 h-60">
                <img
                  className="object-cover w-full h-full"
                  src="https://i.ibb.co/cgwbYrz/134f32d1181f86590506f301cb9509a3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="px-10 py-10 text-cusblack row-start-1 md:col-start-2">
              <h1 className="text-xl mb-5 bg-cusblack text-white py-1 px-3 rounded-sm">
                Our Store
              </h1>
              <div className="my-2">
                <h3 className="mb-1 text-lg font font-semibold">
                  Wefootwear Offline Store
                </h3>
                <p className="text-sm">
                  Jl. Brigjen Katamso No. 54, West Progo.
                </p>
              </div>
              <div className="my-2 mt-4">
                <h3 className="mb-1 text-lg font font-semibold">
                  Monday Center
                </h3>
                <p className="text-sm">Jl. Malioboro No. 4, Yogyakarta.</p>
              </div>
              <div className="my-2 mt-4">
                <h3 className="mb-1 text-lg font font-semibold">Flight Club</h3>
                <p className="text-sm">
                  535 N Fairfax Ave, Los Angeles, CA 90036, AS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
