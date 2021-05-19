import {
  Container,
  Paper,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartCard from "./CartCard";
import EmptyCartCard from "./EmptyCartCard";
import CustomButton from "../CheckoutPage/CustomButton";
import Error from "../Error";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const calculateCartTotal = (products) => {
  let sum = 0;
  for (let product of products) {
    sum += product.price;
  }
  return sum;
};

export const CART_API_URL = "http://localhost:8762/cart";

const CartPage = () => {
  const history = useHistory();
  const classes = useStyles();

  const [apiError, setApiError] = useState(false);

  const { cartProducts } = useContext(CartContext);

  const removeItemFromCart = async (productId) => {
    setApiError(false);
    try {
      const response = await axios.delete(
        `${CART_API_URL}/remove/${productId}`
      );
      console.log(response);
    } catch (error) {
      setApiError(true);
    }
  };

  return (
    <Container>
      {apiError && (
        <Error message={"Unexpected error occured, please try again!"} />
      )}
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
                key={product.id}
                product={product}
                removeItemFromCart={removeItemFromCart}
              />
            ))
          )}
          <Box m={2}>
            {cartProducts.length !== 0 && (
              <>
                <Typography variant={"h5"}>
                  Cart total: {calculateCartTotal(cartProducts)}$
                </Typography>
                <CustomButton
                  text={"Checkout"}
                  onClickHandler={() => history.push("/checkout")}
                />
              </>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CartPage;
