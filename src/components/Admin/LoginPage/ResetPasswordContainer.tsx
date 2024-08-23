import { useState } from "react";

// MATERIAL - UI
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// PROJECT IMPORTS
import InputText from "@/components/UIComponent/InputText";
import LoginLayout from "@/layouts/LoginLayout";
import StyleButton from "@/components/UIComponent/StyleLoadingButton";
import UINewTypography from "@/components/UIComponent/UINewTypography";
import CustomPasswordRegex from "../CustomPasswordRegex";
import {
  SetUpPasswordMainContainer,
  SetUpPasswordTitle,
  NewPasswordField,
} from "./ResetPassword.styled";

// TYPES
import { PasswordPattern } from "@/constants/regexConstants";

const ResetPasswordContainer = () => {
  const router = useRouter();
  const { email } = router.query;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        PasswordPattern,
        "Invalid Password! Does not meet requirements (this password has appeared in a data breach elsewhere and should never be used on any website)"
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), ""], "New password does not match"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        handleFormSubmit(values);
      },
    });

  const handleFormSubmit = async (values: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reset-password`,
        {
          email,
          newPassword: values.password,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        router.push("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <LoginLayout>
        <SetUpPasswordMainContainer>
          <SetUpPasswordTitle>
            <UINewTypography
              variant="h2"
              textAlign="center"
              sx={{ color: "text.secondary" }}
            >
              Setup your new password
            </UINewTypography>
            <Box>
              <UINewTypography variant="bodyRegular" textAlign="center">
                For the account&nbsp;
              </UINewTypography>
              <UINewTypography variant="bodySemiBold">
                {router.query.email}
              </UINewTypography>
            </Box>
          </SetUpPasswordTitle>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              width: "100%",
            }}
            onSubmit={handleSubmit}
          >
            <NewPasswordField>
              <UINewTypography variant="bodySemiBold">
                New Password
              </UINewTypography>
              <InputText
                fullWidth
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{
                  border: "2px solid",
                  borderColor: "primary.700",
                  height: "50px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon sx={{ color: "#86838A" }} />
                      ) : (
                        <VisibilityOffIcon sx={{ color: "#86838A" }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </NewPasswordField>
            <NewPasswordField>
              <UINewTypography variant="bodySemiBold">
                Confirm new password
              </UINewTypography>
              <InputText
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={{
                  border: "2px solid",
                  borderColor: "primary.700",
                  height: "50px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityIcon sx={{ color: "#86838A" }} />
                      ) : (
                        <VisibilityOffIcon sx={{ color: "#86838A" }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </NewPasswordField>
            <Box>
              <CustomPasswordRegex password={values.password} />
            </Box>
            <StyleButton type="submit" fullWidth variant="contained">
              Change password
            </StyleButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <UINewTypography
              variant="buttonLargeMenu"
              sx={{ color: "text.secondary" }}
            >
              Remember password?
            </UINewTypography>
            <Link
              href="/login"
              style={{ textDecoration: "underline" }}
              shallow={true}
            >
              <UINewTypography
                variant="buttonLargeBold"
                sx={{ color: "text.secondary" }}
              >
                Log in instead!
              </UINewTypography>
            </Link>
          </Box>
        </SetUpPasswordMainContainer>
      </LoginLayout>
    </>
  );
};

export default ResetPasswordContainer;
