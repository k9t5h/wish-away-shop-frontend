import { Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    width: "80%",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  },
}));

const EmptyCartCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <Typography variant={"h5"}>No item in cart.</Typography>
    </Card>
  );
};

export default EmptyCartCard;
