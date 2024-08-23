import { useState } from "react";

// MATERIAL - UI
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// PROJECT IMPORTS
import InputText from "@/components/UIComponent/InputText";
import LoginLayout from "@/layouts/LoginLayout";
import StyleButton from "@/components/UIComponent/StyleLoadingButton";
import CheckInbox from "./CheckInbox";
import UINewTypography from "@/components/UIComponent/UINewTypography";
import {
  ResetPasswordMainContainer,
  ResetPasswordTitle,
  EmailContainer,
  RememberPasswordContainer,
} from "./Login.styled";

const ForgotPasswordLinkGenerateContainer = () => {
  const [step, setStep] = useState(0);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
  };

  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
  });

  const requestPasswordReset = async (email: string) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/forgot-password`,
        { email }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        return true;
      } else {
        toast.error(response.data.message || "An error occurred");
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

  const handleSubmitForm = async (values: any) => {
    const success = await requestPasswordReset(values.email);
    if (success) {
      setStep(1);
    }
    setSubmitting(false);
  };

  return (
    <>
      {step === 0 ? (
        <LoginLayout>
          <ResetPasswordMainContainer
            sx={{
              width: "100%",
              maxWidth: { lg: "509px", md: "450px", xs: "363px", sm: "509px" },
            }}
          >
            <ResetPasswordTitle>
              <UINewTypography variant="h2" sx={{ color: "text.secondary" }}>
                Reset password
              </UINewTypography>
              <UINewTypography variant="bodyRegular">
                Enter your email and We&apos;ll send you instructions on how to
                reset your password.
              </UINewTypography>
            </ResetPasswordTitle>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <EmailContainer>
                <UINewTypography variant="bodySemiBold">
                  Email Address
                </UINewTypography>
                <InputText
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <MailOutlineIcon sx={{ color: "#86838A" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    border: "2px solid",
                    borderColor: "secondary.light",
                    height: "50px",
                  }}
                />
              </EmailContainer>
              <StyleButton
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: { md: 4, xs: 5 } }}
              >
                <UINewTypography variant="buttonLargeBold">
                  Request link
                </UINewTypography>
              </StyleButton>
            </Box>
            <RememberPasswordContainer>
              <UINewTypography
                variant="buttonLargeMenu"
                sx={{ color: "text.secondary" }}
              >
                Remember password
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
            </RememberPasswordContainer>
          </ResetPasswordMainContainer>
        </LoginLayout>
      ) : (
        <>
          <CheckInbox email={values.email} />
        </>
      )}
    </>
  );
};

export default ForgotPasswordLinkGenerateContainer;
