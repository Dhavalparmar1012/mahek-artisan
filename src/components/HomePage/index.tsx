//IMPORT MUI
import React from "react";
import Box from "@mui/material/Box";
import Scrollbars from "react-custom-scrollbars-2";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

//PROJECT IMPORT
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import MyCarousel from "./MyCarousel";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import { MainContainerSpace } from "../ReviewPage/Common.styled";
import { InformationLayoutContainer } from "./HomePage.styled";
import ServiceMenu from "./ServiceMenu";
import ReviewStatus from "./ReviewStatus";
import ContactForm from "../ContactPage/ContactForm";
import ScrollToTopIcons from "./ScrollToTopIcons";

// TYPES
import Service from "./Service";
import { images } from "@/constants/carousel.consants";

const HomePage = () => {
  return (
    <>
      <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
        <MainLayout>
          <InformationLayoutContainer
            sx={{
              position: "relative",
              height: { lg: 190, md: 140, sm: 105, xs: 95 },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url(/images/wallpaper.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.6,
                zIndex: 0,
              },
            }}
          >
            <UINewTypography
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontSize: { xs: "20px", sm: "32px", md: "48px" },
                fontWeight: 700,
                position: "relative",
                zIndex: 1,
              }}
            >
              Welcome to Mehndi Creations!
            </UINewTypography>
          </InformationLayoutContainer>
          <ContainerV2>
            <MainContainerSpace>
              <MyCarousel />

              <ServiceMenu />

              <Box
                sx={{
                  width: "100%",
                  height: { xs: "410px" },
                  overflow: "hidden",
                  "& .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet":
                    {
                      width: "8px",
                      height: "5px",
                      background: "#FF68C0",
                      borderRadius: "16px",
                    },
                  "& .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet-active":
                    {
                      background: "#FF68C0",
                      width: "32px",
                      height: "4px",
                      borderRadius: "16px",
                    },
                  "& .swiper-pagination-bullets.swiper-pagination-horizontal": {
                    bottom: { md: "-8px", xs: "-30px" },
                  },
                }}
              >
                <Swiper
                  spaceBetween={8}
                  loop={true}
                  pagination={true}
                  modules={[Pagination]}
                  slidesPerView={1}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Box
                        component="img"
                        src={image}
                        alt={`Mehndi ${index}`}
                        sx={{
                          width: "100%",
                          height: "100%",
                          maxHeight: {
                            xs: "400px",
                            sm: "400px",
                            md: "400px",
                            lg: "400px",
                          },
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              <ReviewStatus />

              <Service />

              <ContactForm />

              <ScrollToTopIcons />
            </MainContainerSpace>
          </ContainerV2>
        </MainLayout>
      </Scrollbars>
    </>
  );
};

export default HomePage;
