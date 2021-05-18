import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Error from "../Error";
import { makeStyles } from "@material-ui/core/styles";

const PRODUCT_REST_API_URL = "http://localhost:8762/products";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "50px",
    paddingBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
}));

const ProductCatalog = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsError(false);

      try {
        const response = await axios.get(PRODUCT_REST_API_URL);
        setProducts(response.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {isError ? (
        <Error />
      ) : (
        <div className={classes.container}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
