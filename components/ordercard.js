import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";

function OrderCard({ order }) {
  console.log(order);
  return (
    <div className="py-2 px-4 rounded-lg shadow-lg mb-2">
      <div className="flex place-items-center text-xs text-cusblack py-1">
        <svg
          className="w-5 h-5 text-cusblack"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mx-2 font-semibold">Shop</p>
        <p>{moment.unix(order.timestamp).format("DD MMM YYYY")}</p>
        <div className="py-0.5 px-2 bg-cusblack text-white mx-3 flex text-[8px] place-items-center rounded-lg">
          processed
        </div>
      </div>

      <div className="flex flex-col my-1">
        <div className="md:flex mt-2">
          <div className="md:w-3/4 border-b md:border-b-0 md:border-r border-gray-300">
            {order.items.map((it, idx) => (
              <div key={idx} className="flex mb-2">
                <img
                  className="w-16 h-16 rounded-lg object-cover"
                  src={order.images[idx]}
                  alt=""
                />
                <div className="mx-3 text-xs text-cusblack">
                  <p className="text-sm font-semibold">{it.description}</p>
                  <div className="flex">
                    <p className="text-cusblack mr-1">{it.quantity} x </p>
                    <NumberFormat
                      value={(it.amount_subtotal / it.quantity) * 100}
                      className="text-gray-400 text-xs"
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rp"}
                      renderText={(value, props) => (
                        <p className="text-gray-400 text-xs" {...props}>
                          {value}
                        </p>
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 mt-2 md:mt-0 text-xs text-cusblack flex md:flex-col justify-center place-items-center">
            <p className="text-gray-400 md:mb-1">Total Amount :</p>
            <NumberFormat
              value={order.items.reduce(
                (val, item) => val + item.amount_subtotal * 100,
                0
              )}
              className="font-semibold"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp"}
              renderText={(value, props) => (
                <p className="text-gray-400 text-xs" {...props}>
                  {value}
                </p>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
