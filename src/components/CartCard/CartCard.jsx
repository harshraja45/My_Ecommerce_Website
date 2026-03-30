import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../../redux/cartSlice";

function CartCard({ name, price, image, id }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-lg transition">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* IMAGE */}
        <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-h-full object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">₹ {price}</p>
        </div>
      </div>

      {/* RIGHT */}
      <button
        onClick={() => dispatch(RemoveItem(id))}
        className="flex items-center gap-2 bg-red-100 text-red-500 px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
      >
        Remove <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default CartCard;