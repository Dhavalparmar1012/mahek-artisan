import React from "react";

// IMPORT MUI
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";

const MehndiDialog = ({
  open,
  handleClose,
  imageSrc,
}: {
  open: boolean;
  handleClose: () => void;
  imageSrc: string;
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={false}>
      <Box
        component="img"
        src={imageSrc}
        sx={{
          width: "100%",
          maxWidth: "614px",
          height: "100%",
          maxHeight: "621px",
        }}
      />
    </Dialog>
  );
};

export default MehndiDialog;
