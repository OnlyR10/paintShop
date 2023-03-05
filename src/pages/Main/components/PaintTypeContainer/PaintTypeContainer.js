import React from "react";
import { ROOT } from "../../../../constants/Roots";
import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
} from "./styles";

export const PaintTypeContainer = ({ section }) => {
  const { header, Image, category, purpose } = section;

  return (
    <Container to={`${ROOT}/${category}`}>
      <PictureContainer>
        <PaintPicture src={Image} />
      </PictureContainer>

      <DescriptionContainer>
        <Header>{header}</Header>
        <Description>{purpose}</Description>
      </DescriptionContainer>
    </Container>
  );
};
