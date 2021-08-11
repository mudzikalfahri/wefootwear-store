import Header from "../components/header";
import TopCategory from "../components/topcategory";
import ShopCarousel from "../components/shopcarousel";

function Shop() {
  return (
    <div className="w-full min-h-screen bg-cusgray">
      <Header />
      <div className="max-w-6xl mx-auto pt-14 px-2 md:px-0">
        <TopCategory />
        <div className="grid grid-cols-4 gap-x-6">
          <div className="md:inline hidden border border-black p-4">
            <div className="bg-white rounded-3xl px-5 py-6 shadow-lg">
              <h3 className="font-semibold mb-3 text-lg text-cusblack">
                Categories
              </h3>
              <ul className="leading-10 text-xs text-gray-400">
                <li>All products</li>
                <li>Nike</li>
                <li>Adidas</li>
                <li>Converse</li>
                <li>Jerseys and Kits</li>
                <li>Jackets</li>
                <li>Basketball</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 md:col-span-3 border border-black flex flex-col py-4">
            <ShopCarousel />
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
