import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  userData: {
    display: "block",
    marginLeft: "50px",
  },
  column: {
    flexBasis: "50%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    marginLeft: "50px",
    padding: theme.spacing(1, 2),
  },
}));

const CustomerDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={(classes.column, classes.helper)}>
      <Typography variant="caption" className={classes.userData}>
        {props.name}
      </Typography>
      <Typography variant="caption" className={classes.userData}>
        {props.phone}
      </Typography>
      <Typography variant="caption" className={classes.userData}>
        {props.email}
      </Typography>
      <Typography variant="caption" className={classes.userData}>
        {props.address}
      </Typography>
    </div>
  );
};

export default CustomerDetails;
