import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const CATEGORY_REST_API_URL =
  "https://wa-api-gateway.herokuapp.com/products/categories";

const CategoryDropdown = (props) => {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selected, setSelected] = useState("");

  const labelRef = useRef();
  const labelWidth = labelRef.current ? labelRef.current.clientWidth : 0;

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

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: "400px" }} variant="filled" required>
      <InputLabel id="dropdown">Category</InputLabel>
      <Select
        labelId="dropdown"
        labelWidth={labelWidth}
        value={selected}
        onChange={handleChange}
      >
        {isError && <MenuItem>No category found</MenuItem>}
        {!isError &&
          categories.map((category, index) => (
            <MenuItem
              key={index}
              value={category}
              onClick={props.onDropdownClick}
            >
              {category}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CategoryDropdown;
