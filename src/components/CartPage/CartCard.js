import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
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

const CartCard = ({ imgUrl, product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardMedia
        className={classes.cardMedia}
        component="img"
        src={imgUrl}
        height="200"
      ></CardMedia>
      <CardContent className={classes.cardContent}>
        <Box textAlign="left" m={3}>
          <Typography textAlign="left" variant={"h5"}>
            {product.name}
          </Typography>
          <Typography color="textSecondary">{`Category: ${product.category}`}</Typography>
          <Typography>{`Price: ${product.price}$`}</Typography>
        </Box>
      </CardContent>
      <Box>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CartCard;
