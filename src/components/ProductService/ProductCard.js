import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { CART_API_URL } from "../CartPage/CartPage";
import axios from "axios";
import { CartContext } from "../../context/CartContext";

const NO_AVAILABLE_IMAGE =
  "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "0 25px 50px 25px",
  },
  media: {
    height: 250,
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const { name, description, price, imageUrl } = props.product;
  const { setHasCartUpdate } = useContext(CartContext);

  const addProductToCart = async () => {
    try {
      axios.put(`${CART_API_URL}/add/${props.product.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const useFallbackImage = (e) => {
    e.target.src = NO_AVAILABLE_IMAGE;
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={imageUrl}
          onError={useFallbackImage}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={classes.bottom}>
        <Typography variant="h6" component="h2">
          {price} USD
        </Typography>
        <Button
          color="primary"
          onClick={() => {
            addProductToCart();
            setHasCartUpdate(true);
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
