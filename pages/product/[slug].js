import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import ProductSkeleton from "../../components/productskeleton";
import NumberFormat from "react-number-format";
import Link from "next/link";

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/items");
  const data = await res.json();

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_APIURL + `/items?slug=${slug}`
  );
  const data = await res.json();
  const item = data[0];

  if (!data.length) {
    return {
      redirect: {
        destination: "/shop",
        permanent: false,
      },
    };
  }

  return {
    props: {
      item,
    },
    revalidate: 10,
  };
}

function Product({ item }) {
  const [loading, setLoading] = useState(true);
  const [imgSelected, setImgSelected] = useState(0);

  if (!item) return <div>404 not found</div>;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="bg-cusgray min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto h-screen pt-16">
        <div className="flex justify-between place-items-center py-4 px-1 mb-4">
          <Link href="/shop">
            <div className="w-9 h-9 shadow-lg bg-white text-cusblack hover:bg-cusblack hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
              <svg
                className="w-4 h-4 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </Link>
          <h4 className="text-cusblack text-md">Detailed Product</h4>
          <div className="w-8"></div>
        </div>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <div className="w-full bg-white rounded-2xl shadow-lg md:py-8 md:px-10 md:flex">
            <div className="photo md:w-1/3">
              <img
                className=" h-60 object-cover w-full md:rounded-2xl"
                src={item.prop[0].image[imgSelected]}
                alt=""
              />
              <div className="px-2 md:px-0 flex mt-4">
                {item.prop[0].image.map((img, idx) => (
                  <img
                    src={img}
                    onClick={() => setImgSelected(idx)}
                    key={idx}
                    className={`${
                      imgSelected == idx
                        ? `border-2 border-cusblack filter brightness-90 `
                        : ``
                    } w-16 h-16 rounded-xl object-cover mr-3 cursor-pointer duration-100 `}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="detail px-2 md:px-0 mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
              <p className="flex place-items-center text-sm text-gray-400">
                {item.type.name}
                <span className="mx-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {item.category.name}
              </p>
              <h1 className="text-3xl text-cusblack font-medium my-3">
                {item.name}
              </h1>
              <p className="text-sm text-gray-400">Black / White</p>
              <NumberFormat
                value={item.price}
                className="my-3 font-semibold text-lg text-cusblack"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp"}
                renderText={(value, props) => (
                  <p className="text-sm font-semibold" {...props}>
                    {value}
                  </p>
                )}
              />
              <div className="sizes text-sm text-gray-400">
                <p className="mb-2">Select size</p>
                <div className="flex">
                  {item.prop[0].size.map((size, idx) => (
                    <div
                      key={idx}
                      className="border mr-2 duration-200 border-cusblack text-cusblack flex place-items-center justify-center rounded-full w-12 h-12 cursor-pointer hover:bg-cusblack hover:text-white"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div className="buttoncart flex mt-5 w-full">
                <button className="w-4/5 md:w-3/5 bg-cusblack py-3 text-white rounded-lg text-sm flex justify-center place-items-center">
                  Add to Basket
                  <span>
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </span>
                </button>
                <button className="w-1/5 ml-2 bg-white border border-cusblack py-3 text-cusblack rounded-lg text-sm">
                  <svg
                    className="w-5 h-5 m-auto"
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
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
