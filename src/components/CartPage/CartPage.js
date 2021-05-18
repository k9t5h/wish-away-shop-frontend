import {
  Container,
  Paper,
  Box,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CartCard from "./CartCard";
import EmptyCartCard from "./EmptyCartCard";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  checkoutButton: {
    margin: "15px",
    width: "180px",
    height: "40px",
    fontSize: "1.1rem",

    "&:hover": {
      backgroundColor: "#a1e4d2",
    },
    "& .MuiTouchRipple-root span": {
      backgroundColor: "blue",
      opacity: 0.3,
    },
  },
}));

const CartPage = () => {
  const history = useHistory();
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

  const calculateCartTotal = () => {
    let sum = 0;
    for (let product of cartProducts) {
      sum += product.price;
    }
    return sum;
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
          <Box m={2}>
            <Typography variant={"h4"}>Your cart</Typography>
          </Box>

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
          <Box m={2}>
            {cartProducts.length !== 0 && (
              <>
                <Typography variant={"h5"}>
                  Cart total: {calculateCartTotal()}$
                </Typography>
                <Button
                  className={classes.checkoutButton}
                  variant="outlined"
                  disableElevation
                  onClick={() => history.push("/checkout")}
                >
                  Checkout
                </Button>
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CartPage;
