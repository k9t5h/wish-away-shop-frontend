import React from "react";
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CardMedia, CssBaseline, Paper, Typography } from "@material-ui/core";

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
      width: "620px",
    },
  },
  text: {
    padding: "0 20px",
    textAlign: "justify",
  },
  title: {
    margin: "20px 0",
    textAlign: "center",
  },
  description: {
    marginBottom: "20px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classes.text}>
            <Typography className={classes.title} variant="h4">
              Welcome, Wanderer!
            </Typography>
            <Typography className={classes.description} variant="h5">
              Have you ever received a present that you didn't like? This site
              is for you!
            </Typography>
            <Typography variant="h6">
              You can upload the present and others will buy it. And you can buy
              others' stuff as well.
            </Typography>
            <Typography className={classes.description} variant="h6">
              It's perfect since it not only redistributes things and gadgets
              well (and so being environmentally friendly) but it redistributes
              happiness as well!
            </Typography>
          </div>

          <CardMedia
            component="img"
            src="https://image.freepik.com/free-photo/close-up-young-couple-spending-time-together_273609-40436.jpg"
          />
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default About;
