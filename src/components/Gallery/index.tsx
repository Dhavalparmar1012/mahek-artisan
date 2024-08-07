import React, { useState } from "react";

// IMPORT MUI
import Grid from "@mui/material/Grid";
import Scrollbars from "react-custom-scrollbars-2";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// PROJECT IMPORT
import MehndiItem from "./MehndiItem";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import ContainerV2 from "../UIComponent/ContainerV2";
import UINewTypography from "../UIComponent/UINewTypography";
import { InformationLayoutContainer } from "../HomePage/HomePage.styled";

// TYPES
import {
  Arbic_Const,
  BridalHand,
  BridalLeg,
  MahendiType,
  Marwari_Const,
  MehndiTattoo_Const,
  Modern_Const,
} from "@/constants/bridalLeg.constants";
import { MehndiImage } from "@/types/MehndiImage";

const GalleryPage = () => {
  const [activeType, setActiveType] = useState(MahendiType[0]);

  const handleClick = (type: string) => {
    setActiveType(type);
  };

  let filteredImages: MehndiImage[] = [];

  switch (activeType) {
    case "Bridal hand":
      filteredImages = BridalHand;
      break;
    case "Bridal leg":
      filteredImages = BridalLeg;
      break;
    case "Modern mehndi":
      filteredImages = Modern_Const;
      break;
    case "Arabic mehndi":
      filteredImages = Arbic_Const;
      break;
    case "Marwari mehndi":
      filteredImages = Marwari_Const;
      break;
    case "Mehndi Tattoo":
      filteredImages = MehndiTattoo_Const;
      break;
    default:
      filteredImages = [];
  }

  return (
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
            Gallery
          </UINewTypography>
        </InformationLayoutContainer>
        <ContainerV2>
          <Box role="presentation" sx={{ mt: 3, mb: 3 }}>
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                "& .MuiLink-root": {
                  textDecoration: "none",
                },
              }}
            >
              {MahendiType.map((type, index) => (
                <Link
                  key={index}
                  underline="hover"
                  component="button"
                  color={activeType === type ? "primary" : "inherit"}
                  onClick={() => handleClick(type)}
                  sx={{ textDecoration: "none" }}
                >
                  {type.toUpperCase()}
                </Link>
              ))}
            </Breadcrumbs>
          </Box>

          <Box sx={{ mt: 3, mb: 3 }}>
            <Grid container spacing={2}>
              {filteredImages.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <MehndiItem
                    image={item.image}
                    title={item.title}
                    type={activeType}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </ContainerV2>
      </MainLayout>
    </Scrollbars>
  );
};

export default GalleryPage;
