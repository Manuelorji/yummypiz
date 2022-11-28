import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(localCart);
  }, []);

  const addItemToCart = (item, qty) => {
    item.qty = qty;
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseCartItemQty = (id) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.qty = cartItem.qty + 1;
      }

      return cartItem;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const decreaseCartItemQty = (id) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.qty = cartItem.qty - 1;
      }
      return cartItem;
    });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = () => {
    const sumPrices = cart.reduce(
      (acc, cartItem) => acc + cartItem.price,
      cartItem.qty
    );
  };

  const value = {
    cart,
    addItemToCart,
    removeItemFromCart,
    increaseCartItemQty,
    decreaseCartItemQty,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
