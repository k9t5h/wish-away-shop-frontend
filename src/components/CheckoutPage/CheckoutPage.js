import {
  Box,
  Card,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../context/CartContext";
import { calculateCartTotal } from "../CartPage/CartPage";
import Error from "../Error";
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
  const ORDER_API_URL = "http://localhost:8762/order";
  const classes = useStyles();
  const history = useHistory();
  const { cartProducts, setHasCartUpdate } = useContext(CartContext);

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

  const [apiError, setApiError] = useState(false);

  const sendOrder = async () => {
    let validData = validateInput();
    if (validData) {
      let address = `${customerDetails.country} ${customerDetails.postalCode}, ${customerDetails.city}, ${customerDetails.address}`;
      let customer = customerDetails;
      customer.address = address;
      delete customer.postalCode;
      delete customer.country;
      try {
        const response = await axios.post(ORDER_API_URL, customer);
        setHasCartUpdate(true);
        history.push({ pathname: "/order-confirm", state: response.data });
      } catch (error) {
        setApiError(true);
      }
    }
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
    }
    if (errors.email === "") {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(String(customerDetails.email).toLowerCase());
      if (result === false) {
        valid = false;
        errors.email = "Invalid email format.";
      }
    }
    if (errors["phone"] === "") {
      if (!customerDetails.phone.match("^[0-9]+$")) {
        errors.phone = "Invalid input.";
        valid = false;
      } else if (customerDetails.phone.length !== 11) {
        errors.phone = "Invalid input. Phone number wrong length.";
        valid = false;
      }
    }
    setInputError({ ...errors });
    return valid;
  };

  return (
    <Container>
      {apiError ? (
        <Error message={"Unexpected error occurred, please try again!"} />
      ) : (
        <Box m={5}>
          <Paper elevation={3} className={classes.paper}>
            <Box p={2}>
              <Typography variant={"h4"}>Checkout</Typography>
            </Box>
            <Card variant="outlined" className={classes.card}>
              <Typography variant={"h6"}>Cart details</Typography>
              {cartProducts.map((product) => (
                <Card
                  key={product.id}
                  variant={"outlined"}
                  className={classes.smallCard}
                >
                  <Typography variant={"subtitle1"}>{product.name}</Typography>
                  <Typography variant={"subtitle1"}>
                    Price: {product.price}$
                  </Typography>
                </Card>
              ))}
              <Typography variant={"subtitle1"}>
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
      )}
    </Container>
  );
};

export default CheckoutPage;
