import Header from "../components/header";
import TopCategory from "../components/topcategory";
import ShopCarousel from "../components/shopcarousel";
import ProductCard from "../components/productcard";

function Shop() {
  return (
    <div className="w-full min-h-screen bg-cusgray">
      <Header />
      <div className="max-w-6xl mx-auto pt-14 px-2 md:px-0">
        <TopCategory />
        <div className="grid grid-cols-4 gap-x-6">
          <div className="md:inline hidden p-4">
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
          <div className="col-span-4 md:col-span-3 flex flex-col py-4">
            <ShopCarousel />
            <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 p-5">
              <div className="grid grid-cols-4 gap-x-4 gap-y-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
