// IMPORT MUI
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box, Container } from "@mui/material";

// IMPORT PROJECT
import { ServicesTitle } from "../ReviewPage/Common.styled";
import { items } from "@/constants/carousel.consants";

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
      <ServicesTitle variant="h6">{item.name}</ServicesTitle>
    </Paper>
  );
};

export default MyCarousel;
