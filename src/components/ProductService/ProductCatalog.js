import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Error from "../Error";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ProductFilter from "./ProductFilter";
import Info from "../Info";
import ModalDialog from "./ModalDialog";

const PRODUCT_REST_API_URL = "https://wa-api-gateway.herokuapp.com/products";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  container: {
    marginTop: "50px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  button: {
    position: "fixed",
    top: "216px",
    right: "25px",
    zIndex: "1",
  },
}));

const ProductCatalog = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (category = "") => {
    setIsError(false);

    try {
      const response =
        category === ""
          ? await axios.get(PRODUCT_REST_API_URL)
          : await axios.get(PRODUCT_REST_API_URL + `?category=${category}`);
      setProducts(response.data);
      setIsEmpty(response.data.length === 0 ? true : false);
    } catch (error) {
      setIsError(true);
    }
  };

  const filterByCategory = (category) => {
    fetchProducts(category);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    fetchProducts();
  };

  return (
    <div className={classes.root}>
      {isEmpty && (
        <Info message={"Products could not be found in this category."} />
      )}
      {isError ? (
        <Error message={"Page could not be loaded. Please try again later!"} />
      ) : (
        <div className={classes.container}>
          <ProductFilter onCategoryClick={filterByCategory} />
          <Fab className={classes.button} onClick={handleOpen}>
            <AddIcon />
          </Fab>
          <ModalDialog open={open} handleClose={handleClose} />
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
