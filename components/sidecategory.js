import Link from "next/link";
import React from "react";

function SideCategory({ typesData }) {
  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        {typesData.map((type, idx) => (
          <Link key={idx} href={`/shop/${type.slug}`}>
            <li>{type.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;
