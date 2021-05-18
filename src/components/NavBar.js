import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { CardGiftcard, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "30%",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "30%",
  },
  center: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
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
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
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
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <div className={classes.left}>
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
        </div>
        <div className={classes.center}>
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
        </div>
        <div className={classes.right}>
          <IconButton edge="end" color="inherit">
            <ShoppingCart />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    // </div>
  );
};

export default NavBar;
