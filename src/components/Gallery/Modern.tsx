// IMPORT MUI
import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// IMPORT PROJECT
import {
  BenefitsItemContainer,
  BenefitsItemContent,
} from "./MehndiItem.styled";
import ModernDialog from "./ModernDialog";
import UINewTypography from "../UIComponent/UINewTypography";

const Modern = ({ image, title }: { image: string; title: string }) => {
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
  return (
    <>
      <BenefitsItemContainer>
        <Box
          component="img"
          src={`/images/Mehndi_latest/Modern/${image}.jpg`}
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
      <ModernDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        image={image}
      />
    </>
  );
};

export default Modern;
