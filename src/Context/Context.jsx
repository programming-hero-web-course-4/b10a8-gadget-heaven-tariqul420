// src/context/CartContext.jsx
import { createContext, useState } from 'react';

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [productCarts, setProductCart] = useState([]);
  const [productWishlist, setProductWishlist] = useState([])

  return (
    <ContextApi.Provider value={{ productCarts, setProductCart,productWishlist, setProductWishlist }}>
      {children}
    </ContextApi.Provider>
  );
};
