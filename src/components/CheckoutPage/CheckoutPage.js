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
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { calculateCartTotal } from "../CartPage/CartPage";
import CustomButton from "./CustomButton";
import CustomTextField from "./CustomTextField";

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

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    postalCode: "",
    country: "",
  });

  const [inputError, setInputError] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    postalCode: "",
    country: "",
  });

  const sendOrder = async () => {
    let validData = validateInput();
    console.log(customerDetails);
  };

  const validateInput = () => {
    let errors = inputError;
    let valid = true;
    for (let property in customerDetails) {
      let field = customerDetails[property];
      if (field === "") {
        errors[property] = "Required field!";
        valid = false;
      }
      if (property === "email") {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = re.test(String(field).toLowerCase());
        if (result === false) {
          valid = false;
          errors[property] = "Invalid email format.";
        }
      }
      if (property === "phone") {
        if (!field.match("^[0-9]+$")) {
          errors[property] = "Invalid input.";
          valid = false;
        } else if (field.length !== 11) {
          errors[property] = "Invalid input. Phone number wrong length.";
          valid = false;
        }
      }
    }
    setInputError({ ...errors });
    return valid;
  };

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
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"name"}
                  label="Name"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"email"}
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"address"}
                  label="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"city"}
                  label="City"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"phone"}
                  label="Phone number"
                  required={false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"postalCode"}
                  label="Zip / Postal code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  error={inputError}
                  setData={setCustomerDetails}
                  data={customerDetails}
                  setError={setInputError}
                  fieldname={"country"}
                  label="Country"
                />
              </Grid>
            </Grid>
          </Card>
          <CustomButton
            text={"Order"}
            onClickHandler={() => {
              sendOrder();
            }}
          />
        </Paper>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
