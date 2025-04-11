import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, cart, onAddToCart, onDecrementFromCart, onRemoveFromCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => {
        // Check if the product is already in the cart
        const cartItem = cart.find((item) => item.id === product.id);
        
        return (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={cartItem}
            onAddToCart={() => onAddToCart(product)} // Add to cart
            onDecrementFromCart={() => onDecrementFromCart(product)} // Decrease quantity
            onRemoveFromCart={() => onRemoveFromCart(product)} // Remove item from cart
          />
        );
      })}
    </div>
  );
};

export default ProductList;
