import {
  Container,
  Paper,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import CartCard from "./CartCard";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CartPage = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box m={5}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant={"h4"}>Cart</Typography>
          <CartCard />
          <CartCard />
        </Paper>
      </Box>
    </Container>
  );
};

export default CartPage;
