import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ProductList from './Components/ProductList';
import CartModal from './Components/CartModel';
import CartPage from './Components/CartPage'; 


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Decrement product quantity in cart
  const decrementFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Open modal for cart
  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('overflow-hidden'); // Disable scroll
  };

  // Close modal for cart
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-hidden'); // Re-enable scroll
  };

  // Calculate total price with discount
  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total * 0.9; // 10% discount
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cart.length} onCartClick={openModal} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                cart={cart}
                onAddToCart={addToCart}
                onDecrementFromCart={decrementFromCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                onRemove={removeFromCart}
                onDecrementFromCart={decrementFromCart}
                totalPrice={calculateTotalPrice()}
              />
            }
          />
        </Routes>
        {isModalOpen && (
          <CartModal
            cart={cart}
            onClose={closeModal}
            onRemove={removeFromCart}
          />
        )}
      </div>
    </Router>
  );
};

export default App;
