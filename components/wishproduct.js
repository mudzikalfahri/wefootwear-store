import Link from "next/link";
import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../slices/wishlistSlice";
import { motion } from "framer-motion";

function WishProduct({ item, idx }) {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95] }}
      className="mb-4 overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.5, x: 100, y: -100, opacity: 0 }}
        animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95] }}
      >
        <img
          className="h-28 rounded-lg object-cover w-full"
          src={item.prop[0].image[0]}
          alt=""
        />
      </motion.div>
      <div className="px-2 py-1 text-cusblack">
        <p className="text-sm line-clamp-1">{item.name}</p>
        <NumberFormat
          value={item.price}
          className="text-xs my-1.5"
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rp"}
          renderText={(value, props) => (
            <p className="text-xs my-1.5" {...props}>
              {value}
            </p>
          )}
        />
        <Link href={"/product/" + item.slug}>
          <button className="text-white bg-cusblack border border-cusblack py-1 text-xs w-full rounded-lg">
            View product
          </button>
        </Link>
        <button
          onClick={() => dispatch(removeFromWishlist(item))}
          className="text-cusblack mt-1.5 bg-white border border-cusblack py-1 text-xs w-full rounded-lg"
        >
          Remove
        </button>
      </div>
    </motion.div>
  );
}

export default WishProduct;
