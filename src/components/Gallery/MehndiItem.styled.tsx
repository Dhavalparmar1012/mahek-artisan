// IMPORT MUI
import { Box, styled } from "@mui/material";

// MEHNDI ITEM
export const BenefitsItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary[500],
  borderRadius: theme.spacing(1.5),
  height: "100%",
  width: "100%",
}));

export const BenefitsItemContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  height: "auto",
  width: "100%",
  padding: theme.spacing(2),
}));

// GALLERY
export const MahendiMainContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));
