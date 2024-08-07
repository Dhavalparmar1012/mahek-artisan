import React, { useState } from "react";

// IMPORT MUI
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// IMPORT PROJECT
import {
  BenefitsItemContainer,
  BenefitsItemContent,
} from "./MehndiItem.styled";
import MehndiDialog from "./MehndiDialog";
import UINewTypography from "../UIComponent/UINewTypography";

// TYPES
import { MehndiItemProps } from "@/types/MehndiImage";

const MehndiItem = ({ image, title, type }: MehndiItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleImageClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getImagePath = () => {
    const typePathMap: { [key: string]: string } = {
      "Bridal hand": "Bridal_hand",
      "Bridal leg": "Bridal_leg",
      "Modern mehndi": "Modern",
      "Arabic mehndi": "Arbic",
      "Marwari mehndi": "Marwari",
      "Mehndi Tattoo": "Mehndi Tatto",
    };

    return `/images/Mehndi_latest/${typePathMap[type]}/${image}.jpg`;
  };

  return (
    <>
      <BenefitsItemContainer>
        <Box
          component="img"
          src={getImagePath()}
          width="100%"
          height={299}
          onClick={handleImageClick}
          sx={{ cursor: "pointer" }}
        />
        <BenefitsItemContent>
          <UINewTypography variant="h6" color="text.secondary">
            {title}
          </UINewTypography>

          <IconButton onClick={toggleFavorite} aria-label="toggle favorite">
            {isFavorite ? (
              <FavoriteIcon
                sx={{
                  width: "100%",
                  maxWidth: "22px",
                  height: "22px",
                  color: "#FF00BF",
                }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{
                  width: "100%",
                  maxWidth: "22px",
                  height: "22px",
                  color: "#FF00BF",
                }}
              />
            )}
          </IconButton>
        </BenefitsItemContent>
      </BenefitsItemContainer>
      <MehndiDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        imageSrc={getImagePath()}
      />
    </>
  );
};

export default MehndiItem;
