import React from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../../redux/cartSlice";

function Product({ name, image, price, id }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(AddItem({ id, name, image, price }));
  };

  return (
    <div
      className="bg-white rounded-xl p-4 shadow-sm 
                 hover:shadow-2xl 
                 hover:-translate-y-2 
                 hover:scale-[1.02]
                 transition-all duration-300 ease-in-out 
                 flex flex-col group cursor-pointer"
    >

      {/* IMAGE */}
      <div className="h-44 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full object-contain 
                     group-hover:scale-110 
                     transition duration-300"
        />
      </div>

      {/* DETAILS */}
      <div className="mt-3 flex flex-col gap-2 flex-1">

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>

        <p className="text-lg font-bold text-gray-900">
          ₹ {price}
        </p>

        <button
          onClick={handleAdd}
          className="mt-auto bg-red-500 text-white py-2 rounded-full 
                     hover:bg-red-600 hover:scale-105 
                     transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default Product;