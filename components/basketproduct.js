import React from "react";

function BasketProduct({ item }) {
  return (
    <div className="product flex justify-between mb-6">
      <div className="image flex">
        <img
          className="w-32 h-32 object-cover rounded-xl"
          src={item.prop[0].image[0]}
          alt=""
        />
        <div className="ml-3 flex flex-col text-cusblack justify-between py-1">
          <p className="font-medium">{item.name}</p>
          <ul className="text-sm leading-relaxed">
            <li>Color: {item.color}</li>
            <li>Design ID: {item.slug}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Size: 43</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between py-1">
        <h1 className="font-semibold text-cusblack text-right">{item.price}</h1>
        <div className="flex ml-auto text-cusblack">
          <button className="border border-cusblack rounded-lg p-1 hover:bg-cusblack hover:text-white duration-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <button className="border border-cusblack rounded-lg p-1 hover:bg-cusblack hover:text-white duration-100 mx-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button className="border border-cusblack rounded-lg p-1 hover:bg-cusblack hover:text-white duration-100 text-xs px-2 font-medium">
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
