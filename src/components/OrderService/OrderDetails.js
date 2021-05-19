import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Divider,
} from "@material-ui/core";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "50%",
  },
}));

const OrderDetails = (props) => {
  const classes = useStyles();
  const { id, name, address, phone, email, products } = props.order;

  const getTotalPrice = () => {
    let sum = 0;
    for (const index in products) {
      sum += products[index].price;
    }
    return sum;
  };

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Order ID: {id}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              Total: {getTotalPrice()} USD
            </Typography>
          </div>
        </AccordionSummary>

        <AccordionDetails className={classes.details}>
          <ProductDetails products={products} />
          <CustomerDetails
            name={name}
            phone={phone}
            email={email}
            address={address}
          />
        </AccordionDetails>
        <Divider />
      </Accordion>
    </div>
  );
};

export default OrderDetails;
