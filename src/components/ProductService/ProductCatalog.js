import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
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
  error: {
    border: "1px solid",
    margin: "50px auto",
    padding: "15px 10px 15px 50px",
    width: "400px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10px center",
    color: "#D8000C",
    backgroundColor: "#FFBABA",
    backgroundImage: "url('https://i.imgur.com/GnyDvKN.png')",
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
        <div className={classes.error}>
          Products could not be loaded due to an error!
        </div>
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
