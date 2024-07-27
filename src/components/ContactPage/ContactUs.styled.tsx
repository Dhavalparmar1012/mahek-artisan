import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ContactMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  width: "100%",
}));

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  width: "100%",
}));
