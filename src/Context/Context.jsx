// src/context/CartContext.jsx
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
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

ContextProvider.propTypes = {
  children: PropTypes.object
}