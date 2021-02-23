import React, { useReducer, useContext, useEffect } from "react";
import cartReducer from "../CartReducer";

const CartContext = React.createContext(null);

let initCart;
try {
  initCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  initCart = [];
}

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
