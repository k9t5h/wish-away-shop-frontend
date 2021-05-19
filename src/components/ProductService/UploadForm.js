import React, { useState } from "react";
import axios from "axios";
import {
  InputAdornment,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import CategoryDropdown from "./CategoryDropdown";

const PRODUCT_REST_API_URL = "http://localhost:8762/products";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "400px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  message: {
    color: "darkblue",
  },
}));

const UploadForm = ({ handleClose }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendProductData();
  };

  const sendProductData = async () => {
    try {
      const data = {
        name: name,
        description: description,
        category: category,
        imageUrl: imageUrl,
        price: price,
      };
      await axios.post(PRODUCT_REST_API_URL, data);
      setMessage("Product successfully uploaded!");
    } catch (error) {
      setMessage("Your request could not be completed at this time.");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant="h4">Upload product</Typography>
      <TextField
        label="Name"
        variant="filled"
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Description"
        variant="filled"
        type="text"
        multiline={true}
        rows="3"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <CategoryDropdown
        onDropdownClick={(e) => setCategory(e.target.dataset.value)}
      />
      <TextField
        label="Image URL"
        variant="filled"
        type="text"
        required
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <TextField
        label="Price"
        variant="filled"
        type="number"
        inputProps={{ min: "0" }}
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <div className={classes.message}>{message}</div>
      <div>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default UploadForm;
