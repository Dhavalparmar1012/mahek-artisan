import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ReviewTitleMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const ReviewFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const ReviewFormField = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ReviewFormSeparate = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ReviewFormButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
}));

export const ReviewViewMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
}));

export const ReviewRatingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ReviewDividerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(5),
}));

export const ReviewPaginationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(2),
}));
