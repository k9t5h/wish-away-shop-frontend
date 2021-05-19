import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import OrderDetails from "./OrderDetails";
import Error from "../Error";
import OrderFinder from "./OrderFinder";

const ORDER_REST_API_URL = "http://localhost:8762/order/";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "992px",
    margin: "0 auto",
  },
}));

const OrderHistory = () => {
  const classes = useStyles();

  const [id, setId] = useState(null);
  const [order, setOrder] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchOrder = async (id) => {
    setIsError(false);

    try {
      const response = await axios.get(ORDER_REST_API_URL + id);
      setOrder(response.data);
    } catch (error) {
      setOrder(null);
      setIsError(true);
    }
  };

  const handleSearch = (e) => {
    const isEnterPressed = e.keyCode === 13;
    if (isEnterPressed) {
      const input = e.target.value;
      setId(input);
      fetchOrder(input);
    }
  };

  return (
    <div className={classes.container}>
      <OrderFinder enterPressed={handleSearch} />
      {isError && <Error message={"Order could not be found by ID " + id} />}
      {order !== null && <OrderDetails order={order} />}
    </div>
  );
};

export default OrderHistory;
