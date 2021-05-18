import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { CartContext } from "../../context/CartContext";
const useStyles = makeStyles(() => ({
  card: {
    width: "80%",
    margin: "20px",
    display: "flex",
    justifyContent: "space-between",
    height: "200px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContent: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "top",
    justifyContent: "flex-start",
  },
  cardMedia: {
    width: "30%",
  },
}));

const CartCard = ({ product, removeItemFromCart }) => {
  const classes = useStyles();
  const { setHasCartUpdate } = useContext(CartContext);
  return (
    <Card className={classes.card} variant="outlined">
      <CardMedia
        className={classes.cardMedia}
        component="img"
        src={product.imageUrl}
        height="200"
      ></CardMedia>
      <CardContent className={classes.cardContent}>
        <Box textAlign="left" m={3}>
          <Typography variant={"h5"}>{product.name}</Typography>
          <Typography color="textSecondary">{`Category: ${product.category}`}</Typography>
          <Typography>{`Price: ${product.price}$`}</Typography>
        </Box>
      </CardContent>
      <Box>
        <IconButton
          onClick={() => {
            removeItemFromCart(product.id);
            setHasCartUpdate(true);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CartCard;
