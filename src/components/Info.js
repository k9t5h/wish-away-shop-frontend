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
    color: "#00529B",
    backgroundColor: "#BDE5F8",
    backgroundImage: "url('https://i.imgur.com/ilgqWuX.png')",
  },
}));

const Info = (props) => {
  const classes = useStyles();

  return <div className={classes.error}>{props.message}</div>;
};

export default Info;
