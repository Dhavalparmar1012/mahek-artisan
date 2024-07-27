// IMPORT MUI
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Container } from "@mui/material";

// IMPORT PROJECT
import { ServicesTitle } from "../ReviewPage/Common.styled";

const items = [
  {
    name: "Bridal hand",
    imgPath: "images/Mehndi_latest/Bridal_hand/Bridal_hand_1.jpg",
  },
  {
    name: "Bridal leg",
    imgPath: "images/Mehndi_latest/Bridal_leg/Bridal_leg_1.jpg",
  },
  {
    name: "Modern",
    imgPath: "images/Mehndi_latest/Modern/Modern_12.jpg",
  },
  {
    name: "Bridal hand",
    imgPath: "images/Mehndi_latest/Bridal_hand/Bridal_hand_4.jpg",
  },
  {
    name: "Arbic",
    imgPath: "images/Mehndi_latest/Arbic/Arbic_1.jpg",
  },
  {
    name: "Modern",
    imgPath: "images/Mehndi_latest/Modern/Modern_13.jpg",
  },
  {
    name: "Bridal hand",
    imgPath: "images/Mehndi_latest/Bridal_hand/Bridal_hand_6.jpg",
  },
  {
    name: "Modern",
    imgPath: "images/Mehndi_latest/Modern/Modern_5.jpg",
  },
  {
    name: "Bridal leg",
    imgPath: "images/Mehndi_latest/Bridal_leg/Bridal_leg_2.jpg",
  },
  {
    name: "Bridal hand",
    imgPath: "images/Mehndi_latest/Bridal_hand/Bridal_hand_7.jpg",
  },
  {
    name: "Modern",
    imgPath: "images/Mehndi_latest/Modern/Modern_1.jpg",
  },
  {
    name: "Bridal leg",
    imgPath: "images/Mehndi_latest/Bridal_leg/Bridal_leg_3.jpg",
  },
  {
    name: "Modern",
    imgPath: "images/Mehndi_latest/Modern/Modern_3.jpg",
  },
  {
    name: "Marwari",
    imgPath: "images/Mehndi_latest/Marwari/Marwari_4.jpg",
  },
];

const MyCarousel = () => {
  return (
    <Container>
      <Carousel>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

const Item = ({ item }: { item: any }) => {
  return (
    <Paper>
      <Box
        component="img"
        sx={{
          display: "block",
          maxHeight: { md: 400 },
          height: { xs: 400, sm: 400 },
          width: "100%",
          objectFit: "contain",
        }}
        src={item.imgPath}
        alt={item.name}
      />
      <ServicesTitle variant="h2">{item.name}</ServicesTitle>
    </Paper>
  );
};

export default MyCarousel;
