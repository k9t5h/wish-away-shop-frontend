import {
  Box,
  Card,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { calculateCartTotal } from "../CartPage/CartPage";
import CustomButton from "./CustomButton";

const useStyles = makeStyles(() => ({
  card: {
    width: "80%",
    margin: "20px",
    padding: "20px",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  smallCard: {
    width: "60%",
    margin: "10px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const { cartProducts } = useContext(CartContext);

  return (
    <Container>
      <Box m={5}>
        <Paper elevation={3} className={classes.paper}>
          <Box p={2}>
            <Typography variant={"h4"}>Checkout</Typography>
          </Box>
          <Card variant="outlined" className={classes.card}>
            <Typography variant={"h6"}>Cart details</Typography>
            {cartProducts.map((product) => (
              <Card variant={"outlined"} className={classes.smallCard}>
                <Typography variant={"h7"}>{product.name}</Typography>
                <Typography variant={"h7"}>Price: {product.price}$</Typography>
              </Card>
            ))}
            <Typography variant={"h7"}>
              Cart total: {calculateCartTotal(cartProducts)}$
            </Typography>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                />
              </Grid>
            </Grid>
          </Card>
          <CustomButton text={"Order"} onClickHandler={() => {}} />
        </Paper>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
