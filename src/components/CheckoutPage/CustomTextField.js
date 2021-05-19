import { TextField } from "@material-ui/core";
import React from "react";

const CustomTextField = ({
  error,
  setData,
  data,
  setError,
  fieldname,
  label,
  required,
}) => {
  return (
    <TextField
      required={required ? required : true}
      id={fieldname}
      name={fieldname}
      label={label}
      fullWidth
      error={error[fieldname] !== ""}
      helperText={error[fieldname]}
      onChange={(event) => {
        setData({
          ...data,
          [fieldname]: event.target.value,
        });
        setError({ ...error, [fieldname]: "" });
      }}
    />
  );
};

export default CustomTextField;
