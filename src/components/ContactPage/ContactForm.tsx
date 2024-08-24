import React from "react";

//IMPORT MUI
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Grid from "@mui/material/Grid";

//PROJECT IMPORT
import {
  ReviewFormField,
  ReviewFormSeparate,
  ReviewTitleMainContainer,
} from "../ReviewPage/Review.styled";
import InputText from "../UIComponent/InputText";
import StyleButton from "../UIComponent/StyleButton";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  HeadlinePink,
  ServicesTitle,
  TitleLineContainer,
} from "../ReviewPage/Common.styled";
import { ContactContainer, ContactMainContainer } from "./ContactUs.styled";

const ContactForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    message: Yup.string().required("Message is required"),
    telephone: Yup.number().required("Telephone is required"),
  });

  const initialValues = {
    email: "",
    fname: "",
    lname: "",
    telephone: "",
    message: "",
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
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm);
    },
  });

  const handleSubmitForm = async (values: any, resetForm: () => void) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts/submit`,
        values
      );
      if (response && response.data.success) {
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error(response.data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    setSubmitting(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <ReviewTitleMainContainer>
        <TitleLineContainer>
          <ServicesTitle variant="h2">Contact us</ServicesTitle>
          <HeadlinePink />
        </TitleLineContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.46765236953848!2d72.89641048482345!3d21.21270965292943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7dd9ddc727%3A0x2018ee4574d3afe!2sSetubandh%20Hills!5e0!3m2!1sen!2sin!4v1722070547036!5m2!1sen!2sin"
              width="100%"
              height="490px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContactMainContainer>
              <ReviewFormField>
                <ReviewFormSeparate>
                  <ContactContainer>
                    <UINewTypography>First Name</UINewTypography>
                    <InputText
                      fullWidth
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fname && Boolean(errors.fname)}
                      helperText={touched.fname && errors.fname}
                    />
                  </ContactContainer>
                  <ContactContainer>
                    <UINewTypography>Last Name</UINewTypography>
                    <InputText
                      fullWidth
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lname && Boolean(errors.lname)}
                      helperText={touched.lname && errors.lname}
                    />
                  </ContactContainer>
                </ReviewFormSeparate>
                <ContactContainer>
                  <UINewTypography>Telephone</UINewTypography>
                  <InputText
                    fullWidth
                    id="telephone"
                    name="telephone"
                    placeholder="Enter your telephone"
                    value={values.telephone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.telephone && Boolean(errors.telephone)}
                    helperText={touched.telephone && errors.telephone}
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.light",
                    }}
                  />
                </ContactContainer>
                <ContactContainer>
                  <UINewTypography>Email</UINewTypography>
                  <InputText
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{
                      border: "2px solid",
                      borderColor: "secondary.light",
                    }}
                  />
                </ContactContainer>
                <ContactContainer>
                  <UINewTypography>Message</UINewTypography>
                  <InputText
                    fullWidth
                    name="message"
                    placeholder="Enter your message "
                    variant="outlined"
                    type="text"
                    multiline
                    rows={4}
                    value={values.message}
                    error={touched.message && Boolean(errors.message)}
                    helperText={
                      touched.message && errors.message ? errors.message : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </ContactContainer>
              </ReviewFormField>
              <StyleButton
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                Submit
              </StyleButton>
            </ContactMainContainer>
          </Grid>
        </Grid>
      </ReviewTitleMainContainer>
    </form>
  );
};

export default ContactForm;
