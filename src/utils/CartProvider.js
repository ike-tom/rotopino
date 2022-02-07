import { useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productName, productCode, price, quantity) => {
    const newProduct = {
      productName: productName,
      productCode: productCode,
      price: price,
      quantity: quantity
    };
    if (newProduct.quantity === 0) return;
    setCart((cart) => [...cart, newProduct]);
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartProvider;
