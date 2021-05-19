import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Error from "../Error";
import { makeStyles } from "@material-ui/core/styles";
import ProductFilter from "./ProductFilter";
import Info from "../Info";

const PRODUCT_REST_API_URL = "http://localhost:8762/products";

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
}));

const ProductCatalog = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

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

  return (
    <div className={classes.root}>
      {isEmpty && (
        <Info message={"Products could not be found in this category."} />
      )}
      {isError ? (
        <Error />
      ) : (
        <div className={classes.container}>
          <ProductFilter onCategoryClick={filterByCategory} />
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
