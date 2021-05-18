import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { CART_API_URL } from "../components/CartPage/CartPage";

export const CartContext = createContext(null);

const CartContextHandler = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [hasCartUpdate, setHasCartUpdate] = useState(false);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get(CART_API_URL);
      setCartProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
    setHasCartUpdate(false);
  }, [hasCartUpdate]);

  return { cartProducts, setHasCartUpdate };
};

export default CartContextHandler;
