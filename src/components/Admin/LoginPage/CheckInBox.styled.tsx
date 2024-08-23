import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const CheckInBoxMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "509px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(5),
}));

export const CheckInBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  alignSelf: "stretch",
}));

export const CheckInBoxTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1.5),
  alignSelf: "stretch",
}));

export const CheckInBoxLogin = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
