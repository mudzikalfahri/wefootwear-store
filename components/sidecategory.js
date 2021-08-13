import Link from "next/link";
import React from "react";

function SideCategory() {
  const categories = [
    { name: "All items", slug: "/all" },
    { name: "Nike", slug: "/nike-product" },
    { name: "Adidas", slug: "/adidas" },
    { name: "Converse", slug: "/converse" },
    { name: "Jerseys and Kits", slug: "/jerseys" },
    { name: "Jackets", slug: "/jackets" },
    { name: "Basketball", slug: "/basketball" },
  ];
  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        {categories.map((cat, idx) => (
          <Link key={idx} href={`http://localhost:3000/shop${cat.slug}`}>
            <li>{cat.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;
