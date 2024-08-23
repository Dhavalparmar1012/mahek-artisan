// MATERIAL - UI
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import router from "next/router";

// PROJECT IMPORTS
import InputText from "@/components/UIComponent/InputText";
import StyleButton from "@/components/UIComponent/StyleButton";
import UINewTypography from "@/components/UIComponent/UINewTypography";
import {
  SetUpPasswordMainContainer,
  SetUpPasswordTitle,
  NewPasswordField,
} from "./ResetPassword.styled";
import LoginLayout from "@/layouts/LoginLayout";

const ValidateOtp = () => {
  const email = router.query.email as string;

  const validationSchema = Yup.object({
    resetPasswordOTP: Yup.string().required("OTP is required"),
  });

  const initialValues = {
    resetPasswordOTP: "",
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

  const handleSubmitForm = async (values: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/validate-otp`,
        {
          email,
          resetPasswordOTP: values.resetPasswordOTP,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        router.push({
          pathname: "/reset-password",
          query: { email },
        });
      } else {
        toast.error(response.data.message || "Invalid OTP. Please try again.");
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
    setSubmitting(false);
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
                For the account
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
              <UINewTypography variant="bodySemiBold">Otp</UINewTypography>
              <InputText
                fullWidth
                type="text"
                id="resetPasswordOTP"
                name="resetPasswordOTP"
                value={values.resetPasswordOTP}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.resetPasswordOTP && Boolean(errors.resetPasswordOTP)
                }
                helperText={touched.resetPasswordOTP && errors.resetPasswordOTP}
                sx={{
                  border: "2px solid",
                  borderColor: "primary.700",
                  height: "50px",
                }}
              />
            </NewPasswordField>
            <StyleButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
            >
              Submit
            </StyleButton>
          </Box>
        </SetUpPasswordMainContainer>
      </LoginLayout>
    </>
  );
};

export default ValidateOtp;
