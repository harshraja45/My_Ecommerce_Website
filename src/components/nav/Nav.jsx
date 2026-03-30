import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/shop?search=${query}`);
    setQuery("");
  };

  return (
    <nav className="bg-[#14191d] text-white sticky top-0 z-50 shadow-lg">

      {/* TOP */}
      <div className="flex items-center justify-between px-6 py-3">

        {/* 🔥 LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold hover:scale-105 transition"
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            HR
          </span>
          <span className="text-white">Shop</span>
        </Link>

        {/* 🔎 SEARCH */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex bg-white rounded-full overflow-hidden w-[40%] shadow"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 text-black outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-red-500 px-4 text-white hover:bg-red-600 transition">
            <IoSearchOutline />
          </button>
        </form>

        {/* 🛒 CART */}
        <Link
          to="/cart"
          className="relative text-2xl hover:scale-110 transition"
        >
          <FiShoppingCart />

          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-[2px] rounded-full shadow">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* 🔥 BOTTOM NAV */}
      <ul className="flex justify-center gap-8 bg-[#1f252b] py-2 text-sm font-medium">

        {[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: "Cart", path: "/cart" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold"
                  : "hover:text-red-400 transition"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>
  );
}

export default Nav;