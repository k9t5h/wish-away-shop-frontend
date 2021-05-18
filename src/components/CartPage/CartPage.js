import {
  Container,
  Paper,
  Box,
  Typography,
  makeStyles,
  Card,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import EmptyCartCard from "./EmptyCartCard";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CartPage = () => {
  const classes = useStyles();
  const CART_API_URL = "http://localhost:8762/cart";

  const [cartProducts, setCartProducts] = useState([]);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get(CART_API_URL);
      setCartProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `${CART_API_URL}/remove/${productId}`
      );
      fetchCartProducts();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchCartProducts(), []);

  return (
    <Container>
      <Box m={5}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant={"h4"}>Cart</Typography>
          {cartProducts.length === 0 ? (
            <EmptyCartCard />
          ) : (
            cartProducts.map((product) => (
              <CartCard
                key={product}
                product={product}
                removeItemFromCart={removeItemFromCart}
              />
            ))
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default CartPage;
