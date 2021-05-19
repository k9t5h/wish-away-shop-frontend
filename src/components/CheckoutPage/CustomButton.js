import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  button: {
    margin: "15px",
    width: "180px",
    height: "40px",
    fontSize: "1.1rem",

    "&:hover": {
      backgroundColor: "#a1e4d2",
    },
    "& .MuiTouchRipple-root span": {
      backgroundColor: "blue",
      opacity: 0.3,
    },
  },
}));

const CustomButton = ({ text, onClickHandler }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      disableElevation
      onClick={onClickHandler}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
