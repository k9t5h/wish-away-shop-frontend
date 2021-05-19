import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const NO_AVAILABLE_IMAGE =
  "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";

const useStyles = makeStyles(() => ({
  column: {
    flexBasis: "50%",
  },
}));

const ProductDetails = (props) => {
  const classes = useStyles();

  const useFallbackImage = (e) => {
    e.target.src = NO_AVAILABLE_IMAGE;
  };

  return (
    <div className={classes.column}>
      <TableContainer>
        <Table align="left">
          <TableBody>
            {props.products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.imageUrl}
                    alt="product"
                    width="50px"
                    onError={useFallbackImage}
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price} $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductDetails;
