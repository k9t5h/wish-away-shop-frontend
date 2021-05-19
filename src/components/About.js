import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline, Paper } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "50px auto",
      width: "500px",
      height: "500px",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Paper elevation={3} />
      </div>
    </MuiThemeProvider>
  );
};

export default About;
