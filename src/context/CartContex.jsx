import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = async () => {
    try {
      const response = await fetch("https://fresh-harvest-server.vercel.app/cart");
      const cartItems = await response.json();
      setCartCount(cartItems.length);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
