import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { recentCategory, selectCategory } from "../slices/categorySlice";

function SideCategory({ typesData }) {
  const dispatch = useDispatch();
  const recent = useSelector(recentCategory);

  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        <li>
          <button
            className={`${
              recent === "" ? `font-semibold text-cusblack` : ``
            } cursor-pointer`}
            onClick={() => dispatch(selectCategory(""))}
          >
            All products
          </button>
        </li>
        {typesData.map((type, idx) => (
          <li key={type.slug}>
            <button
              className={`${
                recent === type.name ? `font-semibold text-cusblack` : ``
              } cursor-pointer`}
              onClick={() => dispatch(selectCategory(type.name))}
            >
              {type.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;
