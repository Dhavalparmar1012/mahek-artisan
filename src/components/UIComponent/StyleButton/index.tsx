import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";
import { CastedForwardRefButtonType } from "../types";

const UIStyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "14px 24px",
  borderRadius: "10px 0px",
  fontSize: "16px",
  fontWeight: 700,
  "&.MuiButton-outlined": {
    border: `2px solid`,
  },
  "&.MuiButton-outlined:hover": {
    backgroundColor: theme.palette.primary[200],
    border: `2px solid`,
  },
  "&.MuiButton-text:hover": {
    backgroundColor: theme.palette.primary[100],
  },
  "&.MuiButton-outlinedWhite:hover": {
    backgroundColor: theme.palette.primary[800],
  },
  "&.MuiButton-sizeLarge": {
    fontSize: "20px",
    padding: "20px 32px",
  },
  "&.MuiButton-sizeSmall": {
    padding: "10px 16px",
  },
  "&.MuiButton-contained:hover": {
    backgroundColor: theme.palette.primary[800],
  },
}));

const CastedForwardRefButtonFnc: CastedForwardRefButtonType = (props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;

  return (
    <UIStyledButton ref={ref} {...rest}>
      {children}
    </UIStyledButton>
  );
};
const StyleButton = forwardRef(
  CastedForwardRefButtonFnc
) as CastedForwardRefButtonType;

export default StyleButton;
