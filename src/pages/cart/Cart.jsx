import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import ec from "../../assets/emptycart.png";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  /* TOTAL PRICE (WITH QTY SUPPORT) */
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.qty || 1),
    0
  );

  /* FORMAT PRICE */
  const formatPrice = (num) =>
    new Intl.NumberFormat("en-IN").format(num);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 gap-4 text-center">
          <img
            src={ec}
            alt="empty cart"
            className="w-64 opacity-80"
          />
          <h1 className="text-2xl font-semibold text-gray-700">
            Your Cart is Empty
          </h1>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto flex flex-col gap-6">

          {/* CART ITEMS */}
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-white p-5 rounded-xl shadow flex flex-col gap-3">

            <h2 className="text-lg font-semibold text-gray-800">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total Price</span>
              <span>₹ {formatPrice(totalPrice)}</span>
            </div>

            <button className="mt-3 bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;