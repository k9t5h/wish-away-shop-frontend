import {
  Box,
  Card,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

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
  detailsCard: {
    width: "60%",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const OrderConfirmPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const orderDetails = history.location.state;
  return (
    <Container>
      <Box m={5}>
        <Paper elevation={3} className={classes.paper}>
          <Box p={2}>
            <Typography variant={"h4"}>Thank you for your order!</Typography>
            <Typography variant={"subtitle1"}>
              You can check your order details any time by serching for your
              Order ID at <a href="/order">Order history</a>!
            </Typography>
          </Box>
          <Card variant="outlined" className={classes.card}>
            <Typography variant={"h6"}>Order details</Typography>
            <Card variant={"outlined"} className={classes.detailsCard}>
              <Typography variant={"subtitle1"}>
                Order ID: {orderDetails.id}
              </Typography>
              <Typography variant={"subtitle1"}>
                Name: {orderDetails.name}
              </Typography>
              <Typography variant={"subtitle1"}>
                Email address: {orderDetails.email}
              </Typography>
              <Typography variant={"subtitle1"}>
                Phone number: {orderDetails.phone}
              </Typography>
              <Typography variant={"subtitle1"}>
                Address: {orderDetails.address}
              </Typography>
            </Card>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <Typography variant={"h6"}>Ordered products</Typography>
            {orderDetails.products.map((product) => (
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
          </Card>
        </Paper>
      </Box>
    </Container>
  );
};

export default OrderConfirmPage;
