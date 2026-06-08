import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemIndex = cart.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const increaseQuantity = (itemId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prev) =>
      prev.reduce((acc, item) => {
        if (item.id !== itemId) {
          acc.push(item);
        } else if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
        return acc;
      }, [])
    );
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  let data = {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  };
  return (
    <CartContext.Provider value={{ data }}>{children}</CartContext.Provider>
  );
};
