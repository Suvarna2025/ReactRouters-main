import React from 'react';

const CartItem = ({ item, onRemove, onDecrementFromCart }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-contain rounded-md"
      />

      {/* Product Details */}
      <div className="flex-1 ml-6">
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <p className="text-sm text-gray-600">
          ${item.price.toFixed(2)} x {item.quantity}
        </p>
        <p className="text-sm font-semibold mt-1 text-gray-800">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Actions: Decrement and Remove */}
      <div className="flex space-x-2">
        {/* Decrement Quantity */}
        <button
          onClick={() => onDecrementFromCart(item.id)}
          className="bg-yellow-600 text-white px-3 py-1 rounded-md"
        >
          -
        </button>

        {/* Remove Item from Cart */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
