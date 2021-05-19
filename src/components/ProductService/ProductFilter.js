import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Fab } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

const CATEGORY_REST_API_URL = "http://localhost:8762/products/categories";

const useStyles = makeStyles(() => ({
  button: {
    position: "fixed",
    top: "116px",
    right: "25px",
    zIndex: "1",
  },
}));

const ProductFilter = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsError(false);

      try {
        const response = await axios.get(CATEGORY_REST_API_URL);
        setCategories(response.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {!isError && (
        <Fab className={classes.button} onClick={handleClick}>
          <FilterListIcon />
        </Fab>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            props.onCategoryClick("");
            handleClose();
          }}
        >
          ALL
        </MenuItem>
        {categories.map((category, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              props.onCategoryClick(category);
              handleClose();
            }}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ProductFilter;
