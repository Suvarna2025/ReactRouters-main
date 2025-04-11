import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'; // Make sure to import CartItem component

const CartPage = ({ cart, onRemove, onDecrementFromCart, totalPrice }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        // If cart is empty
        <div>
          <p>Your cart is empty. Start adding some products!</p>
          {/* Only show the continue shopping button when cart is empty */}
          <div className="mt-8">
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Cart Items with Scrollable Container */}
          <div className="max-h-96 overflow-y-auto space-y-4 mb-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onDecrementFromCart={onDecrementFromCart}
              />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6">
            <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
            <p className="text-lg text-gray-500">(10% discount applied)</p>
          </div>

          {/* Continue Shopping button */}
          <div className="mt-8">
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
