import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { categories } from "../../category";
import { products } from "../../dummydata";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa6";

function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");

  const location = useLocation();

  /* GET SEARCH QUERY */
  const searchQuery = new URLSearchParams(location.search).get("search") || "";

  /* FILTER LOGIC */
  const filteredProducts = products.filter((item) => {
    const matchCategory =
      activeCategory === "all" || item.category === activeCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-gray-100 min-h-screen pb-10 px-4">

      {/* HEADING */}
      <div className="flex items-center justify-center gap-2 text-2xl font-bold mt-6 text-gray-800">
        <span>Shop</span>
        <FaShopify />
      </div>

      {/* CATEGORY */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">

        {/* ALL */}
        <div
          onClick={() => setActiveCategory("all")}
          className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition
            ${
              activeCategory === "all"
                ? "bg-red-500 text-white"
                : "bg-white shadow hover:bg-gray-200"
            }`}
        >
          All
        </div>

        {/* CATEGORY LIST */}
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveCategory(item.slug)}
            className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
              ${
                activeCategory === item.slug
                  ? "bg-red-500 text-white"
                  : "bg-white shadow hover:bg-gray-200"
              }`}
          >
            <img src={item.image} alt={item.name} className="w-5 h-5" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Product key={item.id} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}

      </div>

    </div>
  );
}

export default Shop;
