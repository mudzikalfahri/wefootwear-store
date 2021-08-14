import React from "react";
import Header from "./header";
import ShopCarousel from "./shopcarousel";
import SideCategory from "./sidecategory";
import TopCategory from "./topcategory";

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-cusgray">
      <Header />
      <div className="max-w-6xl mx-auto pt-14 px-2 md:px-0">
        <TopCategory />
        <div className="grid grid-cols-4 gap-x-6">
          <div className="md:inline hidden p-4">
            <SideCategory />
          </div>
          <div className="col-span-4 md:col-span-3 flex flex-col py-4">
            <ShopCarousel />
            <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 p-5">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
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
