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
import InformationSection from "../common/InformationSection/InformationSection";
import { MahendiMainContainer } from "./MehndiItem.styled";

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
        <InformationSection title="Gallery" />
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

          <MahendiMainContainer>
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
          </MahendiMainContainer>
        </ContainerV2>
      </MainLayout>
    </Scrollbars>
  );
};

export default GalleryPage;
