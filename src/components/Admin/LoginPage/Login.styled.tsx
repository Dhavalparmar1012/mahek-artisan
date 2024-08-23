import theme from "@/theme";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const LoginPageMainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  gap: theme.spacing(5),
  padding: theme.spacing(5),
}));

export const LoginContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const LoginFieldContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: theme.spacing(0.5),
}));

export const ResetPasswordMainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(5),
  },
  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
  },
}));

export const ResetPasswordTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(1.5),
  alignSelf: "stretch",
}));

export const EmailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: theme.spacing(0.5),
}));

export const RememberPasswordContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
