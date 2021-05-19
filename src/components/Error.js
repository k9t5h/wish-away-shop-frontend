import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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

const Error = (props) => {
  const classes = useStyles();

  return <div className={classes.error}>{props.message}</div>;
};

export default Error;
