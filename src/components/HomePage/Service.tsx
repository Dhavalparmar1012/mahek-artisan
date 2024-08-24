import React from "react";

// IMPORT PROJECT
import UINewTypography from "../UIComponent/UINewTypography";
import { ReviewTitleMainContainer } from "../ReviewPage/Review.styled";
import {
  HeadlinePink,
  ServicesTitle,
  TitleLineContainer,
} from "../ReviewPage/Common.styled";

const Service = () => {
  return (
    <ReviewTitleMainContainer>
      <TitleLineContainer>
        <ServicesTitle variant="h2">Services</ServicesTitle>
        <HeadlinePink />
      </TitleLineContainer>
      <UINewTypography variant="SubtitleLargeBold">
        I can do Mehndi/Henna for just about any occasion. I Specialize in
        Bridal Mehndi, Sangeet Parties, Engagements, Baby Showers, Birthday
        Parties, Ladies Night outs, School Events, Corporate Events and
        Fundraisers. I love to extend this art form onto cakes and other mediums
        like wood, glass and candles.
      </UINewTypography>
    </ReviewTitleMainContainer>
  );
};

export default Service;
