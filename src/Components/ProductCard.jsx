import React from 'react';

const ProductCard = ({ product, cartItem, onAddToCart, onRemoveFromCart, onDecrementFromCart }) => {
  return (
    <div className="border rounded-lg shadow-xl p-6 flex flex-col items-center bg-gray-800 text-white transform transition-all duration-300 hover:scale-105">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-28 object-contain mb-4 transition-transform duration-300 hover:scale-110"
      />
      
      {/* Product Title */}
      <h3 className="text-lg font-semibold text-center text-white mb-2">{product.title}</h3>

      {/* Product Price */}
      <p className="text-xl font-bold text-red-600 mb-4">${product.price.toFixed(2)}</p>

      {/* Cart Actions */}
      {cartItem ? (
        <div className="flex items-center space-x-3">
          {/* Decrement Button */}
          <button
            onClick={onDecrementFromCart}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            −
          </button>

          {/* Quantity Display */}
          <span className="text-xl font-medium text-white">{cartItem.quantity}</span>

          {/* Increment Button */}
          <button
            onClick={onAddToCart}
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={onAddToCart}
          className="bg-red-600 hover:bg-red-700 text-white text-lg px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      )}

      {/* Remove from Cart Button */}
      {cartItem && (
        <button
          onClick={onRemoveFromCart}
          className="mt-4 bg-gray-700 hover:bg-gray-600 text-white text-lg px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
