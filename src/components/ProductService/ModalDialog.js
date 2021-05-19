import React from "react";
import Dialog from "@material-ui/core/Dialog";
import UploadForm from "./UploadForm";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      BackdropProps={{ style: { opacity: "0.75", backgroundColor: "black" } }}
    >
      <UploadForm handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
