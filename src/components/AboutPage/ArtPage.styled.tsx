import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UINewTypography from "../UIComponent/UINewTypography";

export const AboutTitle = styled(UINewTypography)(() => ({
  color: "#6488ea",
  textAlign: "left",
}));

export const ArtMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export const ArtCommonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  gap: theme.spacing(4),
  alignItems: "start",
  maxWidth: 614,
  marginLeft: "auto",
  marginRight: "auto",
}));

export const ArtImageBox = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "420px",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
}));

export const ArtSImageBox = styled("img")(({ theme }) => ({
  width: "100%",
}));

export const ArtContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
