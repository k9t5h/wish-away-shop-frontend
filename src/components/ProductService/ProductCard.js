import React from "react";
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

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
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

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} component="img" src={imageUrl} />

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
        <Button color="primary">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
