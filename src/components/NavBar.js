import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { CardGiftcard, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    background: "linear-gradient(to left, rgb(67, 198, 172), rgb(25, 22, 84))",
  },
  giftButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    marginRight: theme.spacing(5),
    color: "white",
    fontSize: "1.2rem",
    padding: "20px 0",
    width: "150px",
    borderBottomWidth: "3px",
    borderBottomStyle: "solid",
    borderColor: "transparent",

    "&:hover": {
      borderColor: "white",
      transition: "0.3s all ease-out",
    },
    "&.active": {
      borderColor: "white",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.giftButton}
            color="inherit"
          >
            <CardGiftcard />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Wish Away Shop
          </Typography>
          <div className={classes.grow} />
          <NavLink
            to="/products"
            className={classes.link}
            activeClassName="active"
          >
            Products
          </NavLink>
          <NavLink
            to="/order"
            className={classes.link}
            activeClassName="active"
          >
            Order History
          </NavLink>
          <NavLink
            to="/about"
            className={classes.link}
            activeClassName="active"
          >
            About
          </NavLink>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
