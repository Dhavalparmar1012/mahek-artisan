import React from "react";

//MUI IMPORT
import Box from "@mui/material/Box";
import Scrollbars from "react-custom-scrollbars-2";

//PROJECT IMPORT
import ContainerV2 from "../UIComponent/ContainerV2";
import MainLayout from "@/layouts/MainLayout/MainDashboardLayout";
import UINewTypography from "../UIComponent/UINewTypography";
import InformationSection from "../common/InformationSection/InformationSection";
import {
  AboutTitle,
  ArtCommonContainer,
  ArtContainer,
  ArtImageBox,
  ArtMainContainer,
  ArtSImageBox,
} from "./ArtPage.styled";

const ArtPage = () => {
  return (
    <Scrollbars autoHide autoHeight autoHeightMax={"100vh"}>
      <MainLayout>
        <InformationSection title="Art Of Mehndi" />
        <ContainerV2>
          <ArtMainContainer>
            <ArtImageBox src="images/Mehndi_latest/Bridal_hand/Bridal_hand_6.jpg" />
          </ArtMainContainer>
          <ArtCommonContainer>
            <ArtContainer>
              <AboutTitle variant="SubtitleLargeBold">
                What is Mehndi?
              </AboutTitle>
              <Box component="ul" pl={3}>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Mehndi is a temporary natural dye mainly used to produce
                    intricate and decorative art-work on the skin. Mehndi is
                    another word for henna.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    With its artistic application on the skin, it has become an
                    important expression of grand culture. The ancient art of
                    mehndi varies in different countries and cultures.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    With its artistic application on the skin, it has become an
                    important expression of grand culture. The ancient art of
                    mehndi varies in different countries and cultures.
                  </UINewTypography>
                </Box>
              </Box>
            </ArtContainer>

            <ArtSImageBox src="images\Mehndi_latest\Bridal_hand\Bridal_hand_14.jpg" />

            <ArtContainer>
              <AboutTitle variant="SubtitleLargeBold">
                Uses of Mehndi
              </AboutTitle>
              <Box component="ul" pl={3}>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Mehndi can be used a cosmetic to dye the skin, hair and
                    nails or it can be used for its healing and medicinal
                    properties to cure skin disorders, hair thinning and
                    providing resistance to the body from the tropical heat. It
                    is also used to colour fabric and dye leather. On the skin,
                    mehndi can be used as a decorative purpose. It is totally
                    safe, natural and painless to use on the skin. The flowers
                    from the henna plant are used to produce perfume.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    Traditionally, mehndi was used by asian brides to symbolize
                    love, happiness and prosperity for the couple. Nowadays,
                    mehndi is not only used for weddings and religious occasions
                    but also for trendy body art and tattoos around the naval,
                    wrists, on the shoulders and anklets.
                  </UINewTypography>
                </Box>
                <Box component="li">
                  <UINewTypography variant="subtitleLargeRegular">
                    In eastern cultures mehndi is mainly used for brides as a
                    wedding tradition. For many brides the application of bridal
                    mehndi is when they begin to feel the wedding vibes. Mehndi
                    nights are now becoming a popular event for celebrating the
                    nights before the wedding. Various themes like Arabic and
                    Indian are used to set the mehndi night with music and
                    dance.
                  </UINewTypography>
                </Box>
              </Box>
            </ArtContainer>
          </ArtCommonContainer>
        </ContainerV2>
      </MainLayout>
    </Scrollbars>
  );
};

export default ArtPage;
