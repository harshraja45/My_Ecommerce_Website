import React, { useState } from "react";
import bg from "../../assets/bg0.gif";
import { categories } from "../../category";
import { products } from "../../dummydata";
import Product from "../../components/Product/Product";

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  /* FILTER */
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen pb-12">

      {/* 🔥 HERO SECTION */}
      <div className="relative w-full flex justify-center mt-4 px-4">
        <img
          src={bg}
          alt="banner"
          className="w-full max-w-6xl rounded-2xl shadow-lg"
        />

        {/* OVERLAY TEXT */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to HR-Shop
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Discover Amazing Deals Everyday
          </p>

          <button
            onClick={() => setActiveCategory("all")}
            className="mt-4 bg-red-500 px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* 🧩 CATEGORY SECTION */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">

        {/* ALL */}
        <div
          onClick={() => setActiveCategory("all")}
          className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              activeCategory === "all"
                ? "bg-red-500 text-white shadow-lg scale-105"
                : "bg-white shadow hover:scale-105 hover:shadow-lg"
            }`}
        >
          All
        </div>

        {/* CATEGORY LIST */}
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveCategory(item.slug)}
            className={`cursor-pointer flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-all duration-300
              ${
                activeCategory === item.slug
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-white shadow hover:scale-105 hover:shadow-lg"
              }`}
          >
            <img src={item.image} alt={item.name} className="w-5 h-5" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* 🔥 TITLE */}
      <h2 className="text-center text-3xl font-bold mt-12 text-gray-800">
        🔥 Trending Products
      </h2>

      {/* 🛍 PRODUCTS GRID */}
      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.slice(0, 8).map((item) => (
          <Product key={item.id} {...item} />
        ))}

      </div>

    </div>
  );
}

export default Home;