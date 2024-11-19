// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetching products from the Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to add products to the cart
  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  // Function to remove products from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Functions to open and close the cart modal
  const openCartModal = () => setIsCartOpen(true);
  const closeCartModal = () => setIsCartOpen(false);

  return (
    <div>
      <Navbar cartCount={cart.length} openCartModal={openCartModal} />
      <ProductList products={products} addToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          closeModal={closeCartModal}
          cartItems={cart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
