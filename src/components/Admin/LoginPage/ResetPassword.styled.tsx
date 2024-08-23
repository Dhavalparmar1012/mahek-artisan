import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const SetUpPasswordMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "509px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(4),
}));

export const SetUpPasswordTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1.5),
  alignSelf: "stretch",
}));

export const NewPasswordField = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: theme.spacing(0.5),
  alignSelf: "stretch",
}));
