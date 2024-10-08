//IMPORT MUI
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// IMPORT PROJECT
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import InputText from "../UIComponent/InputText";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  ReviewDividerContainer,
  ReviewFormButton,
  ReviewFormContainer,
  ReviewFormField,
  ReviewFormSeparate,
  ReviewPaginationContainer,
  ReviewRatingContainer,
  ReviewTitleMainContainer,
  ReviewViewMainContainer,
} from "./Review.styled";
import StyleButton from "../UIComponent/StyleButton";
import {
  HeadlinePink,
  MainContainerSpace,
  ServicesTitle,
  TitleLineContainer,
} from "./Common.styled";
import InformationSection from "../common/InformationSection/InformationSection";

// TYPES
import { Review } from "@/types/Review";

const ReviewPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const reviewsPerPage = 5;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    fname: Yup.string().required("First name is required"),
    rating: Yup.number().required("Rating is required"),
    country: Yup.string().required("Country is required"),
    review: Yup.string().required("Review is required"),
  });

  const initialValues = {
    email: "",
    fname: "",
    rating: 0,
    country: "",
    review: "",
  };

  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleReset,
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews/submit`,
        values
      );
      if (response && response.data.success) {
        toast.success(response.data.message);
        fetchReviews(currentPage);
        resetForm();
      } else {
        toast.error(response.data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    setSubmitting(false);
  };

  const fetchReviews = async (page: number) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews/get`,
        {
          params: {
            page,
            limit: reviewsPerPage,
          },
        }
      );
      setReviews(response.data.reviewsList);
      setTotalPages(Math.ceil(response.data.totalReviews / reviewsPerPage));
    } catch (error) {
      toast.error("Failed to fetch reviews");
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  return (
    <>
      <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
        <MainLayout>
          <InformationSection title="Review" />
          <ContainerV2>
            <MainContainerSpace>
              <ReviewTitleMainContainer>
                <TitleLineContainer>
                  <ServicesTitle variant="h2">
                    Thank you for visiting our mehndi
                  </ServicesTitle>
                  <HeadlinePink />
                </TitleLineContainer>
                <UINewTypography variant="SubtitleLargeBold" textAlign="center">
                  It has been a true joy to work with all my wonderful brides
                  and their families. Thank you for welcoming me into your
                  special celebrations and allowing me to be a part of your
                  memorable moments.
                </UINewTypography>
              </ReviewTitleMainContainer>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                <ReviewTitleMainContainer>
                  <ServicesTitle variant="h2">Submit your review</ServicesTitle>
                  <ReviewFormContainer>
                    <ReviewFormField>
                      <ReviewFormSeparate>
                        <InputText
                          fullWidth
                          type="text"
                          id="fname"
                          name="fname"
                          label="First Name"
                          value={values.fname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.fname && Boolean(errors.fname)}
                          helperText={touched.fname && errors.fname}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <PersonIcon sx={{ color: "#86838A" }} />
                              </InputAdornment>
                            ),
                          }}
                        />

                        <InputText
                          fullWidth
                          id="email"
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{
                            border: "2px solid",
                            borderColor: "secondary.light",
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <MailOutlineIcon sx={{ color: "#86838A" }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </ReviewFormSeparate>

                      <InputText
                        fullWidth
                        name="country"
                        label="country"
                        variant="outlined"
                        type="text"
                        multiline
                        rows={4}
                        value={values.country}
                        error={touched.country && Boolean(errors.country)}
                        helperText={
                          touched.country && errors.country
                            ? errors.country
                            : ""
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <InputText
                        fullWidth
                        name="review"
                        label="Review"
                        variant="outlined"
                        type="text"
                        multiline
                        rows={4}
                        value={values.review}
                        error={touched.review && Boolean(errors.review)}
                        helperText={
                          touched.review && errors.review ? errors.review : ""
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                      <Box>
                        <UINewTypography>Rating</UINewTypography>
                        <Rating
                          sx={{
                            color: "#ffd700",
                            "& .MuiRating-iconEmpty": {
                              color: "#888",
                            },
                          }}
                          name="rating"
                          value={values.rating}
                          onChange={(event, newValue) => {
                            setFieldValue("rating", newValue);
                          }}
                        />
                        {touched.rating && errors.rating && (
                          <UINewTypography variant="body2" color="error">
                            {errors.rating}
                          </UINewTypography>
                        )}
                      </Box>
                    </ReviewFormField>
                    <ReviewFormButton>
                      <StyleButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                      >
                        Submit
                      </StyleButton>
                      <Button
                        variant="outlined"
                        onClick={handleReset}
                        sx={{ color: "error.300" }}
                      >
                        Reset
                      </Button>
                    </ReviewFormButton>
                  </ReviewFormContainer>
                </ReviewTitleMainContainer>
              </Box>

              <ReviewViewMainContainer>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ borderColor: "secondary.light" }}
                />

                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <ReviewRatingContainer>
                        <Rating
                          sx={{
                            color: "#ffd700",
                            "& .MuiRating-iconEmpty": {
                              color: "#888",
                            },
                          }}
                          value={review.rating}
                          readOnly
                        />
                        <UINewTypography variant="subtitle">
                          {moment(review.createdAt).format("MMM D, YYYY")} by{" "}
                          {review.fname}
                        </UINewTypography>
                      </ReviewRatingContainer>
                      <UINewTypography variant="bodyLargeBold">{`Town, State: ${review.country}`}</UINewTypography>
                      <ReviewDividerContainer>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            borderColor: "#fff",
                            height: "100px",
                          }}
                        />
                        <UINewTypography>{review.review}</UINewTypography>
                      </ReviewDividerContainer>
                    </Box>
                  ))
                ) : (
                  <UINewTypography variant="h2">
                    No reviews available.
                  </UINewTypography>
                )}
              </ReviewViewMainContainer>
              <ReviewPaginationContainer>
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <UINewTypography variant="bodyLargeBold">
                  Page {currentPage} of {totalPages}
                </UINewTypography>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </ReviewPaginationContainer>
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default ReviewPage;
